console.log('hello')

const randomNumber =  document.querySelector('#randomNum')

randomNumber.addEventListener('click',()=>{
    document.querySelector('#result').textContent = Math.random()
})