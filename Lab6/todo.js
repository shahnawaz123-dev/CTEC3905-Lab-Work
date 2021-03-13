"use strict";

(() => {
function addItem(text, done) {
  const item = document.createElement('li');
  const button = document.createElement('button');
button.textContent = "×";
button.addEventListener('click', ev => {
  item.remove();
  saveToStorage();
});
item.appendChild(button);
  const label = document.createElement('label');
  const input = document.createElement('input');
  label.textContent = text;
  input.type = "checkbox";
  input.checked = done;
  input.id = `todo${todo.querySelectorAll('li').length + 1}`;
  input.addEventListener('input', ev => {
  saveToStorage();
});
  label.htmlFor = input.id;
  item.appendChild(label);
  item.appendChild(input);
  todo.appendChild(item);
}


add.addEventListener('click', ev => {
  if(text.value) {
    addItem(text.value);
    text.value=null;
    text.focus();
    saveToStorage();
  }
});

text.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

function clearList() {
  while(todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
}

clear.addEventListener('click', ev => {
  if(confirm("Are you sure you want to delete the entire list?"))
  clearList();
  saveToStorage();
});

[
  {text: "Study learning materials", done: true},
  {text: "Complete lab exercises", done: false},
  {text: "Attend lab sessions", done: false},
  {text: "Conduct self-directed research", done: false},
  {text: "Ask questions", done: false}
]

function saveToStorage() {
	const elements = Array.from(todo.querySelectorAll('li'));
	const data = elements.map(el => {
		 return {
       text: el.querySelector('label').textContent,
			 done: el.querySelector('input').checked
		 }
	});
	localStorage.setItem(todo.id, JSON.stringify(data));
}

function loadFromStorage() {
	const data = JSON.parse(localStorage.getItem(todo.id));
  if(data) {
    clearList();
    for (const item of data) {
  		addItem(item.text, item.done);
  	}
  }
}

loadFromStorage();
})()
