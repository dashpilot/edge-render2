import { ifEq, forLoop } from "./helpers.js";

function render(data) {
  return `

  		${forLoop(data.posts, "<h1>${title}</h1><p>${body}</p>")}
	
	`;
}

export { render };
