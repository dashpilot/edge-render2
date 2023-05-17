import { ifEq, forLoop } from "./helpers.js";

function render(data) {
  return `
  		${header()}
		
		<div class="container mt-5">
		
  			<h1 class="mb-5">${data.category}</h1>
	
  			${forLoop(
          data.posts.filter((x) => x.category == data.category),
          "<h2>${title}</h2><p>${body}</p>"
        )}
		  
		</div>
		  
		${footer()}
	
	`;
}

function header() {
  return `<!DOCTYPE html>
	<html>
	  <head>
		<meta charset="UTF-8" />
		<title>Vercel Edge</title>
		<link
		  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		  rel="stylesheet"
		  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		  crossorigin="anonymous"
		/>
	
		<style>
		  section {
			padding: 40px;
		  }
	
		  nav a {
			color: white;
			text-decoration: none;
		  }
		</style>
	
		<script type="module">
		  import { render } from "./modules/category.js";
	
		  const r = await fetch("data.json");
		  const data = await r.json();
	
		  var result = render(data);
	
		  //var navTpl = nav();
	
		  // document.querySelector("#nav").innerHTML = navTpl;
		  document.querySelector("#page").innerHTML = result;
		</script>
	  </head>
	
	  <body>
		<div id="nav">
		  <nav class="p-3 text-light bg-dark">
			<a href="/" class="ms-3">Home</a>
			<a href="/c/about" class="ms-3">About</a>
			<a href="/c/contact" class="ms-3">Contact</a>
		  </nav>
		</div>
		`;
}

function footer() {
  return `
	<div id="app"></div>
	  </body>
	</html>
	`;
}

export { render };
