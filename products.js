const topProdCards = Array.from(document.querySelectorAll('.prod-card-top'));

let topProdCardsIndex = 2;
let topProdCardsValue = topProdCards[topProdCardsIndex];
const activeItems = Array.from(document.querySelectorAll('.item-displays'));
const prodNavBar = Array.from(document.querySelectorAll('.prod-nav-bar'));


console.log(topProdCards.length)

function expandProduct() {
	const cards = topProdCards;
	let popUp = document.querySelector('.prod-expanded');

	cards.forEach((card) => {
		card.addEventListener('click', () => {
			popUp.classList.add('active-products');
			addActiveClassToItemDisplays(activeItems[0], 'active-items');
			
		})
	})

	const closeActive = document.getElementById('close');
	closeActive.addEventListener('click', () => {
		popUp.classList.remove('active-products');
	})
	
	prodNavBarLinks()
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



function prodNavBarLinks() {
    const links = prodNavBar;

    links.forEach((link) => {
        link.addEventListener('click', () => {
            switch (link) {
		 	case prodNavBar[0]:
		 	addActiveClassToItemDisplays(activeItems[0], 'active-items');
		 	break;	
		 case prodNavBar[1]:
		 	activeItems[0].classList.add('inactive-items');
		 	addActiveClassToItemDisplays(activeItems[1], 'active-items');
		 	break;
		 case prodNavBar[2]:
		 	activeItems[0, 1].classList.add('inactive-items');
		 	addActiveClassToItemDisplays(activeItems[2], 'active-items');

		}
           
        });
    });
}


function addActiveClassToItemDisplays(element, className) {
		element.classList.remove('inactive-items');
		element.classList.add(className);
	}



expandProduct()
