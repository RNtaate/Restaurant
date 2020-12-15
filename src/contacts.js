const addContactsContent = () => {
  const contactsContent = document.createElement('div');

  contactsContent.classList.add('contacts-info-div');
  contactsContent.innerHTML = '<span><i class="fas fa-envelope"></i>royhyde14@gmail.com</span><span><i class="fab fa-twitter"></i>@RNtaate</span><span><i class="fab fa-github"></i>RNtaate</span><span><i class="fab fa-linkedin"></i>roy-ntaate</span>';

  return contactsContent;
};

const createContactsDiv = () => {
  const contactsDiv = document.createElement('div');
  contactsDiv.classList.add('contacts-div');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  contactsDiv.appendChild(heading);
  contactsDiv.appendChild(addContactsContent());

  return contactsDiv;
};

export default createContactsDiv;