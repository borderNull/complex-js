new Promise(resolve => {
    if (document.readyState === 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(function() {
    return new Promise(function(resolve, reject) {
        VK.init({
            apiId: 5585841
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
        VK.api('users.get', { 'fields': 'photo_200', 'name_case': 'gen' }, response => {
            if (response.error) {
                reject();
            } else {
                let userData = response.response[0];
                headerInfo.textContent = `Список друзей ${userData.first_name} ${userData.last_name}`;
                resolve();
            }
        });
    })
}).then(function() {
    return new Promise(function(resolve, reject) {
        VK.api('friends.get', { v: '5.53', 'fields': 'photo_100, bdate' }, function(response) {
            
                if (response.error) {
                reject(new Error(response.error.error_msg));
            } else {
                let obMyFriends = [];
                let nowDate = new Date();
 
                
                let myDate = { 
                    day: nowDate.getDate(),
                    month: nowDate.getMonth() + 1,
                    year: nowDate.getFullYear()
                };

                
                function yearBDay(bdate) {
                    if (!bdate) return "";

                    let bDay = bdate.split('.');
                    if (!bDay[2]) return "";
                    else return myDate.year - bDay[2];
                }

              

                let yesBDFriends = [];
                let noBDFriend = [];
                let beforeBD = [];
                let afterBD = [];

               
                for (let item = 0; item < response.response.items.length; item++) {
                    if (response.response.items[item].bdate == undefined) {
                        noBDFriend[noBDFriend.length] = {
                            first_name: response.response.items[item].first_name,
                            last_name: response.response.items[item].last_name,
                            photo_100: response.response.items[item].photo_100
                        }
                    } else {
                        yesBDFriends[yesBDFriends.length] = {
                            first_name: response.response.items[item].first_name,
                            last_name: response.response.items[item].last_name,
                            photo_100: response.response.items[item].photo_100,
                            bdate: response.response.items[item].bdate,
                            year: yearBDay(response.response.items[item].bdate)
                        }
                    }
                }

                console.log(yesBDFriends, noBDFriend);

                
                let sortMyFriends = yesBDFriends.sort(function(a, b) {

                    let aDateArr = a.bdate.split('.');
                    let bDateArr = b.bdate.split('.');

                    if (parseInt(aDateArr[1]) > parseInt(bDateArr[1])) return 1;
                    else if (parseInt(aDateArr[1]) < parseInt(bDateArr[1])) return -1;

                    if (parseInt(aDateArr[0]) >= parseInt(bDateArr[0])) return 1;
                    else if (parseInt(aDateArr[0]) < parseInt(bDateArr[0])) return -1;
                });

               
                sortMyFriends.forEach(function(elem) {
                    let bDate = elem.bdate.split('.');
                    if (bDate[1] > myDate.month) return afterBD[afterBD.length] = elem;
                    else if (bDate[1] < myDate.month) return beforeBD[beforeBD.length] = elem;

                    if (bDate[0] >= myDate.day) return afterBD[afterBD.length] = elem;
                    else if (bDate[0] < myDate.day) return beforeBD[beforeBD.length] = elem;
                });

          
                let source = friendsListTemplate.innerHTML;
                let templateFn = Handlebars.compile(source);
                let template = templateFn({ list: [].concat(afterBD, beforeBD, noBDFriend) });
                results.innerHTML = template;

                resolve();
            }
        });
    });
}).catch(function(e) {
    console.log('Ошибка: ' + e.message);
});


