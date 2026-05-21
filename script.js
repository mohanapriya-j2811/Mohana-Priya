const API_URL = 'https://dummyjson.com/products?limit=30';

let allProducts = [];
let cart = [];
let activeCategory = 'all';
let searchQuery = '';

const productGrid     = document.getElementById('productGrid');
const statusMessage   = document.getElementById('statusMessage');
const searchInput     = document.getElementById('searchInput');
const clearBtn        = document.getElementById('clearBtn');
const categoryBtns    = document.querySelectorAll('.cat-btn');
const cartItemsEl     = document.getElementById('cartItems');
const cartItemCount   = document.getElementById('cartItemCount');
const cartTotal       = document.getElementById('cartTotal');
const cartCount       = document.getElementById('cartCount');
const cartTotalHeader = document.getElementById('cartTotalHeader');

async function fetchProducts() {
  statusMessage.textContent = 'Fetching products...';
  statusMessage.classList.remove('error');
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed');
    const data = await res.json();
    allProducts = data.products;
    statusMessage.textContent = '';
    renderProducts();
  } catch (e) {
    statusMessage.textContent = 'Error Fetching Data - Check internet connection';
    statusMessage.classList.add('error');
  }
}

function renderProducts() {
  let filtered = allProducts;
  if (searchQuery.trim()) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  productGrid.innerHTML = '';
  if (!filtered.length) {
    productGrid.innerHTML = '<p style="color:#94a3b8">No products found.</p>';
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    const rating = p.rating || 0;
    const stars = '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
    card.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/200x160?text=No+Image'"/>
      <span class="p-category">${p.category}</span>
      <p class="p-title">${p.title}</p>
      <p class="p-price">$${p.price.toFixed(2)}</p>
      <p class="p-rating"><span>${stars}</span> ${rating} reviews</p>
      <button class="btn-add">Add to Cart</button>
    `;
    card.querySelector('.btn-add').addEventListener('click', () => addToCart(p));
    productGrid.appendChild(card);
  });
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function renderCart() {
  cartItemsEl.innerHTML = '';
  if (!cart.length) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    updateSummary(0, 0);
    return;
  }
  let total = 0, qty = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    qty += item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}"
           onerror="this.src='https://via.placeholder.com/42?text=?'"/>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">
          $${item.price.toFixed(2)} × ${item.qty} = $${(item.price * item.qty).toFixed(2)}
        </div>
      </div>
      <button class="btn-remove">✕</button>
    `;
    div.querySelector('.btn-remove').addEventListener('click', () => removeFromCart(item.id));
    cartItemsEl.appendChild(div);
  });
  updateSummary(qty, total);
}

function updateSummary(qty, total) {
  cartItemCount.textContent = qty;
  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = qty;
  cartTotalHeader.textContent = `Total = $${total.toFixed(2)}`;
}

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  renderProducts();
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  activeCategory = 'all';
  categoryBtns.forEach(b => b.classList.remove('active'));
  document.querySelector('.cat-btn[data-category="all"]').classList.add('active');
  renderProducts();
});

fetchProducts();