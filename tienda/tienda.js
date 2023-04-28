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
    `<button class="store-product-back" 
    	onclick=goback()><img src="../assets/back.png"></button>
    <img id="img-producto" class="store-product-img" src="../${obj__.img[0]}">  
    <section id="specific-info" class="store-product-section">
        <h1 id="specific-name" class="store-product-name"> ${obj__.name}</h1>
        <h2 class="store-product-price">${obj__.price}</h2>
        <h3 class="store-product-category">${obj__.cat}</h3>
        <p class="store-product-description">${obj__.desc}</p>
		<div id="color-options">
		<h3>Select a color:<h3>
		<div class="color-option" onclick="setColor('red')" style="background-color: red;"></div>
		<div class="color-option" onclick="setColor('blue')" style="background-color: blue;"></div>
		<div class="color-option" onclick="setColor('green')" style="background-color: green;"></div>
		<div class="color-option" onclick="setColor('yellow')" style="background-color: yellow;"></div>
	  </div>
	<button class="store-product-button" onclick=addItem()> Add to cart </button>

<div id="product-container">
  <!-- Contenido del producto aquí -->
</div>

<div id="product-container">
  <!-- Contenido del producto aquí -->
</div>
    </section>`;

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

function setColor(color) {
	let productContainer = document.getElementById("product-container");
	productContainer.style.backgroundColor = color;
	
	// Desactivar todas las opciones de color
	var colorOptions = document.getElementsByClassName("color-option");
	for (var i = 0; i < colorOptions.length; i++) {
	  colorOptions[i].classList.remove("active");
	}
	
	// Activar la opción de color seleccionada
	event.target.classList.add("active");
}
