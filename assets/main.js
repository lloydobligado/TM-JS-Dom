// ===== EXAMINE THE DOCUMENT OBJECT ===== //

//CONSOLE //
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'HELLO';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// GET ELEMENT BY ID //
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
    // console.log(headerTitle);
    // headerTitle.textContent = 'Hello';
    // headerTitle.innerText = 'Goodbye';
    // headerTitle.innerHTML = '<h6>HELLO BISAKAL</h6>';
    // headerTitle.style.borderBottom = 'solid 3px #000';
// const header = document.getElementById('main-header');
    // header.style.borderBottom = 'solid 3px #000'


// GET ELEMENT BY CLASSNAME // 
// const items = document.getElementsByClassName('list-group-item');
    // console.log(items);
    // console.log(items[1]);
    // items[1].textContent = 'Hello Bai';
    // items[2].style.fontWeight = 'bold';
    // items[3].style.backgroundColor = 'maroon'; //hexcode gives error


// GET ELEMENT BY TAG NAME //
// const li = document.getElementsByTagName('li');
    // console.log(li);
    // console.log(li[1]);
    // li[1].textContent = 'Hello Bai';
    // li[2].style.fontWeight = 'bold';
    // li[3].style.backgroundColor = 'maroon'; //hexcode gives error


// QUERY SELECTOR //
// const header = document.querySelector('#main-header');
    // header.style.borderBottom = 'solid 3px #000';
// const container = document.querySelector('.container');
    // container.style.backgroundColor = 'beige';
// const li = document.querySelector('li');
    // li.style.backgroundColor = 'yellow';


// QUERY SELECTOR  ALL //
// const li = document.querySelectorAll(`li`);
    // console.log(li);
    // li[1].textContent = 'bisakol';
// const odd = document.querySelectorAll(`li:nth-child(odd)`);
// const even = document.querySelectorAll(`li:nth-child(even)`);

// for(let i = 0; i < odd.length; i++) {
    // odd[i].style.backgroundColor = '#ccc';
    // even[i].style.backgroundColor = '#88b04b';
// }


//====== TRAVERSING THE DOM =====// 
// const itemList = document.querySelector('#items');

// PARENT NODE //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';


// PARENT ELEMENT //
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';


// CHILD NODES //
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = '#88b04b';


// FIRST CHILD //
// console.log(itemList.firstChild);


// FIRST ELEMENT CHILD //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello Bisakol';


// LAST CHILD //
// console.log(itemList.lastChild);


// LAST ELEMENT CHILD //
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Goodbye Bisakol';


// NEXT SIBLING //
// console.log(itemList.nextSibling);


// NEXT ELEMENT SIBLING //
// console.log(itemList.nextElementSibling);


// PREVIOUS SIBLING //
// console.log(itemList.previousSibling);


// PREVIOUS ELEMENT SIBLING //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = '#88b04b';


// ===== CREATE ELEMENT ===== //

// CREATE A DIV //
// const newDiv = document.createElement('div');
    // newDiv.className = 'divClass'; //addClass
    // newDiv.id = 'divId'; //addId
    // newDiv.setAttribute('title', 'Hello Div'); //addAttribute

    // const newDivText = document.createTextNode('Hello World'); //createTextNode
    // newDiv.appendChild(newDivText); // addDivText

    // const container = document.querySelector(`header`);
    // const h1 = document.querySelector(`header #header-title`);

    // console.log(newDiv); //addDiv

    // newDiv.style.fontSize = '30px';
    // container.insertBefore(newDiv, h1);


// ===== EVENT LISTENER ===== //
// const button = document.getElementById('button')
// button.ddEventListener('click', buttonClick);
    // function buttonClick(e){
        // console.log('Button Clicked');
        // document.getElementById('header-title').textContent = 'Changed';
        // document.querySelector('#main-header').style.backgroundColor = 'pink';
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.id);
        // console.log(e.target.className);
        // console.log(e.target.classList);
        // const output = document.getElementById('output');
        //     output.innerHTML = '<h3>' + e.target.id + '</h3>;'
        // console.log(e.type);
        // console.log(e.clientX);
        // console.log(e.clientY);
        // console.log(e.offsetX);
        // console.log(e.offsetY);
        // console.log(e.altKey); //hold the key before click the button
        // console.log(e.ctrlKey);
        // console.log(e.shiftKey);
    // }

// const button = document.getElementById('button');
// button.addEventListener('click', runEvent); //singleclick
// button.addEventListener('dblclick', runEvent); //doubleclick
// button.addEventListener('mousedown', runEvent); //mousedown
// button.addEventListener('mouseup', runEvent); //mouseup
    // function runEvent(e) {
    //     console.log('EVENT TYPE: ' + e.type);
    // }

// const box = document.getElementById('box');
    // box.addEventListener('mouseenter', boxClick); //mouseenter 
    // box.addEventListener('mouseleave', boxClick); //mouseleave
    // box.addEventListener('mouseover', boxClick); //mouseover
    // box.addEventListener('mouseout', boxClick); //mouseout
    // box.addEventListener('mousemove', boxClick); //mousemove

        // function boxClick(f){
            // console.log('EVENT TYPE: ' + f.type);
            // const boxDiv = document.querySelector('#box');
                // boxDiv.innerHTML = f.type;
                // boxDiv.innerHTML = '<h3>MouseX: ' + f.offsetX + '<br>MouseY: ' + f.offsetY + '</h3>';
                // boxDiv.style.backgroundColor = "rgb("+f.offsetX+ "," +f.offsetY+ ", 40)";
        // }

// const itemInput = document.querySelector('input[type=text]');
    // itemInput.addEventListener('keydown', runEvent1); //keydown
    // itemInput.addEventListener('keyup', runEvent1); //keyup
    // itemInput.addEventListener('keypress', runEvent1); //keypress
    // itemInput.addEventListener('focus', runEvent1); //focus
    // itemInput.addEventListener('blur', runEvent1); //blur
    // itemInput.addEventListener('cut', runEvent1); //cut
    // itemInput.addEventListener('paste', runEvent1); //paste
    // itemInput.addEventListener('input', runEvent1); //input
    // function runEvent1(g){
        // console.log('EVENT TYPE: ' + g.type);
        // console.log(g.target.value);
        // document.querySelector('header h1 i').innerText = g.target.value;
    // }

// const select = document.querySelector('select');
    // select.addEventListener('change', runEvent2);
    // function runEvent2(h){
        // console.log('EVENT TYPE: ' + h.type);
        // console.log(h.target.value);
    // }

const form = document.querySelector('form');
form.addEventListener('submit', runEvent3);
    function runEvent3(i){
        i.preventDefault();
        console.log('EVENT TYPE: ' + i.type);
    }