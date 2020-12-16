const xhr = new XMLHttpRequest();
xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    const doggy = document.querySelector('img');
    doggy.src = data.message;
})

const button = document.querySelector('.button')
button.addEventListener('click', () => {
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send();
})


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