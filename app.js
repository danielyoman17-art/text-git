const randomNumber =  document.querySelector('#randomNum')
const min =  document.querySelector('#min')
const max =  document.querySelector('#max')



randomNumber.addEventListener('click',()=>{
    document.querySelector('#result').textContent = Math.floor(getRandomNumber(Number(min.value),Number(max.value)+1))
})

function getRandomNumber(min,max) {
    return Math.random() * (max - min) + min
}