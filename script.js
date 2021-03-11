const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal-big');
const del = document.querySelector('.btn-delete');

//for each
btns.forEach( btn => {
   btn.addEventListener('click', ()=> {
       let number = btn.getAttribute('data-num'); 
       screen.value += number
   })
});

//Arrow function used here - equal.addEventListener('click', () => {
equal.addEventListener('click',  function() {
    if(screen.value === ''){
        alert('Please Enter something')
     }
     else{      
      let value = eval(screen.value);
      screen.value = value;
     }
     
});
// clear screen
 clear.addEventListener('click', () => {   
        screen.value = '';   
})

// Delete function using slice method we can edit last digit of entered field
 del.addEventListener('click', () => {
    screen.value = screen.value.slice (0, -1)
 })