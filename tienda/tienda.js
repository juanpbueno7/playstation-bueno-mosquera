let items, itemsFilter, itemSelect, filterInput;




filterInput = document.getElementById("store-filter");
filterInput.addEventListener('click', catFilter, {once:false});
let fValue = filterInput.value;

function returnDetails(obj__) {
    console.log(obj__.name);
    setDetailsInfo((obj__));
}

function setDetailsInfo(obj__) {
    let obj =  obj__;
    console.log(obj.name)
    if(obj__) {
        let specifications = document.getElementById("specific-product");
        specifications.innerHTML= `  <img id= "img-producto" src="../${obj__.img[0]}" alt="">        
        <div id="specific-info">   
            <h1 id="specific-name"> ${obj__.name}</h1>
            
       
        </div>";`
      
        let closeWindow = document.getElementById("product-section").style.display = "none";
      
    }
    
  }


function catFilter() {
	fValue = filterInput.value;
	updateItems();
}

function updateItems() {
	const itemList = document.getElementById("store-list-section");
	console.log(items);
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

            let myObJ = itemsFilter[j];
            console.log(myObJ)
			button.setAttribute("onclick",`() => {returnDetails(${myObJ})} `);
			button.textContent = "Buy";

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
