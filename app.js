const input1 = document.getElementById('n1');
const input2 = document.getElementById('n2');
const btn = document.getElementById('out');

input1.addEventListener('input', validate);
input2.addEventListener('input', validate);
btn.addEventListener('click', multiplication);

function validate() {
    if (parseInt(input1.value) && parseInt(input2.value)){
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function multiplication() {
    const num1 = input1.value;
    const num2 = input2.value;
    const result = num1 * num2;
    btn.innerText = result;
}
