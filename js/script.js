const btnPerson = document.querySelector('.right .icon-person');
const btnNotification = document.querySelector('.right .icon-notification');
const btnSearch = document.querySelector('.right a');
const divLeft = document.querySelector('.left');



btnSearch.addEventListener('mouseover', () => {
    btnSearch.querySelector('svg').setAttribute('style', 'color: white;');

    btnSearch.onmouseout = () => {
        btnSearch.querySelector('svg').setAttribute('style', 'color: #aaa6b3;');
    }
})

btnSearch.addEventListener('click', (event) => {
    event.preventDefault()
    const input = document.querySelector('.search input');
    if (input.classList.contains('hidden')) {
        input.classList.remove('hidden');
        btnSearch.classList.add('hidden');
    }

    divLeft.addEventListener('click', function(){
        input.classList.add('hidden');
        btnSearch.classList.remove('hidden');
    })
})

btnPerson.addEventListener('mouseover', (event) => {
    event.preventDefault();
    btnPerson.querySelector('svg').setAttribute('style', 'color: white;');

    btnPerson.onmouseout = () => {
        btnPerson.querySelector('svg').setAttribute('style', 'color: #aaa6b3;');
    }
})

btnNotification.addEventListener('mouseover', (event) => {
    event.preventDefault();
    btnNotification.querySelector('svg').setAttribute('style', 'color: white;');

    btnNotification.onmouseout = () => {
        btnNotification.querySelector('svg').setAttribute('style', 'color: #aaa6b3;');
    }
})


