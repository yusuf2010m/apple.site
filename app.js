/* ==========================================================================
   APPLE iOS 27 LIQUID GLASS STORE - INTERACTIVE FRONTEND ENGINE (60FPS)
   Includes:
   - 8 Ultra-Crisp 8K Studio Apple Products
   - Real Color Variant Switching in Product Modal (changes image & color label)
   - Right-Side Animated Liquid Glass Cart Drawer
   - Animated Purchase Confirmation Window ("Siz mahsulotni sotib oldingiz!")
   - Mobile Responsive Navigation Menu
   ========================================================================== */

const APPLE_LOGO_SVG = `<svg class="apple-logo-svg-mini" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.1 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>`;

const PRODUCTS = [
  // Primary 4 Cards matching the Reference Image layout & prices
  {
    id: "airpods-pro-wireless",
    name: "Wireless Earbuds",
    appleModel: "AirPods Pro 3 (USB-C)",
    category: "audio",
    price: 199,
    image: "assets/prod-earbuds.jpg",
    variants: [
      { name: "Pure White", hex: "#f2f3f7", image: "assets/prod-earbuds.jpg" },
      { name: "Midnight Titanium", hex: "#383c46", image: "assets/prod-earbuds-midnight.jpg" },
      { name: "Sky Blue", hex: "#94b4d8", image: "assets/prod-earbuds-blue.jpg" }
    ],
    description: "Apple H3 akustik chipi bilan jihozlangan yangi avlod AirPods Pro. Adaptive Audio, 2 barobar kuchli faol shovqinni pasaytirish (ANC) va MagSafe quvvatlash g'ilofi bilan.",
    specs: [
      { label: "Chip", value: "Apple H3 Custom" },
      { label: "Batareya", value: "30 soatgacha (Case)" },
      { label: "Audio", value: "Spatial Audio + ANC" },
      { label: "Himoya", value: "IP54 Chang va suvdan" }
    ]
  },
  {
    id: "apple-smart-watch",
    name: "Smart Watch",
    appleModel: "Apple Watch Ultra Titanium",
    category: "wearables",
    price: 299,
    image: "assets/prod-watch.jpg",
    variants: [
      { name: "Natural Titanium", hex: "#c8cacf", image: "assets/prod-watch.jpg" },
      { name: "Black Titanium", hex: "#2d3038", image: "assets/prod-watch-midnight.jpg" },
      { name: "Desert Titanium", hex: "#c9b698", image: "assets/prod-watch-gold.jpg" }
    ],
    description: "Aerokosmik darajadagi titan korpus va sapfir oyna bilan ishlangan Apple Watch. 3000 nit yorqinlikdagi Retina displey va ikki chastotali aniq GPS tizimi.",
    specs: [
      { label: "Korpus", value: "49mm Grade 5 Titanium" },
      { label: "Displey", value: "3000 nits Always-On" },
      { label: "Quvvat", value: "72 soat Low Power" },
      { label: "Sensor", value: "EKG + Qon kislorodi" }
    ]
  },
  {
    id: "apple-portable-speaker",
    name: "Portable Speaker",
    appleModel: "HomePod Studio Acoustic",
    category: "audio",
    price: 149,
    image: "assets/prod-speaker.jpg",
    variants: [
      { name: "Space Gray", hex: "#9ea1a8", image: "assets/prod-speaker.jpg" },
      { name: "Midnight Mesh", hex: "#343740", image: "assets/prod-speaker-midnight.jpg" },
      { name: "Ocean Blue", hex: "#7898c0", image: "assets/prod-speaker-blue.jpg" }
    ],
    description: "Xonani to'ldiruvchi 360 darajali Hi-Fi ovoz arxitekturasi. Xona akustikasini avtomatik tahlil qiluvchi sensorlar va Apple ekotizimi bilan tezkor ulanish.",
    specs: [
      { label: "Akustika", value: "High-Excursion Woofer" },
      { label: "Tizim", value: "Room Sensing AI" },
      { label: "Ulanish", value: "AirPlay 3 + Ultra Wideband" },
      { label: "Qoplama", value: "Seamless Acoustic Mesh" }
    ]
  },
  {
    id: "apple-charging-dock",
    name: "Charging Dock",
    appleModel: "MagSafe Pro Aluminum Stand",
    category: "accessories",
    price: 99,
    image: "assets/prod-dock.jpg",
    variants: [
      { name: "Silver Aluminum", hex: "#d4d6dc", image: "assets/prod-dock.jpg" },
      { name: "Space Black", hex: "#353842", image: "assets/prod-dock-midnight.jpg" },
      { name: "Starlight Gold", hex: "#cbb89d", image: "assets/prod-dock-gold.jpg" }
    ],
    description: "iPhone va AirPods uchun CNC alyuminiydan ishlangan 2-in-1 magnitli quvvatlash dok-stansiyasi. StandBy rejimi uchun ideal ko'rish burchagi.",
    specs: [
      { label: "Material", value: "Anodized CNC Aluminum" },
      { label: "Quvvatlash", value: "25W Fast Qi2 / MagSafe" },
      { label: "Moslik", value: "iPhone + AirPods" },
      { label: "Rejim", value: "StandBy Mode Ready" }
    ]
  },

  // Additional 4 Flagship Apple Products
  {
    id: "airpods-max-silver",
    name: "AirPods Max Studio",
    appleModel: "Apple AirPods Max (USB-C)",
    category: "audio",
    price: 549,
    image: "assets/hero-headphones.jpg",
    variants: [
      { name: "Silver", hex: "#dcdfe4", image: "assets/hero-headphones.jpg" },
      { name: "Midnight", hex: "#363a45", image: "assets/hero-headphones-midnight.jpg" },
      { name: "Sky Blue", hex: "#8fb3dc", image: "assets/hero-headphones-blue.jpg" },
      { name: "Starlight", hex: "#d4c3aa", image: "assets/hero-headphones-gold.jpg" }
    ],
    description: "Yuqori aniqlikdagi Lossless audio va sanoatdagi eng ilg'or Active Noise Cancellation tizimiga ega Apple flagman quloqchinlari. Nafas oluvchi to'rli bosh tasmasi va anodlangan alyuminiy korpus.",
    specs: [
      { label: "Drayver", value: "40mm Apple Dynamic" },
      { label: "Protsessor", value: "Dual H3 Audio Engines" },
      { label: "Material", value: "Anodized Aluminum" },
      { label: "Ulanish", value: "USB-C Lossless Audio" }
    ]
  },
  {
    id: "apple-iphone-16-pro",
    name: "iPhone 16 Pro",
    appleModel: "Apple iPhone 16 Pro Titanium",
    category: "wearables",
    price: 999,
    image: "assets/prod-iphone.jpg",
    variants: [
      { name: "Natural Titanium", hex: "#c8c5bc", image: "assets/prod-iphone.jpg" },
      { name: "Black Titanium", hex: "#32353d", image: "assets/prod-iphone-midnight.jpg" },
      { name: "Desert Titanium", hex: "#cbb699", image: "assets/prod-iphone-gold.jpg" }
    ],
    description: "Grade 5 titan korpus, A18 Pro chip va 4K 120fps Dolby Vision tasvirga oluvchi Pro kamera tizimiga ega flagman iPhone.",
    specs: [
      { label: "Protsessor", value: "Apple A18 Pro (3nm)" },
      { label: "Kamera", value: "48MP Fusion + 5x Zoom" },
      { label: "Korpus", value: "Grade 5 Titanium" },
      { label: "Displey", value: "6.3\" Super Retina XDR" }
    ]
  },
  {
    id: "apple-vision-pro",
    name: "Apple Vision Pro",
    appleModel: "Spatial Computer (M2 + R1)",
    category: "wearables",
    price: 3499,
    image: "assets/prod-vision.jpg",
    variants: [
      { name: "Silver Edition", hex: "#dfe2e7", image: "assets/prod-vision.jpg" },
      { name: "Midnight Edition", hex: "#3a3e48", image: "assets/prod-vision-midnight.jpg" },
      { name: "Sky Blue Knit", hex: "#94b5dc", image: "assets/prod-vision-blue.jpg" }
    ],
    description: "Raqamli kontentni real olam bilan uyg'unlashtiruvchi fazoviy kompyuter. Ko'z qarashi, qo'l harakati va ovoz orqali boshqariladi.",
    specs: [
      { label: "Displey", value: "23M Pixels Micro-OLED" },
      { label: "Chiplar", value: "Apple M2 + R1 Dual" },
      { label: "Audio", value: "Spatial Ray-Traced" },
      { label: "Tasma", value: "3D Ribbed Solo Knit" }
    ]
  },
  {
    id: "airpods-smart-case",
    name: "Smart Acoustic Case",
    appleModel: "AirPods Max Ultra-Low Power Case",
    category: "accessories",
    price: 79,
    image: "assets/prod-smartcase.jpg",
    variants: [
      { name: "Silver Grey", hex: "#c5c7cc", image: "assets/prod-smartcase.jpg" },
      { name: "Midnight Grey", hex: "#383c46", image: "assets/prod-smartcase-midnight.jpg" },
      { name: "Sky Blue", hex: "#8fb2d9", image: "assets/prod-smartcase-blue.jpg" }
    ],
    description: "AirPods Max quloqchinlarini ultra-past quvvat rejimiga o'tkazuvchi yumshoq mikrofibra va akustik qoplamali original Apple g'ilofi.",
    specs: [
      { label: "Funksiya", value: "Auto Ultra-Low Power" },
      { label: "Port", value: "USB-C Pass-Through" },
      { label: "Qoplama", value: "Soft-Touch Acoustic" },
      { label: "Og'irlik", value: "134g Ultra-Light" }
    ]
  }
];

