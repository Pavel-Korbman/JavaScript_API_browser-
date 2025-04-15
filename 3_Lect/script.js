// console.log(document.forms.superForm); // form
// console.log(document.forms[0]); // form

// const form1 = document.forms.superForm;
// console.log(form1.elements.first); // input
// console.log(form1.elements.second); // input

// form1.elements.second.value = 777;

const selector = document.forms.superForm.selectorForm;
// одинаковые действия разными способами:
// selector.options[2].selected = true; // выбран только второй элемент
// selector.selectedIndex = 2; // выбран только третий элемент
// selector.value = 'value3'; // выбран только второй элемент

const selected = Array.from(selector.options) // записываю в массив значения выбранных элементов
    .filter(option => option.selected)
    .map(option => option.value);   //  ['value1', 'value2']


// Фокусировка
const input = document.forms.mailForm.input;
const error = document.querySelector('#error');

input.onblur = function () {
    if (!input.value.includes('@')) {
        input.classList.add ('invalid');
        error.innerHTML = 'Введите правильный eMail';
    }
};

input.onfocus = function (){
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.innerHTML ='';
    }
};

// События изменения форм

const form = document.forms.myForm;

form.email.onchange = ()=>{
    console.log('change - email: ', form.email.value);
};

form.email.oninput = ()=>{
    console.log('input - email: ', form.email.value);
};


form.selectForm.onchange = ()=>{
    console.log('change - selectForm: ', form.selectForm.value);
};

form.selectForm.oninput = ()=>{
    console.log('input - selectForm: ', form.selectForm.value);
};

form.checkbox.onchange = ()=>{
    console.log('change - checkbox: ', form.checkbox.checked);
};

form.checkbox.oninput = ()=>{
    console.log('input - checkbox: ', form.checkbox.checked);
};

form.email.oncut = form.email.oncopy = form.email.onpaste = (event)=>{
    console.log(event.type + ' - '+ event.clipboardData.getData('text/plain'));
};