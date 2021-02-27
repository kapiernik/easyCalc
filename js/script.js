// ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ

const buttons = document.querySelectorAll('.main__button'),
      buttonPlus = document.querySelector('.main__button.plus'),
      buttonMinus = document.querySelector('.main__button.minus'),
      buttonMultiplied = document.querySelector('.main__button.multiplied'),
      buttonDivided = document.querySelector('.main__button.divided'),
      buttonResult = document.querySelector('.main__button.result'),
      form = document.querySelector('.main__form'),
      input = document.querySelector('.main__input input'),
      inputContainer = document.querySelector('.main__input'),
      resultContainer = document.createElement('div');

let result = ' ';

// ОБЬЯВЛЕНИЕ ФУНКЦИЙ

let resultAction = function(){
    input.hidden = true;  // СКРЫВАЕМ ИНПУТ
    if(result == ' '){ // ЕСЛИ ВВЕДЕНО ТОЛЬКО ОДНО ЧИСЛО
        result = input.value;
    } else{
    result = `${result} ${input.value}`; // СОЗДАЕМ СТРОКУ ДЛЯ МАТН.ДЖС
    }
    console.log(result);
    resultContainer.classList.add('main__result');
    inputContainer.append(resultContainer); // ВНЕДРЯЕМ КОНТЕЙНЕР ДЛЯ РЕЗУЛЬТАТА
    /* jshint ignore:start */
    try{
        resultContainer.textContent = `Результат: ${math.evaluate(result)}`; //ВЫВОДИМ РЕЗУЛЬТАТ
    } catch{ //ЕСЛИ ЕСТЬ ОШИБКИ
        resultContainer.textContent = `Произошла ошибка. Повторите попытку`;
    }
    /* jshint ignore:end */
};

let action = function(){ // ЛЮБОЕ ДЕЙСТВИЕ: ОТНИМАНИЕ, ПРИБАВЛЕНИЕ, УМНОЖЕНИЕ ИЛИ ДЕЛЕНИЕ
    result += `${input.value} `;
    input.value = '';
};

// ДЕЙСТВИЯ ДЛЯ КЛАВИАТУРЫ

document.addEventListener('keydown', e => {
    //ОЧИСТКА РЕЗУЛЬТАТА
    if(e.code === 'Escape' || (e.code === 'Enter' && inputContainer.contains(resultContainer))){
        resultContainer.remove();
        input.value = '';
        input.hidden = false; // ВОЗВРАЩАЕМ ИНПУТ
        result = ''; 
    } else if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){ 
        action();
        //ЕСЛИ НА КЛАВЕ БЫЛА НАЖАТА НУЖНАЯ КНОПКА
    } else if(e.key === '=' || (e.code === 'Enter' && !inputContainer.contains(resultContainer))){
        resultAction();
        //ЕСЛИ НА КЛАВЕ БЫЛ НАЖАТ ЗНАК РАВНО ИЛИ ЕНТЕР
    }
});


//КНОПКА ЗНАК ПЛЮСА

buttonPlus.addEventListener('click', e => {
    e.preventDefault();
    action();
    input.value = '+';
});

//КНОПКА ЗНАКА МИНУСА

buttonMinus.addEventListener('click', e => {
    e.preventDefault();
    action();
    input.value = '-';
});

//КНОПКА ЗНАКА РАВНО

buttonResult.addEventListener('click', e => {
    e.preventDefault();
    resultAction();
});

//КНОПКА ЗНАКА УМНОЖИТЬ

buttonMultiplied.addEventListener('click', e => {
    e.preventDefault();
    action();
    input.value = '*';
});

//КНОПКА ЗНАКА ДЕЛЕНИЯ

buttonDivided.addEventListener('click', e => {
    e.preventDefault();
    action();
    input.value = '/';
});

