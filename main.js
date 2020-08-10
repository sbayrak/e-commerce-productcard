const main = document.querySelector('.main');
const img = document.querySelector('.main .image img');
const imgs = document.querySelector('.images');


main.addEventListener('mouseenter', (e) => {

    main.classList.add('active');

    img.style.transform = 'scale(1.03)';
})

main.addEventListener('mouseleave', (e) =>{

    main.classList.remove('active');
    img.style.transform = 'scale(1)';
})

imgs.addEventListener('click', (e) => {

    img.src = e.target.src;
})