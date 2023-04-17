const topProdCards = Array.from(document.querySelectorAll('.prod-card-top'))

let topProdCardsIndex = 2;
let topProdCardsValue = topProdCards[topProdCardsIndex]


function expandProduct() {
	const cards = topProdCards;
	let popUp = document.querySelector('.prod-expanded');

	cards.forEach((card) => {
		card.addEventListener('click', () => {
			popUp.classList.add('active-products');
			console.log(popUp)
		})
	})

}

expandProduct()