// State
let cart = [
  { ...PRODUCTS[0], selectedVariant: PRODUCTS[0].variants[0], qty: 1 }
];
let currentFilter = "all";
let activeModalProduct = null;
let activeModalVariant = null;

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const filterButtons = document.querySelectorAll(".filter-pill-btn");
const cartTriggerBtn = document.getElementById("cartTriggerBtn");
const cartCountBadge = document.getElementById("cartCountBadge");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const cartDrawer = document.getElementById("cartDrawer");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsList = document.getElementById("cartItemsList");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartTotalEl = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNavDropdown = document.getElementById("mobileNavDropdown");

// Modal Elements
const productModalBackdrop = document.getElementById("productModalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalProductImg = document.getElementById("modalProductImg");
const selectedColorLabel = document.getElementById("selectedColorLabel");
const modalColorSwatches = document.getElementById("modalColorSwatches");
const modalAppleModel = document.getElementById("modalAppleModel");
const modalProductTitle = document.getElementById("modalProductTitle");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductDesc = document.getElementById("modalProductDesc");
const modalSpecsGrid = document.getElementById("modalSpecsGrid");
const modalBuyNowBtn = document.getElementById("modalBuyNowBtn");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

// Purchase Confirmation Popup Elements
const purchasePopupBackdrop = document.getElementById("purchasePopupBackdrop");
const purchasePopupSubtitle = document.getElementById("purchasePopupSubtitle");
const receiptItemsText = document.getElementById("receiptItemsText");
const receiptOrderId = document.getElementById("receiptOrderId");
const receiptTotalText = document.getElementById("receiptTotalText");
const closePurchasePopupBtn = document.getElementById("closePurchasePopupBtn");

// ==========================================================================
// 1. RENDER PRODUCTS GRID
// ==========================================================================
function renderProducts() {
  const filtered = currentFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === currentFilter);

  productsGrid.innerHTML = filtered.map((prod, idx) => `
    <article class="product-card liquid-glass reveal-up visible" data-product-id="${prod.id}" style="transition-delay: ${idx * 35}ms">
      <div class="product-card-top">
        <span class="apple-mini-tag">
          ${APPLE_LOGO_SVG}
          <span>Apple</span>
        </span>
        <span class="quick-expand-icon" title="Kattaroq ekranda ko'rish">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
        </span>
      </div>

      <div class="product-thumb-wrap">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy" decoding="async" />
      </div>

      <h3 class="product-card-Title">${prod.name}</h3>
      <p class="product-card-sub">${prod.appleModel}</p>
      <div class="product-card-price">$${prod.price}</div>

      <div class="card-actions-row">
        <button class="card-btn-cart" data-action="add-cart" data-id="${prod.id}">
          + Savatcha
        </button>
        <button class="card-btn-buy" data-action="instant-buy" data-id="${prod.id}">
          Sotib olish
        </button>
      </div>
    </article>
  `).join("");

  attachCardListeners();
}

