const topProdCards = Array.from(document.querySelectorAll('.prod-card-top'));

let topProdCardsIndex = 2;
let topProdCardsValue = topProdCards[topProdCardsIndex];
const activeItems = Array.from(document.querySelectorAll('.item-displays'));
const prodNavBar = Array.from(document.querySelectorAll('.prod-nav-bar'));
let activeLink = null;




function expandProduct() {
	const cards = topProdCards;
	const openProdFromCard = activeItems;
	let popUp = document.querySelector('.prod-expanded');
	const mainProd = document.getElementById('main-prod');
	
	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener('click', function() {
			for (let j = 0; j < openProdFromCard.length; j++) {
				popUp.classList.add('active-products'); 
				openProdFromCard[j].style.display = 'none';
			}

			openProdFromCard[i].style.display = 'grid';
			popUp.scrollIntoView({behavior: 'smooth'});
			document.body.style.overflow = 'hidden';
			
		})
	}


	closeButtonOnProdDisplay(popUp)
	prodNavBarLinks()
}


function closeButtonOnProdDisplay(closeThis) {
		const closeActive = document.getElementById('close');
		closeActive.addEventListener('click', () => {
		closeThis.classList.remove('active-products');
		document.body.style.overflow = 'scroll'
	})
}




function prodNavBarLinks() {
    const links = prodNavBar;

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            for (let j = 0; j < activeItems.length; j++) {
                activeItems[j].style.display = 'none';

            }
            activeItems[i].style.display = 'grid';
            prodNavBarActivateLink(links[i]);
        })
    }
}

function prodNavBarActivateLink(activateThis) {
    if (activeLink) {
        activeLink.classList.remove('active-prod-link');
    } 
    activateThis.classList.add('active-prod-link');
    activeLink = activateThis;
}




expandProduct()
