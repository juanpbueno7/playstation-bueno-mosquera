let items, itemsFilter, itemSelect, filterInput;

let obj = {
	name: undefined,
	cat: undefined,
	col: undefined,
	date: undefined,
	desc: undefined,
	img: undefined,
	price: undefined
}

let nameHTML = document.getElementById("tienda-seccion-nombre");
nameHTML.textContent = obj.name;

filterInput = document.getElementById("store-filter");
filterInput.addEventListener('click', catFilter, {once:false});
let fValue = filterInput.value;

function returnDetails() {
    console.log(obj)
    setDetailsInfo(obj)
}


function setDetailsInfo(obj__) {
    let specificName = document.getElementById("specific-name");
    specificName.innerHTML= obj__.name;
}

function catFilter() {
	fValue = filterInput.value;
	updateItems();
}

function updateItems() {
	const itemList = document.getElementById("store-list-section");
	console.log(items);
	console.log(itemsFilter);

	while (itemList.firstChild){
		itemList.removeChild(itemList.firstChild);
	}

	for (let j = 0; j < itemsFilter.length; j++){
		if(itemsFilter[j].cat === fValue || fValue === "") {
			let article = document.createElement("article");
			article.setAttribute("class", "store-list-article");
			article.setAttribute("id", `article-${j}`);

			let img = document.createElement("img");
			img.setAttribute("class","store-article-img");
			img.setAttribute("src",`../${itemsFilter[j].img[0]}`);

			article.append(img);

			let section = document.createElement("section");

			let h3 = document.createElement("h3");
			h3.textContent = `${itemsFilter[j].name}`;

			section.append(h3);

			let p = document.createElement("p");
			p.textContent = `${itemsFilter[j].desc}`;

			section.append(p);

			let button = document.createElement("button");
			button.setAttribute("onclick","returnDetails()");
			button.textContent = "Learn More";

			section.append(button);

			article.append(section);

			itemList.append(article);
		}
	}
}

// obtiene los productos desde un json y los guarda en items
fetch("../productos.json")
.then(response => {
	return response.json();
})
.then(data => {
	items = data;
	itemsFilter = data;
	updateItems();
});
