new Promise(resolve => {
    if (document.readyState === 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(function() {
    return new Promise(function(resolve, reject) {
        VK.init({
            apiId: 5608246
        });
        VK.Auth.login(response => {
            if (response.session) {
                resolve(response);
            } else {
                reject(new Error('Authorization failed'));
            }
        }, 2);
    });
}).then(function() {
    return new Promise(function(resolve, reject) {
        VK.api('friends.get', { v: '5.53', 'fields': 'photo_100' }, response => {
            if (response.error) {
                reject(new Error(response.error.error_msg));
            } else {

                let friendArr = [];

                for (item = 0; item < response.response.items.length; item++) {
                    friendArr[friendArr.length] = {
                        first_name: response.response.items[item].first_name,
                        last_name: response.response.items[item].last_name,
                        photo_100: response.response.items[item].photo_100
                    }

                }

                let source = friendsList.innerHTML;
                let templateFn = Handlebars.compile(source);
                let template = templateFn({
                    item: friendArr
                });
                appListBlock.innerHTML = template;
                resolve();
            }
        });
    });
}).catch(function(e) {
    console.log('Ошибка: ' + e.message);
});

friendsInput.addEventListener('input', () => {

    var str = friendsInput.value.toLowerCase(),
        i,
        elements = appListBlock.children;
    for (i = 0; i < elements.length; i++) {

        if (elements[i].innerHTML.toLowerCase().indexOf(str) > -1) {

            elements[i].style.display = 'block';
        } else {
            elements[i].style.display = 'none';
        }
    }

});


let itemAdd = document.getElementsByClassName('app__list__item__add')[0];

console.log(itemAdd);

itemAdd.addEventListener('click', function(e) {

     console.log(e.target.parentNode);

 });


















//


// var dragObject = {};

// document.onmousedown = function(e) {

//     if (e.which != 1) { // если клик правой кнопкой мыши
//         return; // то он не запускает перенос
//     }

//     var elem = e.target.closest('.app__list__item');

//     if (!elem) return; // не нашли, клик вне draggable-объекта

//     // запомнить переносимый объект
//     dragObject.elem = elem;

//     // запомнить координаты, с которых начат перенос объекта
//     dragObject.downX = e.pageX;
//     dragObject.downY = e.pageY;
//     console.log(elem);
// }

// document.onmousemove = function(e) {

//     if (!dragObject.elem) return;

//     if (dragObject.elem) {
//         var moveX = e.pageX - dragObject.downX;
//         var moveY = e.pageY - dragObject.downY;

//         var coords = getCoords(dragObject.elem);

//         dragObject.shiftX = dragObject.downX - coords.left;
//         dragObject.shiftY = dragObject.downY - coords.top;

//         startDrag(e);

//     }
//     dragObject.elem.style.left = e.pageX - dragObject.shiftX + 'px';
//     dragObject.elem.style.top = e.pageY - dragObject.shiftY + 'px';

//     return false;
// }

// function startDrag(e) {
//   var dragged = dragObject.elem;

//   dragged.style.zIndex = 9999;
//   dragged.style.position = 'absolute';
// }


   
   // arrAdd.forEach(function(elem) {
   //  console.log(elem)
   // });

   // console.log(arrAdd)


 