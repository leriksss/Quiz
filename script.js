function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

let button = document.querySelector('.button');
let start = document.querySelector('.start');
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let second = document.querySelector('.second');
let buttons = document.querySelector('.buttons');
let level = document.querySelector('.level');
let third = document.querySelector('.third');
let answer = document.querySelectorAll('.answer');
let question = document.querySelector('.question');
let questionEasy = document.querySelector('.quetion-easy');
let questionMiddle = document.querySelector('.quetion-middle');
let questionHard = document.querySelector('.quetion-hard');
let text = document.querySelector('.text');
let temp;
let currentArr;
let total;


let easy = {
    0: ["Where are you from?", "Ukraine","IDK","Romania"],
    1: ["Where do you sleep at night?", "Bed", "Table", "Chair"],
    2: ["How many legs does a cat have?", "Four","Three","Five"],
    3: ["What do you use to write?", "Pen", "A book", "A cup"],
    4: ["What colors are bananas??", "Yellow", "Blue", "Purple"]
}

let middle = {
    0: ["What day comes after Monday?", "Tuesday","Wednesday","Saturday"],
    1: ["Which country is famous for pizza?", "Italy","Japan","Ukraine"],
    2: ["What is the synonym of HAPPY?", "Glad","Angry","Sad"],
    3: ["What is the capital Of France?", "Paris","Tokyo","Rome"],
    4: ["What do you need to open the door?", "Key","Pen","Phone"]
}
let hard = {
    0: ["What does 'How are you?' mean?", "How do you feel?","What is your name?","Where are you from?"],
    1: ["Which sentence is correct?", "She goes to school","She going to school","She go to school"],
    2: ["What does 'break the ice' mean?", "To start a conversation","To destroy something frozen","To make someone angry"],
    3: ["What is a capital of Australia?", "Canberra","Sydney","Melbourne"],
    4: ["What does 'piece of cake' mean?", "Something very easy","Something delicious","A part of dessert"]
}


button.addEventListener('click', function(){
    start.style.display = 'none';
    second.style.display = 'block';
})



btn1.addEventListener('click', function(){
    currentArr = easy;
    second.style.display = 'none';
    third.style.display = 'block';
    question.innerHTML = currentArr['0'][0];
    temp = currentArr ['0'].slice(1, 4);
    temp = shuffle(temp);
    answer[0].innerHTML = temp[0];
    answer[1].innerHTML = temp[1];
    answer[2].innerHTML = temp[2];   
    let total = 0

})

btn2.addEventListener('click', function(){
    currentArr = middle;
    second.style.display = 'none';
    third.style.display = 'block';
    question.innerHTML = currentArr['0'][0];
    temp = currentArr ['0'].slice(1, 4);
    temp = shuffle(temp);
    answer[0].innerHTML = temp[0];
    answer[1].innerHTML = temp[1];
    answer[2].innerHTML = temp[2];   
    let total = 0

})

btn3.addEventListener('click', function(){
    currentArr = hard;
    second.style.display = 'none';
    third.style.display = 'block';
    question.innerHTML = currentArr['0'][0];
    temp = currentArr ['0'].slice(1, 4);
    temp = shuffle(temp);
    answer[0].innerHTML = temp[0];
    answer[1].innerHTML = temp[1];
    answer[2].innerHTML = temp[2]; 
    let total = 0  

})

for (let i = 0; i < 3; i += 1)  {
    answer[i].addEventListener('click', function() {
            if (answer[i].innerHTML == currentArr['0'][1]) {
                total += 1
                console.log("Правильно");
                answer[i].style.background = '#22ff00';
                anime({
                    targets: answer[i],
                    background: '#FFFFFF',
                    duration: 500,
                    delay: 100,
                    easing: 'linear'
                })
            }
            else {
                console.log("Неправильно");
                answer[i].style.background = '#FF0000';
                anime({
                    targets: answer[i],
                    background: '#FFFFFF',
                    duration: 500,
                    delay: 100,
                    easing: 'linear'
                })
            }
            

            question.innerHTML = currentArr['1'][0];
            temp = currentArr['1'].slice(1, 4);
            console.log(temp)
            temp = shuffle(temp);
            answer[0].innerHTML = temp[0];
            answer[1].innerHTML = temp[1];
            answer[2].innerHTML = temp[2];             
    
    })
}


