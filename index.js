const items = [
  { id: 'Cappuccino', name: 'Cappuccino', desc: 'Experience the rich and velvety indulgence of our signature.', price: 2.0, imgSrc: 'assets/img/foods/cappuccino.jpg' },
  { id: 'Egg and Sandwich', name: 'Egg and Sandwich', desc: 'Indulge in the classic comfort of our Egg and Sandwich.', price: 6.5, imgSrc: 'assets/img/foods/egg-and-sandwich.jpg' },
  { id: 'Pancakes', name: 'Pancakes', desc: 'Served with lorem ipsum', price: 4.3, imgSrc: 'assets/img/foods/pancakes.jpg' },
  { id: 'Burger', name: 'Burger', desc: 'Served with lorem ipsum', price: 3.0, imgSrc: 'assets/img/foods/burger.jpg' },
  { id: 'Doner', name: 'Doner', desc: 'Served with lorem ipsum', price: 3.2, imgSrc: 'assets/img/foods/doner.jpg' },
  { id: 'French fries', name: 'French fries', desc: 'Served with lorem ipsum', price: 2.0, imgSrc: 'assets/img/foods/french-fries.jpg' },
  { id: 'Donuts', name: 'Donuts', desc: 'Served with lorem ipsum', price: 1.6, imgSrc: 'assets/img/foods/donuts.jpg' },
  { id: 'Croissant', name: 'Croissant', desc: 'Served with lorem ipsum', price: 2.8, imgSrc: 'assets/img/foods/croissant.jpg' },
]

const itemContainer = document.getElementById('popular-items')
const cartItems = new Map
cartItems.set('Basmati Kachhi Biriyani', 0)

function sortAscending(items) {
  return items.slice().sort((a, b) => a.price - b.price);
}

function sortDescending(items) {
  return items.slice().sort((a, b) => b.price - a.price);
}

function renderItems(items) {
  items.forEach(function(item) {
    const cardHTML = `
    <div class="item" id="${item.id}">
      <div class="item__img">
        <img class="item__img-img" src="${item.imgSrc}" alt="${item.name}" />
      </div>
      <div class="item__info">
        <div class="item__container">
          <h3 class="item__title">${item.name}</h3>
          <p class="item__desc">${item.desc}</p>
          <p class="item__price">$ ${item.price.toLocaleString()}</p>
        </div>
        <button class="item__button">+ ADD</button>
      </div>
    </div>
  `
    cartItems.set(item.id, 0)
    itemContainer.innerHTML += cardHTML
  })
}

renderItems(items)
const addItem = document.querySelectorAll('.item__button')

function setCartItem(id) {
  const count = cartItems.get(id)
  if (count < 99) {
    cartItems.set(id, count + 1)
  }
  renderCart()
}

addItem.forEach(function(button) {
  button.addEventListener('click', (e) => {
    const itemId = e.target.parentNode.parentNode.id
    setCartItem(itemId)
  })
})

document.querySelector('.food__info-button').addEventListener('click', () => {
  setCartItem('Basmati Kachhi Biriyani')
  renderCart()
})

function renderCart() {
  const counter = document.getElementById('cart-counter')
  let summ = 0
  cartItems.forEach(function(item) {
    summ += item
  })
  counter.innerText = summ
}

function sortItems() {
  const sortSelect = document.getElementById("sortSelect");
  const sortOrder = sortSelect.value;
  itemContainer.innerHTML = ''

  if (sortOrder === "asc") {
    renderItems(sortAscending(items))
  } else if (sortOrder === "desc") {
    renderItems(sortDescending(items))
  } else {
    renderItems(items)
  }
}



