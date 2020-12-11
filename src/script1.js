function loadInitialPage(title, myCaption = "") {
  let infoDiv = document.createElement("div");
  infoDiv.classList.add('info-div');

  let heading = document.createElement('h1');
  heading.textContent = title; 

  let paragraph = document.createElement('p');
  paragraph.textContent = myCaption;

  infoDiv.appendChild(heading);
  infoDiv.appendChild(paragraph);

  return infoDiv;
}

export default loadInitialPage;