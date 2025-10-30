const products = [
  {
    id: 1,
    name: "Роза 'Красная страсть'",
    description: "Элегантная и ароматная роза ярко-красного цвета.",
    price: 1200,
    img: "../img/COMPOSITIONS_1.png",
    category: "rose",
  },
  {
    id: 2,
    name: "Букет тюльпанов",
    description: "Свежий букет желтых и красных тюльпанов.",
    price: 2500,
    img: "../img/COMPOSITIONS_2.png",
    category: "tulip",
  },
  {
    id: 3,
    name: "Пионы 'Садовые'",
    description: "Нежные, крупные цветы с насыщенным ароматом.",
    price: 3000,
    img: "../img/COMPOSITIONS_3.png",
    category: "peony",
  },
  {
    id: 4,
    name: "Букет хризантем",
    description: "Стильный и долговечный букет белых хризантем.",
    price: 1800,
    img: "../img/COMPOSITIONS_4.png",
    category: "chrysanthemum",
  },
  {
    id: 5,
    name: "Герберы 'Смешанные'",
    description: "Яркий букет из разноцветных гербер.",
    price: 2100,
    img: "../img/COMPOSITIONS_5.png",
    category: "gerbera",
  },
  {
    id: 6,
    name: "Орхидея фаленопсис",
    description: "Элегантное растение в горшке, идеально для дома.",
    price: 2700,
    img: "../img/COMPOSITIONS_6.png",
    category: "orchid",
  },
  {
    id: 7,
    name: "Роза 'Королевская'",
    description:
      "Роскошная роза с насыщенным ароматом и бархатистыми лепестками.",
    price: 1400,
    img: "../img/COMPOSITIONS_1.png",
    category: "rose",
  },
  {
    id: 8,
    name: "Весенние тюльпаны",
    description:
      "Нежные тюльпаны различных оттенков, символ весны и обновления.",
    price: 2200,
    img: "../img/COMPOSITIONS_2.png",
    category: "tulip",
  },
  {
    id: 9,
    name: "Пионы 'Лесные сказки'",
    description: "Дикие пионы с необычными оттенками и нежным ароматом.",
    price: 3200,
    img: "../img/COMPOSITIONS_3.png",
    category: "peony",
  },
  {
    id: 10,
    name: "Хризантемы 'Осень'",
    description: "Яркие осенние хризантемы с насыщенными цветами.",
    price: 2000,
    img: "../img/COMPOSITIONS_4.png",
    category: "chrysanthemum",
  },
  {
    id: 11,
    name: "Герберы 'Радуга'",
    description: "Яркие герберы всех цветов радуги в одном букете.",
    price: 2300,
    img: "../img/COMPOSITIONS_5.png",
    category: "gerbera",
  },
  {
    id: 12,
    name: "Орхидея 'Ваниль'",
    description: "Ароматная орхидея с нежными белыми цветами.",
    price: 2900,
    img: "../img/COMPOSITIONS_6.png",
    category: "orchid",
  },
  {
    id: 13,
    name: "Роза 'Белая мечта'",
    description: "Изящная белая роза, символ чистоты и невинности.",
    price: 1300,
    img: "../img/COMPOSITIONS_1.png",
    category: "rose",
  },
  {
    id: 14,
    name: "Тюльпаны 'Королевские'",
    description: "Длинноножные тюльпаны с насыщенными цветами.",
    price: 2600,
    img: "../img/COMPOSITIONS_2.png",
    category: "tulip",
  },
  {
    id: 15,
    name: "Пионы 'Ароматная страсть'",
    description: "Крупные пионы с насыщенным ароматом и бархатными лепестками.",
    price: 3100,
    img: "../img/COMPOSITIONS_3.png",
    category: "peony",
  },
  {
    id: 16,
    name: "Хризантемы 'Круглосуточные'",
    description: "Уникальные хризантемы, раскрывающиеся на протяжении дня.",
    price: 1900,
    img: "../img/COMPOSITIONS_4.png",
    category: "chrysanthemum",
  },
  {
    id: 17,
    name: "Герберы 'Солнечный закат'",
    description: "Герберы с оттенками оранжевого и желтого цветов.",
    price: 2400,
    img: "../img/COMPOSITIONS_5.png",
    category: "gerbera",
  },
  {
    id: 18,
    name: "Орхидея 'Ночная фея'",
    description: "Экзотическая орхидея с нежным ароматом, цветущая ночью.",
    price: 2800,
    img: "../img/COMPOSITIONS_6.png",
    category: "orchid",
  },
  {
    id: 19,
    name: "Роза 'Королевский синий'",
    description: "Редкая синяя роза с необычным насыщенным оттенком.",
    price: 1600,
    img: "../img/COMPOSITIONS_1.png",
    category: "rose",
  },
  {
    id: 20,
    name: "Тюльпаны 'Пастель'",
    description: "Нежные пастельные тюльпаны с мягкими оттенками.",
    price: 2100,
    img: "../img/COMPOSITIONS_2.png",
    category: "tulip",
  },
  {
    id: 21,
    name: "Пионы 'Весенние ветры'",
    description: "Легкие и воздушные пионы с нежными оттенками.",
    price: 3300,
    img: "../img/COMPOSITIONS_3.png",
    category: "peony",
  },
  {
    id: 22,
    name: "Хризантемы 'Снежинки'",
    description: "Белые хризантемы с пушистыми лепестками.",
    price: 1700,
    img: "../img/COMPOSITIONS_4.png",
    category: "chrysanthemum",
  },
  {
    id: 23,
    name: "Герберы 'Лесные краски'",
    description: "Герберы с природными оттенками зелени и коричневого.",
    price: 2500,
    img: "../img/COMPOSITIONS_5.png",
    category: "gerbera",
  },
  {
    id: 24,
    name: "Орхидея 'Золотой дождь'",
    description: "Орхидея с ярко-желтыми цветами, сияющая на солнце.",
    price: 3000,
    img: "../img/COMPOSITIONS_6.png",
    category: "orchid",
  },
  {
    id: 25,
    name: "Роза 'Медовая страсть'",
    description: "Роза с необычным медовым оттенком и насыщенным ароматом.",
    price: 1500,
    img: "../img/COMPOSITIONS_1.png",
    category: "rose",
  },
  {
    id: 26,
    name: "Тюльпаны 'Мраморная вуаль'",
    description: "Тюльпаны с мраморным узором на лепестках.",
    price: 2700,
    img: "../img/COMPOSITIONS_2.png",
    category: "tulip",
  },
  {
    id: 27,
    name: "Пионы 'Сказочные сны'",
    description: "Пионы с необычной формой лепестков и нежным ароматом.",
    price: 3400,
    img: "../img/COMPOSITIONS_3.png",
    category: "peony",
  },
  {
    id: 28,
    name: "Хризантемы 'Королевский шар'",
    description: "Крупные шаровидные хризантемы с насыщенными цветами.",
    price: 2100,
    img: "../img/COMPOSITIONS_4.png",
    category: "chrysanthemum",
  },
  {
    id: 29,
    name: "Герберы 'Морская волна'",
    description: "Герберы с оттенками синего и бирюзового цветов.",
    price: 2600,
    img: "../img/COMPOSITIONS_5.png",
    category: "gerbera",
  },
  {
    id: 30,
    name: "Орхидея 'Красный бархат'",
    description: "Орхидея с насыщенным бордовым цветом и бархатной текстурой.",
    price: 3100,
    img: "../img/COMPOSITIONS_6.png",
    category: "orchid",
  },
  {
    id: 31,
    name: "Роза 'Морозное утро'",
    description: "Белая роза с серебристым налетом на лепестках.",
    price: 1450,
    img: "../img/COMPOSITIONS_1.png",
    category: "rose",
  },
  {
    id: 32,
    name: "Тюльпаны 'Золотая лилия'",
    description: "Ярко-желтые тюльпаны с ароматом лилий.",
    price: 2300,
    img: "../img/COMPOSITIONS_2.png",
    category: "tulip",
  },
  {
    id: 33,
    name: "Пионы 'Лавандовый сад'",
    description: "Пионы с фиолетовыми оттенками и ароматом лаванды.",
    price: 3200,
    img: "../img/COMPOSITIONS_3.png",
    category: "peony",
  },
  {
    id: 34,
    name: "Хризантемы 'Амбре'",
    description: "Хризантемы с необычным амброзиным ароматом.",
    price: 1950,
    img: "../img/COMPOSITIONS_4.png",
    category: "chrysanthemum",
  },
  {
    id: 35,
    name: "Герберы 'Розовый бриз'",
    description: "Нежные розовые герберы с ароматом ванили.",
    price: 2250,
    img: "../img/COMPOSITIONS_5.png",
    category: "gerbera",
  },
  {
    id: 36,
    name: "Орхидея 'Серебряный ветер'",
    description: "Орхидея с серебристыми полосками на лепестках.",
    price: 2950,
    img: "../img/COMPOSITIONS_6.png",
    category: "orchid",
  },
];

