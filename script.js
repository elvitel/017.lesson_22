const divParent = document.getElementById('parent');
const input = document.getElementById('input');

const div = document.createElement('div');
div.textContent = 'Привид';
div.setAttribute('style', 'display: inline-block');

input.addEventListener('focus', (event) => {
    divParent.appendChild(div);
});

input.addEventListener('blur', (event) => {
    divParent.removeChild(div);
});



