function createMenuDiv() {
  let menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  let heading = document.createElement('h1');
  heading.textContent = "Your Delightful Menu";

  menuDiv.appendChild(heading);

  return menuDiv;
}

export default createMenuDiv;