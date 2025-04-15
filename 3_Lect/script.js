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