function attachCardListeners() {
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", e => {
      const actionBtn = e.target.closest("button[data-action]");
      const prodId = card.dataset.productId;
      const product = PRODUCTS.find(p => p.id === prodId);
      if (!product) return;

      if (actionBtn) {
        e.stopPropagation();
        const action = actionBtn.dataset.action;
        if (action === "add-cart") {
          addToCart(product, product.variants[0], true);
        } else if (action === "instant-buy") {
          triggerPurchaseSuccess([
            { name: `${product.name} (${product.variants[0].name})`, qty: 1, price: product.price }
          ]);
        }
        return;
      }

      openProductModal(product);
    });
  });
}

// ==========================================================================
// 2. ANIMATED EXPANDED PRODUCT DETAIL MODAL WITH REAL COLOR SWITCHING
// ==========================================================================
function openProductModal(product) {
  activeModalProduct = product;
  activeModalVariant = product.variants[0];

  modalProductImg.src = activeModalVariant.image;
  modalProductImg.alt = `${product.name} - ${activeModalVariant.name}`;
  selectedColorLabel.textContent = `Rang: ${activeModalVariant.name}`;

  modalAppleModel.textContent = product.appleModel;
  modalProductTitle.textContent = product.name;
  modalProductPrice.textContent = `$${product.price}.00`;
  modalProductDesc.textContent = product.description;

  modalColorSwatches.innerHTML = product.variants.map((v, i) => `
    <button
      type="button"
      class="swatch-dot ${i === 0 ? 'active' : ''}"
      style="background:${v.hex}"
      data-variant-index="${i}"
      aria-label="Rang: ${v.name}"
      title="${v.name}"
    ></button>
  `).join("");

  modalColorSwatches.querySelectorAll(".swatch-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.variantIndex, 10);
      const chosen = product.variants[idx];
      if (!chosen || chosen === activeModalVariant) return;

      activeModalVariant = chosen;
      modalColorSwatches.querySelectorAll(".swatch-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      selectedColorLabel.textContent = `Rang: ${chosen.name}`;

      // Smooth crossfade & scale transition when switching product color image
      modalProductImg.classList.add("switching");
      setTimeout(() => {
        modalProductImg.src = chosen.image;
        modalProductImg.onload = () => {
          modalProductImg.classList.remove("switching");
        };
      }, 140);
    });
  });

  modalSpecsGrid.innerHTML = product.specs.map(s => `
    <div class="spec-pill">
      <span class="spec-pill-label">${s.label}</span>
      <span class="spec-pill-val">${s.value}</span>
    </div>
  `).join("");

  productModalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  productModalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

