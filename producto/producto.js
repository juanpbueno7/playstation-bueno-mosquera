const url = "productos.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const productos = data;
    productos.forEach(producto => {
      const productoHTML = `
        <div class="producto">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h2>${producto.nombre}</h2>
          <p>${producto.descripcion}</p>
          <p>${producto.precio}</p>
        </div>
      `;
      document.querySelector("#productos").insertAdjacentHTML("beforeend", productoHTML);
    });
  });