// --- Состояние и настройки ---
let filteredProducts = [...products];
let sortedProducts = [...filteredProducts];
let currentPage = 1;
const itemsPerPage = 9;

// --- DOM элементы ---
const catalogGrid = document.getElementById("catalog-grid");
const paginationContainer = document.getElementById("pagination");
const categoryFilter = document.getElementById("category-filter");
const priceMinInput = document.getElementById("price-min");
const priceMaxInput = document.getElementById("price-max");
const sortButtons = document.querySelectorAll(".sort-btn");

// --- РАБОТА С КОРЗИНОЙ ---
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCountBadgeElement = document.querySelector(".cart-count-badge");
const openCartBtn = document.getElementById("openCartBtn");
const cartModal = document.getElementById("cartModal");
const cartItemsElement = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const cartClose = cartModal.querySelector(".close");
const checkoutButton = document.getElementById("checkoutButton");

const updateCartCount = () => {
  if (cartCountBadgeElement) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadgeElement.textContent = count;
    cartCountBadgeElement.style.display = count > 0 ? "flex" : "none";
  }
};

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};

const addToCart = (product) => {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  renderCart();
};

const removeFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
};

const updateQuantity = (id, newQuantity) => {
  if (newQuantity <= 0) {
    removeFromCart(id);
    return;
  }
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    renderCart();
  }
};

