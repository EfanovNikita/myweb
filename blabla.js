let deal = document.getElementById("deal");
let button = document.querySelector(".buttonSubmit");
let yellow = document.querySelector(".yellow");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let orange = document.querySelector(".orange");
let select = document.querySelector("select");
let template = document.getElementById("dealTemplate").content;
let taskBox = template.querySelector(".taskBox");
let textTemplate = template.querySelector(".textTemplate");
let clearTask = template.querySelector(".clearTask");

function appendTask(key, place) {
    textTemplate.textContent = localStorage.getItem(key);
    taskBox.id = key;
    let clone = document.importNode(template, true);
    let clearTask = clone.querySelector(".clearTask");
    clearTask.addEventListener('click', delTask);
    place.appendChild(clone);
}

for (let key of Object.keys(localStorage)) {
    if (key.includes('red')) {
        appendTask(key, red);
    } else if (key.includes('green')) {
        appendTask(key, green);
    } else if (key.includes('orange')) {
        appendTask(key, orange);
    } else if (key.includes('yellow')) {
        appendTask(key, yellow);
    }
}

function clickHandler(evt) {
    evt.preventDefault();
    let text = deal.value;
    if (!text) {
        return
    };
    let key = localStorage.length;
    let action = select.value;
    switch (action) {
        case 'red':
            key += 'red';
            localStorage.setItem(key, text);
            appendTask(key, red);
            break;
        case 'yellow':
            key += 'yellow';
            localStorage.setItem(key, text);
            appendTask(key, yellow);
            break;
        case 'green':
            key += 'green';
            localStorage.setItem(key, text);
            appendTask(key, green);
            break;
        case 'orange':
            key += 'orange';
            localStorage.setItem(key, text);
            appendTask(key, orange);
            break;
    };
    deal.value = '';
};

/*function delTask(e) {
    let parent = e.target.parentElement;
    localStorage.removeItem(parent.id);
    setTimeout(() => parent.remove(), 500);
};*/

button.addEventListener('click', clickHandler);