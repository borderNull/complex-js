function sendAjax(url) {
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.responseType = 'json';

        xhr.addEventListener('load', () => {

            resolve(xhr.response);
        });

        xhr.addEventListener('error', () => {

            reject();
        });
        xhr.send();
    });
}


window.addEventListener('load', () => {

    sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then((response) => {

        response.sort(function(a, b) {

            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;

        });

        var source = cityFilterTemplate.innerHTML;
        var templateFn = Handlebars.compile(source);
        var template = templateFn({
            item: response
        });
        container.innerHTML = template;

    });
});

cityInput.addEventListener('input', () => {

    var str = cityInput.value.toLowerCase(),
        i,
        elements = container.children;

    for (i = 0; i < elements.length; i++) {
        if (elements[i].innerHTML.toLowerCase().indexOf(str) > -1) {
            elements[i].style.display = 'block';
        } else {
            elements[i].style.display = 'none';
        }
    }
});
