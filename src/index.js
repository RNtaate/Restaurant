import loadInitialPage from './script1';
import createMenuDiv from './menu';
import createContactsDiv from './contacts';

let body = document.querySelector('body');

let divContent = document.getElementById('content');
let title = 'NORP RESTAURANT';
let myCaption = 'Your stop for an exquisite and relaxing meal.'

// create nav bar

let nav = document.createElement('nav');

// tabButton function for populating nav bar with tab buttons.

let tabButton = (content, firstClassName = '') => {
  let myButton = document.createElement('button');
  myButton.textContent = content;
  myButton.classList.add(firstClassName);
  return myButton;
}

// Create and add the tab buttons to nav bar using 'tabButton' function

nav.appendChild(tabButton('Home', 'tab-button'));
nav.appendChild(tabButton('Menu', 'tab-button'));
nav.appendChild(tabButton('Contacts', 'tab-button'));

body.appendChild(nav);

//call all the created tabs.

let myTabs = document.getElementsByClassName('tab-button');

// create displayTabContent function for displaying content upon clicking a specific tab

function displayTabContent(event) {
  let tabs = document.getElementsByClassName('tab-button');
  for(let j = 0; j < tabs.length; j += 1) {
    tabs[j].classList.remove('active');
  }
  event.target.classList.add('active');

  divContent.textContent = "";

  switch(event.target.textContent) {
    case 'Home':
      divContent.appendChild(loadInitialPage(title, myCaption));
      break;
    case 'Menu':
      divContent.appendChild(createMenuDiv());
      break;
    case 'Contacts':
      divContent.appendChild(createContactsDiv());     
      break;
  } 
}

// Add functionality to the tabs using function "displayTabs"

for(let i = 0; i < myTabs.length; i += 1) {
  myTabs[i].addEventListener('click', displayTabContent);
}

myTabs[0].click();