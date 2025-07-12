$(document).ready(() => {
  $.getJSON("https://dummyjson.com/products", (result) => {
    console.log(result.products);
    for (let item of result.products) {
      $('#row').append(`
        <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
          <div class="card product-card flex-fill h-100">
            <img src="${item.images[0]}" class="card-img-top product-img" alt="${item.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${item.title.slice(0, 35)}...</h5>
              <p class="card-text fw-bold text-success mb-2">$${item.price}</p>
              <button class="btn btn-outline-warning mt-auto">Buy Now</button>
            </div>
          </div>
        </div>
      `);
    }
  });
});
