// ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ

const buttons = document.querySelectorAll('.main__button'),
      buttonPlus = document.querySelector('.main__button.plus'),
      buttonMinus = document.querySelector('.main__button.minus'),
      buttonMultiplied = document.querySelector('.main__button.multiplied'),
      buttonDivided = document.querySelector('.main__button.divided'),
      buttonResult = document.querySelector('.main__button.result'),
      form = document.querySelector('.main__form'),
      input = document.querySelector('.main__input input'),
      resultContainer = document.createElement('div');

let result = ' ';


//ПРОБУЕМ В СОБЫТИЯ

//ЗНАК РАВНО

buttonResult.addEventListener('click', e => {
    e.preventDefault();
    input.hidden = true;
    result = `${result} ${input.value}`;

    resultContainer.classList.add('main__result');
    document.querySelector('.main__input').append(resultContainer);
    /* jshint ignore:start */
    if(!!isNaN(result)){
        resultContainer.textContent = `Результат: ${Math.trunc(math.evaluate(result))}`;
    } else{
        resultContainer.textContent = `Произошла ошибка. Повторите попытку`;
    }
    /* jshint ignore:end */
});

//ЗНАК ПЛЮСА

buttonPlus.addEventListener('click', e => {
    e.preventDefault();
    result += `${input.value} + `;
    input.value = '';
});