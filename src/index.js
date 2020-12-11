import loadInitialPage from './script1';

let divContent = document.getElementById('content');
let title = 'NORP RESTAURANT';
let myCaption = 'Your stop for an exquisite and relaxing meal.'
divContent.appendChild(loadInitialPage(title, myCaption));