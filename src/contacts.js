function addContactsContent() {
  let contactsContent = document.createElement('div');
  
  contactsContent.classList.add('contacts-info-div');
  contactsContent.innerHTML = '<span><i class="fas fa-envelope"></i>norprestaurants@norp.co.uk</span><span><i class="fab fa-twitter"></i>@NorpRestaurants</span><span><i class="fab fa-facebook"></i>Norp Restaurants</span><span><i class="fab fa-instagram-square"></i>@norprestaurants</span>'

  return contactsContent;
}

function createContactsDiv() {
  let contactsDiv = document.createElement('div');
  contactsDiv.classList.add('contacts-div');

  let heading = document.createElement('h1');
  heading.textContent = "Contact Us";

  contactsDiv.appendChild(heading);
  contactsDiv.appendChild(addContactsContent());

  return contactsDiv;
}

export default createContactsDiv;