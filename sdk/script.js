new Promise(resolve => {
  if (document.readyState === 'complete') {
    resolve();
   } else {
     window.onload = resolve;
  }
}).then(function() {
  return new Promise(function(resolve,reject) {
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
   return new Promise(function(resolve,reject) {
	VK.api('users.get', {'name_case': 'nom'}, response => {
   		if (response.error) {
   			reject();
   		} else {
   			let userData = response.response[0];
   			headerInfo.textContent = `This is your friend list ${userData.first_name} ${userData.last_name}`;
   			resolve();
   		}
   	 });
   })
}).then(function() {
  return new Promise(function(resolve,reject) {
   VK.api('friends.get', {'order':'name', fields:'photo_100,bdate,age'} , function(response) {
     if (response.error) {
      reject(new Error(response.error.error_msg));
     } else {
      let source = friendsListTemplate.innerHTML;
      let templateFn = Handlebars.compile(source);
      let template = templateFn({list: response.response});

      results.innerHTML = template;
      resolve();
     }
   });
  });
}).catch(function(e) {
  alert(`error: ${e.message}`);
});
