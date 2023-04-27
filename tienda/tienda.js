// filtros
let itemsFilter, itemSelect, filterInput;


// filtro desplegable
filterInput = document.getElementById("store-filter");
filterInput.addEventListener('click', catFilter, {once:false});
let fValue = filterInput.value;

// divisores para mostrar detalle o tienda
let specifications = document.getElementById("specific-product");
let closeWindow = document.getElementById("product-section")

function setDetailsInfo(obj__) {
    specifications.style.display = "flex"
    specifications.innerHTML= 
    `<button onclick=goback()> Go back </button>
    <img id="img-producto" class="store-product-img" src="../${obj__.img[0]}">  
    <section id="specific-info" class="store-product-section">
        <h1 id="specific-name" class="store-product-name"> ${obj__.name}</h1>
        <h2 class="store-product-price">${obj__.price}</h2>
        <p class="store-product-category">${obj__.cat}</p>
        <p class="store-product-description">${obj__.desc}</p>
    </section>";`

    closeWindow.style.display = "none";
}

function goback() {
	specifications.style.display = "none";
	closeWindow.style.display = "block";

	while (specifications.firstChild){
		specifications.removeChild(specifications.firstChild);
	}
}

function catFilter() {
	fValue = filterInput.value;
	updateItems();
}

function updateItems() {
	const itemList = document.getElementById("store-list-section");
	console.log(itemsFilter);

    //Borra todos los ojetos para que se pueda actualizar
	while (itemList.firstChild){
		itemList.removeChild(itemList.firstChild);
	}

    //Actualizar los objetos basados en el filtro
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

            console.log()

        

			let button = document.createElement("button");
			button.value = j;
			button.setAttribute("onclick",
				"setDetailsInfo(itemsFilter[this.value])");
			button.textContent = "See More";

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
	itemsFilter = data;
	updateItems();
});
