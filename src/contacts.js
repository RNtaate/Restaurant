function createContactsDiv() {
  let contactsDiv = document.createElement('div');
  contactsDiv.classList.add('menu-div');

  let heading = document.createElement('h1');
  heading.textContent = "Contact Us";

  contactsDiv.appendChild(heading);

  return contactsDiv;
}

export default createContactsDiv;