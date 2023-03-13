let a = ''; // первое число
let b = ''; // второе число
let sign = ''; //знак операции
let finish = false; 


const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'x', '/'];

// экран
const out = document.querySelector('.calc__screen p');

function allClear () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.btn-ac').onclick = allClear;

document.querySelector('.buttons').onclick = (event) => {

    // Нажата не кнопка
    if (!event.target.classList.contains('btn'))
        return;

    // Нажата кнопка ac (allClear)
    if (event.target.classList.contains('btn-ac'))
        return;

    out.textContent = '';

    // получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата кнопка 0-9 или "."
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
        a += key;
        // console.log(a);
        out.textContent = a;
        }
        else if (a!== '' && b!== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b +=key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

      // если нажата кнопка "+", "-", "x", "/"
      if (action.includes(key)) {
        sign = key;
        // console.log(sign);
        out.textContent = sign;
        return;
    }

    // нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if(b === '0') {
                    out.textContent = "Ошибка";
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        // console.log(a, b, sign);
    }
}