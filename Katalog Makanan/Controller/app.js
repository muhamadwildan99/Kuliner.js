const app = {
  init: function () {
    const catalog = document.getElementById("catalog");

    model.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          <span>Rp ${item.price.toLocaleString()}</span>
        </div>
      `;
      catalog.appendChild(card);
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
