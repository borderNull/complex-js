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
                let itemAdd = document.getElementsByClassName('app__list__item__add');
                let i;
                for (i = 0; i < itemAdd.length; i++) {

                    itemAdd[i].addEventListener('click', function(e) {

                        console.log(e.target.parentNode);

                    });
                }

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
