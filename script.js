/*
            Handle menu transition
            ----------------------

            Add event listener to menu class,
            toggle target classes with change class
            for sliding menu.


*/

document.querySelector('.menu').addEventListener
('click', ()=> {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})


//---------------------------------------------


const icons = document.querySelectorAll('.icons img');
let i = 1;


setInterval(()=> {
    i++;
    const icon = document.querySelector('.icons .change');
    icon.classList.remove('change');
    if(i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }
}
, 4000);


//---------------------------------------



document.querySelector('.btn.dinner').addEventListener('click', ()=> {
    document.querySelectorAll('.dinner-target').forEach((item) => {
        item.classList.toggle('display');
    })
})

document.querySelector('.btn.drinks').addEventListener('click', ()=> {
    document.querySelectorAll('.drinks-target').forEach((item) => {
        item.classList.toggle('display');
    })
})

document.querySelector('.btn.dessert').addEventListener('click', ()=> {
    document.querySelectorAll('.dessert-target').forEach((item) => {
        item.classList.toggle('display');
    })
})
    
    
    



document.querySelector('.dinner.close').addEventListener('click', ()=> {
    document.querySelectorAll('.display').forEach((item) => {
        item.classList.toggle('display');
    })
})

document.querySelector('.drinks.close').addEventListener('click', ()=> {
    document.querySelectorAll('.display').forEach((item) => {
        item.classList.toggle('display');
    })
})


document.querySelector('.dessert.close').addEventListener('click', ()=> {
    document.querySelectorAll('.display').forEach((item) => {
        item.classList.toggle('display');
    })
})





    