closeModalBtn.addEventListener("click", closeProductModal);
productModalBackdrop.addEventListener("click", e => {
  if (e.target === productModalBackdrop) closeProductModal();
});

modalAddToCartBtn.addEventListener("click", () => {
  if (!activeModalProduct) return;
  addToCart(activeModalProduct, activeModalVariant || activeModalProduct.variants[0], true);
  closeProductModal();
});

modalBuyNowBtn.addEventListener("click", () => {
  if (!activeModalProduct) return;
  const prod = activeModalProduct;
  const variant = activeModalVariant || prod.variants[0];
  closeProductModal();
  triggerPurchaseSuccess([
    { name: `${prod.name} (${variant.name})`, qty: 1, price: prod.price }
  ]);
});

// ==========================================================================
// 3. RIGHT-SIDE SLIDE-OUT CART DRAWER LOGIC
// ==========================================================================
function openCartDrawer() {
  drawerBackdrop.classList.add("open");
  cartDrawer.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  drawerBackdrop.classList.remove("open");
  cartDrawer.classList.remove("open");
  document.body.style.overflow = "";
}

function addToCart(product, variant, openDrawerAfter = true) {
  const chosenVariant = variant || product.variants[0];
  const cartKey = `${product.id}__${chosenVariant.name}`;

  const existing = cart.find(item => item.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      ...product,
      cartKey,
      selectedVariant: chosenVariant,
      qty: 1
    });
  }

  cartCountBadge.classList.remove("bump");
  void cartCountBadge.offsetWidth;
  cartCountBadge.classList.add("bump");

  updateCartUI();
  if (openDrawerAfter) {
    openCartDrawer();
  }
}

