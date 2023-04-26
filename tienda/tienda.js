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

