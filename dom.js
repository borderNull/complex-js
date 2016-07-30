
let body = document.body;
let el1 = document.createElement('div');
let el2 = document.createElement('span');
function prepend(container,newElement) {

 container = document.createElement('div');
 newElement = document.createElement('span');
newElement.innerText = "Woohooo!"
body.appendChild(container);
container.insertBefore(newElement,container.firstChild);

}

prepend(el1,el2);

function deleteTextNodes(element) {

	while (element.hasChildNodes()) {
		element.removeChild(element.firstChild)
	}
}

deleteTextNodes(body);