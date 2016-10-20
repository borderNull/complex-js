let cookieArr = [];
    let table = document.body.querySelector('.cookie__table');
    let deleteBtn = document.createElement('button');

    document.cookie.split(';').forEach(cookie => {
        cookieArr[cookieArr.length] = cookie.split('=')
    });

    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('class', 'btn btn-danger');
    deleteBtn.setAttribute('data-button', 'delete');
    deleteBtn.innerText = 'Удалить';

    getCookie(cookieArr)

    function getCookie(cookieArr) {

        for (let el of cookieArr) {

            let tr = document.createElement('tr');

            let cookieName = document.createElement('td');
            cookieName.innerText = el[0];

            let cookieVal = document.createElement('td');
            cookieVal.innerText = el[1];

            let button = document.createElement('td');
            button.appendChild(deleteBtn.cloneNode(true));

            tr.appendChild(cookieName);
            tr.appendChild(cookieVal);
            tr.appendChild(button);

            table.appendChild(tr);
        }
    }

    function cookieRemove(name, val) {

        let today = new Date();

        let str = today.toGMTString();

        document.cookie = `${name}=${val}; expires=${str}`;
    }

    table.addEventListener('click', e => {

        if (e.target.dataset.button === 'delete') {

            let tr = e.target.closest('tr');

            let cookieName = tr.childNodes[0].innerText;
            let cookieVal = tr.childNodes[1].innerText;

            let deleteConfirm = confirm(`Удалить cookie с именем ${cookieName}?`);


            if (deleteConfirm) {

                cookieRemove(cookieName, cookieVal);
                tr.remove;
            }
        }
    });