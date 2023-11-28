const form = document.getElementById('form');
const formInput = document.getElementById('form-input');
const formSubmit = document.getElementById('form-submit');
const contents = document.getElementById('contents');
const content = document.querySelectorAll('content');

let contentList = [];
let value = '';

const makeContent = () => {
  contents.replaceChildren();
  contentList.forEach((el, idx) => {
    const content = document.createElement('li');
    content.classList.add('content');
    content.id = idx;
    const div = document.createElement('div');
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    const spanEl = document.createElement('span');
    spanEl.textContent = el;
    div.append(inputEl, spanEl);
    const delBtn = document.createElement('button');
    delBtn.setAttribute('type', 'button');
    delBtn.textContent = '삭제';
    delBtn.addEventListener('click', (e) => handleDelete(e, idx));
    content.append(div, delBtn);
    contents.append(content);
  });
};

const handleDelete = (e, idx) => {
  e.preventDefault();
  contentList = contentList.filter((_, index) => index !== idx);
  makeContent();
};

const handleInput = (e) => {
  value = e.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();
  contentList.push(value);
  formInput.value = '';
  makeContent();
};

formInput.addEventListener('input', handleInput);
formSubmit.addEventListener('click', handleSubmit);
