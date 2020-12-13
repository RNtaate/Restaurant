function addMenuContent() {
  let menuContent = document.createElement('div');
  
  menuContent.classList.add('menu-info-div');
  menuContent.innerHTML = '<h1>NORP MENU</h1><h2>Food Buffets</h2><ul><li>Breakfast Buffet</li><li>Lunch Buffet</li><li>Dinner Buffet</li></ul><h2>Fast Foods</h2><ul><li>Chicken Pot Pie</li><li>Fries & Chicken</li><li>Burgers(with an option of adding cheese)</li></ul><h2>Dessert</h2><ul><li>White Chocolate Raspberry Cheesecake</li><li>Creme Brulee</li><li>Chocolate Lava Cake</li></ul>'

  return menuContent;
}

function createMenuDiv() {
  let menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  menuDiv.appendChild(addMenuContent());
  return menuDiv;
}

export default createMenuDiv;