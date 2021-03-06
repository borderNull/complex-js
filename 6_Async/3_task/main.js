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


         for ({ name }
             of response) {
             let div = document.createElement('div');
             div.innerText = name;
             container.appendChild(div);
         }
     });
 });

 cityList.addEventListener('input', () => {

     var str = cityList.value.toLowerCase(),
         i,
         elements = container.childNodes;
     for (i = 0; i < elements.length; i++) {
         if (elements[i].innerHTML.toLowerCase().indexOf(str) > -1) {
             elements[i].style.display = 'block';
         } else {
             elements[i].style.display = 'none';
         }
     }
 });
