const form = document.forms.superForm;

form.checkbox.oninput = () => {
    form.submit();
}