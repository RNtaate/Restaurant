import loadInitialPage from './script1';

let body = document.querySelector('body');

let divContent = document.getElementById('content');
let title = 'NORP RESTAURANT';
let myCaption = 'Your stop for an exquisite and relaxing meal.'
divContent.appendChild(loadInitialPage(title, myCaption));

let nav = document.createElement('nav');

let tabButton = (content, firstClassName = '') => {
  let myButton = document.createElement('button');
  myButton.textContent = content;
  myButton.classList.add(firstClassName);
  return myButton;
}

nav.appendChild(tabButton('Home', 'tab-button'));
nav.appendChild(tabButton('Menu', 'tab-button'));
nav.appendChild(tabButton('Contacts', 'tab-button'));

body.appendChild(nav);