const renderCart = () => {
  if (!cartItemsElement || !cartTotalElement) return;
  cartItemsElement.innerHTML = "";

  if (cart.length === 0) {
    cartItemsElement.innerHTML =
      '<p style="text-align:center; color:#888;">Корзина пуста</p>';
    cartTotalElement.textContent = "Итого: 0 ₽";
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.style.display = "flex";
    itemElement.style.alignItems = "center";
    itemElement.style.marginBottom = "15px";
    itemElement.style.paddingBottom = "15px";
    itemElement.style.borderBottom = "1px solid #eee";

    itemElement.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px; border-radius: 4px;">
                    <div style="flex-grow: 1;">
                        <h4 style="font-size: 0.95rem; margin: 0 0 5px 0; color:#444;">${item.name}</h4>
                        <p style="font-size: 0.9rem; color: #777; margin: 0;">${item.price} ₽ x ${item.quantity}</p>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <button class="update-quantity-btn" data-id="${item.id}" data-change="-1" style="background: none; border: 1px solid #ddd; border-radius: 4px; width: 25px; height: 25px; cursor: pointer; margin-right: 5px;">-</button>
                        <span style="min-width: 20px; text-align: center;">${item.quantity}</span>
                        <button class="update-quantity-btn" data-id="${item.id}" data-change="1" style="background: none; border: 1px solid #ddd; border-radius: 4px; width: 25px; height: 25px; cursor: pointer; margin-left: 5px;">+</button>
                        <button class="remove-from-cart-btn" data-id="${item.id}" style="margin-left: 10px; background: none; border: none; color: #e75480; cursor: pointer; font-size: 0.8rem;">Удалить</button>
                    </div>
                `;
    cartItemsElement.appendChild(itemElement);
  });

  cartTotalElement.textContent = `Итого: ${total} ₽`;
};

// --- Функции отображения ---
const renderProducts = (productsToRender) => {
  catalogGrid.innerHTML = "";
  if (productsToRender.length === 0) {
    catalogGrid.innerHTML =
      '<div class="no-results">Товары не найдены по заданным критериям.</div>';
    paginationContainer.innerHTML = "";
    return;
  }

  productsToRender.forEach((product) => {
    const card = document.createElement("div");
    card.className = "flower-card";
    card.innerHTML = `
                    <div class="card-image">
                        <img src="${product.img}" alt="${product.name}">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${product.name}</h3>
                        <p class="card-description">${product.description}</p>
                        <div class="card-price">${product.price} ₽</div>
                        <button class="card-button" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-img="${product.img}">Добавить в корзину</button>
                    </div>
                `;
    catalogGrid.appendChild(card);
  });

  document.querySelectorAll(".flower-card .card-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const product = {
        id: e.target.dataset.id,
        name: e.target.dataset.name,
        price: parseInt(e.target.dataset.price),
        img: e.target.dataset.img,
      };
      addToCart(product);
      openCartModal();
    });
  });

  document.querySelectorAll(".flower-card .card-image img").forEach((img) => {
    img.addEventListener("click", openModal);
  });
};

const renderPagination = (totalItems, itemsPerPage, currentPage) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  paginationContainer.innerHTML = "";

  if (totalPages <= 1) return;

  if (currentPage > 1) {
    const prevBtn = document.createElement("a");
    prevBtn.href = "#";
    prevBtn.textContent = "Предыдущая";
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      goToPage(currentPage - 1);
    });
    paginationContainer.appendChild(prevBtn);
  }

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("a");
    pageBtn.href = "#";
    pageBtn.textContent = i;
    if (i === currentPage) {
      pageBtn.classList.add("active");
    }
    pageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      goToPage(i);
    });
    paginationContainer.appendChild(pageBtn);
  }

  if (currentPage < totalPages) {
    const nextBtn = document.createElement("a");
    nextBtn.href = "#";
    nextBtn.textContent = "Следующая";
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      goToPage(currentPage + 1);
    });
    paginationContainer.appendChild(nextBtn);
  }
};

const goToPage = (page) => {
  currentPage = page;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToShow = sortedProducts.slice(startIndex, endIndex);
  renderProducts(productsToShow);
  renderPagination(sortedProducts.length, itemsPerPage, currentPage);
};

const applyFilters = () => {
  const selectedCategory = categoryFilter.value;
  const minPrice = parseFloat(priceMinInput.value) || 0;
  const maxPrice = parseFloat(priceMaxInput.value) || Infinity;

  filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  currentPage = 1;
  applySorting();
};

const applySorting = (sortBy = null) => {
  if (sortBy) {
    sortButtons.forEach((btn) => btn.classList.remove("active"));
    const activeBtn = document.querySelector(
      `.sort-btn[data-sort="${sortBy}"]`
    );
    if (activeBtn) activeBtn.classList.add("active");

    switch (sortBy) {
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
    }
  } else {
    sortedProducts = [...filteredProducts].sort((a, b) => a.id - b.id);
  }

  currentPage = 1;
  goToPage(currentPage);
};

const modal = document.getElementById("flowerModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalAddToCart = document.getElementById("modalAddToCart");

function openModal(event) {
  const card = event.target.closest(".flower-card");
  if (!card) return;

  const imageSrc = card.querySelector(".card-image img").src;
  const title = card.querySelector(".card-title").textContent;
  const description = card.querySelector(".card-description").textContent;
  const price = card.querySelector(".card-price").textContent;

  modalImage.src = imageSrc;
  modalImage.alt = title;
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalPrice.textContent = price;

  modalAddToCart.onclick = function () {
    const product = {
      id: card.querySelector(".card-button").dataset.id,
      name: title,
      price: parseInt(price.replace(/\s/g, "").replace("₽", "")),
      img: imageSrc,
    };
    addToCart(product);
    openCartModal();
  };

  modal.style.display = "block";
}

const modalClose = document.querySelector("#flowerModal .close");
modalClose.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();

  function openCartModal() {
    renderCart();
    cartModal.style.display = "block";
  }

  openCartBtn.onclick = openCartModal;
  cartClose.onclick = function () {
    cartModal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  };

  document.getElementById("cartItems").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-from-cart-btn")) {
      const id = e.target.dataset.id;
      if (id) removeFromCart(id);
    }
    if (e.target.classList.contains("update-quantity-btn")) {
      const id = e.target.dataset.id;
      const changeStr = e.target.dataset.change;
      if (id && changeStr) {
        const change = parseInt(changeStr, 10);
        const currentItem = cart.find((item) => item.id === id);
        if (currentItem && !isNaN(change)) {
          updateQuantity(id, currentItem.quantity + change);
        }
      }
    }
  });

  checkoutButton.onclick = function () {
    alert("Переход к оформлению заказа.");
  };

  applyFilters();

  categoryFilter.addEventListener("change", applyFilters);
  priceMinInput.addEventListener("input", applyFilters);
  priceMaxInput.addEventListener("input", applyFilters);

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const sortBy = button.dataset.sort;
      applySorting(sortBy);
    });
  });
});
