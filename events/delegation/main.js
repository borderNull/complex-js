// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i ++) {
// 	acc[i].onclick = function() {
// 		this.classList.toggle("active");
// 		this.nextElementSibling.classList.toggle("show");
		
// 	}
// }


	main.addEventListener('click', function(e) {

		//console.log(`there was a click on element ${e.target.getAttribute('my-attr')}`);
	    e.target.classList.toggle('active');
	    e.target.nextElementSibling.classList.toggle('show');
	});