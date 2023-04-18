const topProdCards = Array.from(document.querySelectorAll('.prod-card-top'));

let topProdCardsIndex = 2;
let topProdCardsValue = topProdCards[topProdCardsIndex];





function expandProduct() {
	const cards = topProdCards;
	let popUp = document.querySelector('.prod-expanded');

	cards.forEach((card) => {
		card.addEventListener('click', () => {
			popUp.classList.add('active-products');
			
			
		})
	})

	const closeActive = document.getElementById('close');
	closeActive.addEventListener('click', () => {
		popUp.classList.remove('active-products');
	})
	
	
}


function topCardLink() {
	let activeDisplay = activeItems;
	let activeCard = null;
	if (activeCard) {
		activeCard.classList.remove('active-items');
	} 
	activeItems[1].classList.add('active-items');
	activeDisplay = card;
}

// if "" index clicked open "" index

function prodNavBarLinks() {
	const prodNavBar = Array.from(document.querySelectorAll('.prod-nav-bar'));
	let prodNavBarIndex = 1;
	let prodNavBarvalue = prodNavBar[prodNavBarIndex];
	const links = prodNavBar;
	let activeLink = null;
	let display = activeItems;
	links.forEach((link) => {
		link.addEventListener('click', () => {
			

		})
	})
}

function addActiveClassToItemDisplays() {
	const activeItems = Array.from(document.querySelectorAll('.item-displays'));
	let activeItemsIndex = 1;
	let activeItemsValue = activeItems[activeItemsIndex];
	// i variable
	activeItems[1].classList.remove('active-items');
	activeItems[1].classList.add('inactive-items');
	activeItems[2].classList.add('active-items');
	activeItems[2].classList.remove('inactive-items');

}

addActiveClassToItemDisplays()
expandProduct()