function changeCartQty(cartKey, delta) {
  const idx = cart.findIndex(item => (item.cartKey || item.id) === cartKey);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  cartCountBadge.textContent = totalCount;
  cartSubtotalEl.textContent = `$${totalPrice}.00`;
  cartTotalEl.textContent = `$${totalPrice}.00`;
  checkoutBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <h4>Savatchangiz bo'sh</h4>
        <p>Apple mahsulotlaridan tanlab savatchaga qo'shing.</p>
      </div>
    `;
    return;
  }

  cartItemsList.innerHTML = cart.map(item => {
    const key = item.cartKey || item.id;
    const vName = item.selectedVariant ? item.selectedVariant.name : "";
    const thumbSrc = item.selectedVariant ? item.selectedVariant.image : item.image;
    return `
      <div class="cart-item-card">
        <div class="cart-item-thumb">
          <img src="${thumbSrc}" alt="${item.name}" />
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${item.appleModel}${vName ? ` • ${vName}` : ""}</div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" data-qty-key="${key}" data-delta="-1">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" data-qty-key="${key}" data-delta="1">+</button>
            </div>
            <span class="cart-item-price">$${item.price * item.qty}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  cartItemsList.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.qtyKey;
      const delta = parseInt(btn.dataset.delta, 10);
      changeCartQty(key, delta);
    });
  });
}

cartTriggerBtn.addEventListener("click", openCartDrawer);
closeCartBtn.addEventListener("click", closeCartDrawer);
drawerBackdrop.addEventListener("click", closeCartDrawer);

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;
  const purchasedItems = cart.map(i => ({
    name: `${i.name}${i.selectedVariant ? ` (${i.selectedVariant.name})` : ""}`,
    qty: i.qty,
    price: i.price
  }));
  closeCartDrawer();
  setTimeout(() => {
    triggerPurchaseSuccess(purchasedItems);
    cart = [];
    updateCartUI();
  }, 220);
});

// ==========================================================================
// 4. PURCHASE CONFIRMATION POPUP ("Siz mahsulotni sotib oldingiz!")
// ==========================================================================
function triggerPurchaseSuccess(items) {
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const namesList = items.map(i => `${i.name} x${i.qty}`).join(", ");
  const randomOrder = "APL-" + Math.floor(100000 + Math.random() * 900000);

  purchasePopupSubtitle.textContent = `Tabriklaymiz! Sizning Apple buyurtmangiz muvaffaqiyatli rasmiylashtirildi.`;
  receiptItemsText.textContent = namesList;
  receiptOrderId.textContent = `#${randomOrder}`;
  receiptTotalText.textContent = `$${totalAmount}.00`;

  purchasePopupBackdrop.classList.add("open");
}

closePurchasePopupBtn.addEventListener("click", () => {
  purchasePopupBackdrop.classList.remove("open");
});

purchasePopupBackdrop.addEventListener("click", e => {
  if (e.target === purchasePopupBackdrop) {
    purchasePopupBackdrop.classList.remove("open");
  }
});

// ==========================================================================
// 5. MOBILE MENU, FILTERS & SMOOTH SCROLLING
// ==========================================================================
if (mobileMenuBtn && mobileNavDropdown) {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileNavDropdown.classList.toggle("open");
    mobileMenuBtn.classList.toggle("active", isOpen);
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNavDropdown.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileNavDropdown.classList.remove("open");
      mobileMenuBtn.classList.remove("active");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderProducts();
  });
});

document.querySelectorAll("[data-open-product]").forEach(el => {
  el.addEventListener("click", () => {
    const id = el.dataset.openProduct;
    const prod = PRODUCTS.find(p => p.id === id) || PRODUCTS[4];
    if (prod) openProductModal(prod);
  });
});

// Passive scroll listener for 60fps performance
const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}, { passive: true });

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal-up").forEach(el => revealObserver.observe(el));

// Escape key closes active modal or drawer
window.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeProductModal();
    closeCartDrawer();
    purchasePopupBackdrop.classList.remove("open");
  }
});

// Initialize
renderProducts();
updateCartUI();
