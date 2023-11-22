const submitBtn = document.querySelector('#submit-btn');

const starButtons = document.querySelectorAll('.rate-btn');

starButtons.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
  console.log(e.target.value);
})
})

submitBtn.addEventListener('click', ()=>{
  console.log('clicked');
})