console.log('hello')

const randomNumber =  document.querySelector('#randomNum')

randomNumber.addEventListener('click',()=>{
    document.querySelector('#result').textContent = Math.floor(getRandomNumber(1,100))
})

function getRandomNumber(min,max) {
    return Math.random() * (max - min) + min
}