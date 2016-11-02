let body = document.body;
let newEl = document.createElement('span');

function prepend(container, newElement) {

    newElement.innerText = "Текст добавленный в самое начало элемента!"
    container.insertBefore(newElement, container.firstChild);
};

prepend(container, newEl);

console.log("Чтобы посмотреть работу функции prepend закомментируйте функцию deleteTextNodes")

function deleteTextNodes(element) {

    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

deleteTextNodes(body);
