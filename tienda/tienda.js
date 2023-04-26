let items, itemsFilter, itemSelect, filterInput;

let obj = {
        "name": "PlayStation 5",
        "desc": "Welcome to the gaming experience of the future! With its powerful AMD Zen 2 processor and AMD Radeon RDNA 2 graphics card, the PS5 offers a faster and smoother gaming experience. And not only that, but the console's futuristic design immerses you even more in the game. The PS5 is the culmination of years of innovation and evolution in the industry. Join me on the adventure and see what the PlayStation 5 can do!",
        "price": 499.99,
        "date": "12/11/2020",
        "cat": "Consoles",
        "col": ["White", "Black"],
        "img": ["assets/ps5.webp"]
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
    let specifications = document.getElementById("specific-product");
    specifications.innerHTML= `  <img id= "img-producto" src="../${obj__.img[0]}" alt="">        
    <div id="specific-info">
        <h1 id="specific-name"> ${obj__.name}</h1>
        <h2>${obj__.price}</h2>
        <p>${obj__.cat}</p>
        <p>${obj__.desc}</p>
    </div>";`

    let closeWindow = document.getElementById("product-section").style.display = "none";

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
