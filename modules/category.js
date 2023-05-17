import { ifEq, forLoop } from "./helpers.js";

function render(data) {
  return `
  
  		<h1>${data.category}</h1>

  		${forLoop(data.posts, "<h1>${title}</h1><p>${body}</p>")}
	
	`;
}

export { render };
