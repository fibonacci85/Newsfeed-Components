// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



function menuMaker(array) {

const menu = document.createElement('div')
menu.classList.add('menu')

const ulContainer = document.createElement('ul')

const menu1 = document.createElement('li')
menu1.textContent = array[0]

const menu2 = document.createElement('li')
menu2.textContent = array[1]

const menu3 = document.createElement('li')
menu3.textContent = array[2]

const menu4 = document.createElement('li')
menu4.textContent = array[3]

const menu5 = document.createElement('li')
menu5.textContent = array[4]

const menu6 = document.createElement('li')
menu6.textContent = array[5]

menu.appendChild(ulContainer)
ulContainer.appendChild(menu1)
ulContainer.appendChild(menu2)
ulContainer.appendChild(menu3)
ulContainer.appendChild(menu4)
ulContainer.appendChild(menu5)
ulContainer.appendChild(menu6)

return menu

}

console.log(menuMaker(menuItems))

const mainMenu = document.querySelector('.menu-button')


// menuItems.forEach(dataThing => {
//   mainMenu.append(menuMaker(dataThing))  
//   })


/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
