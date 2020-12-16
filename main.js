const xhr1 = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();

xhr1.addEventListener('loadend', () => {
    const data1 = JSON.parse(xhr1.responseText);
    const doggy1 = document.querySelector('.img1');
    doggy1.src = data1.message;
    dogs1.push(data1.message)
})

xhr2.addEventListener('loadend', () => {
    const data2 = JSON.parse(xhr2.responseText);
    const doggy2 = document.querySelector('.img2');
    doggy2.src = data2.message;
    dogs2.push(data2.message)
})

const button1 = document.querySelector('.button1')
button1.addEventListener('click', () => {
    xhr1.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr1.setRequestHeader('Accept', 'application/json')
    xhr1.send();
})

const button2 = document.querySelector('.button2')
button2.addEventListener('click', () => {
    xhr2.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr2.setRequestHeader('Accept', 'application/json')
    xhr2.send();
})

const dogs1 = [];
const dogs2 = [];

const prevButton = document.querySelector('.prev') 
prevButton.addEventListener('click', () => {
    const doggy1 = document.querySelector('.img1');
    doggy1.src = dogs1[0]
})










// Chuck Norris API
// const xhr = new XMLHttpRequest();
// xhr.addEventListener('loadend', () => {
//     const data = JSON.parse(xhr.responseText);
//     console.log(data);
//     const chuckNorris = document.createElement('p');
//     chuckNorris.innerText = data.value
//     document.querySelector('body').append(chuckNorris) 
// })

// const button = document.querySelector('.button')
// button.addEventListener('click', () => {
//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
//     xhr.setRequestHeader('Accept', 'application/json')
//     xhr.send();
// })