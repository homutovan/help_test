const input1 = document.getElementById('n1');
const input2 = document.getElementById('n2');
const btn = document.getElementById('out');
const resultEl = document.querySelector('.result');

input1.addEventListener('input', validate);
input2.addEventListener('input', validate);
btn.addEventListener('click', () => {
    if (resultEl.classList.contains('hide')) {
        calcResult();
    } else {
        eraseResult();
    }
});

function validate() {
    if (parseInt(input1.value) && parseInt(input2.value)){
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function calcResult() {
    const num1 = input1.value;
    const num2 = input2.value;
    const result = num1 * num2;
    btn.innerText = 'Очистить результат';
    resultEl.innerText = `Результат: ${result}`;
    resultEl.classList.remove('hide');
    input1.disabled = true;
    input2.disabled = true;
}

function eraseResult() {
    input1.value = '';
    input2.value = '';
    input1.disabled = false;
    input2.disabled = false;
    btn.innerText = 'Рассчитать';
    resultEl.classList.add('hide');
}

