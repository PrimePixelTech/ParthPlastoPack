const productsData = [
  {
      id: 1, title: "IML Supplement Container", imageSrc: "./assets/images/products/jar1.webp", code: "JAR-01",
      description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
      specifications: [
          { label: "Over Flow Volume", value: "560 +/- 20 ML" }, { label: "Height Of Container", value: "114 +/- 1 MM" },
          { label: "Neck Size", value: "84 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "82 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "0.8 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Push fitting" },
          { label: "Label Type", value: "Label & IML" }, { label: "Weight Of Container (With Cap)", value: "38 +/- 2 GM" },
          { label: "Powder Volume (Approx)", value: "200 To 250 GM" }, { label: "Material", value: "Food-grade PP plastic" }
      ],
      category: "jars", featured: true
  },
  {
      id: 2, title: "Large Powder Container", imageSrc: "./assets/images/products/jar2.webp", code: "JAR-02",
      description: "Our largest capacity container, ideal for bulk protein powders and nutritional products. Features a sturdy build and a wide mouth for easy scooping. Perfect for gym supplements and wholesale packaging.",
      specifications: [
          { label: "Over Flow Volume", value: "2500 +/- 50 ML" }, { label: "Height Of Container", value: "220 +/- 2 MM" },
          { label: "Neck Size", value: "120 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "150 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "1.2 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Screw-on" },
          { label: "Label Type", value: "Shrink Sleeve / IML" }, { label: "Weight Of Container (With Cap)", value: "120 +/- 5 GM" },
          { label: "Powder Volume (Approx)", value: "1000 To 1200 GM" }, { label: "Material", value: "Food-grade HDPE" }
      ],
      category: "jars", featured: true
  },
  {
      id: 3, title: "Chocolate Powder Jar", imageSrc: "./assets/images/products/jar3.webp", code: "JAR-03",
      description: "A beautifully designed jar for premium chocolate-flavored powders and drink mixes. The IML label offers vibrant, full-color graphics. Perfect for health drinks, cocoa powders, and flavored supplements.",
      specifications: [
          { label: "Over Flow Volume", value: "800 +/- 20 ML" }, { label: "Height Of Container", value: "150 +/- 1 MM" },
          { label: "Neck Size", value: "100 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "105 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Push fitting with seal" },
          { label: "Label Type", value: "Full-wrap IML" }, { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
          { label: "Powder Volume (Approx)", value: "300 To 350 GM" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "jars", featured: true
  },
  {
      id: 4, title: "Weight Management Tub", imageSrc: "./assets/images/products/jar4.webp", code: "JAR-04",
      description: "Sleek and modern tub designed specifically for weight management products. Features a wide opening for easy access and a secure lid to maintain product freshness. Ideal for meal replacements and diet supplements.",
      specifications: [
          { label: "Over Flow Volume", value: "1200 +/- 30 ML" }, { label: "Height Of Container", value: "130 +/- 1 MM" },
          { label: "Neck Size", value: "120 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "125 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "1.1 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Push fitting" },
          { label: "Label Type", value: "IML / Sticker" }, { label: "Weight Of Container (With Cap)", value: "75 +/- 4 GM" },
          { label: "Powder Volume (Approx)", value: "500 GM" }, { label: "Material", value: "Food-grade PP plastic" }
      ],
      category: "jars"
  },
  {
      id: 5, title: "Compact Powder Jar", imageSrc: "./assets/images/products/jar5.webp", code: "JAR-05",
      description: "A compact and efficient container for smaller-volume powders and supplements. Its robust design with IML makes it a premium choice for trial packs or concentrated formulas.",
      specifications: [
          { label: "Over Flow Volume", value: "300 +/- 15 ML" }, { label: "Height Of Container", value: "90 +/- 1 MM" },
          { label: "Neck Size", value: "70 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "72 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "0.7 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Push fitting" },
          { label: "Label Type", value: "IML" }, { label: "Weight Of Container (With Cap)", value: "28 +/- 2 GM" },
          { label: "Powder Volume (Approx)", value: "100 To 150 GM" }, { label: "Material", value: "Food-grade PP plastic" }
      ],
      category: "jars"
  },
  {
      id: 6, title: "Mid-Size Gainer Tub", imageSrc: "./assets/images/products/jar6.webp", code: "JAR-06",
      description: "A mid-size tub perfect for mass gainers and larger supplement quantities. The sturdy handle-cap design ensures easy transport and handling.",
      specifications: [
          { label: "Over Flow Volume", value: "4000 +/- 50 ML" }, { label: "Height Of Container", value: "250 +/- 2 MM" },
          { label: "Neck Size", value: "120 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "180 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "1.5 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Screw-on with handle" },
          { label: "Label Type", value: "Shrink Sleeve" }, { label: "Weight Of Container (With Cap)", value: "180 +/- 10 GM" },
          { label: "Powder Volume (Approx)", value: "2000 GM" }, { label: "Material", value: "Food-grade HDPE" }
      ],
      category: "jars"
  },
  {
      id: 7, title: "Pre-Workout Container", imageSrc: "./assets/images/products/jar7.webp", code: "JAR-07",
      description: "An aggressively styled container for pre-workout formulas. The vibrant IML capabilities and ergonomic shape make it stand out on any shelf.",
      specifications: [
          { label: "Over Flow Volume", value: "450 +/- 20 ML" }, { label: "Height Of Container", value: "100 +/- 1 MM" },
          { label: "Neck Size", "value": "90 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "0.9 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Screw-on" },
          { label: "Label Type", value: "IML" }, { label: "Weight Of Container (With Cap)", value: "45 +/- 3 GM" },
          { label: "Powder Volume (Approx)", value: "200 GM" }, { label: "Material", value: "Food-grade PP plastic" }
      ],
      category: "jars"
  },
  {
      id: 8, title: "Herbal Powder Jar", imageSrc: "./assets/images/products/jar8.webp", code: "JAR-08",
      description: "A classic, clean design perfect for herbal powders, teas, and organic supplements. The push-fit cap ensures freshness and ease of use.",
      specifications: [
          { label: "Over Flow Volume", value: "600 +/- 20 ML" }, { label: "Height Of Container", value: "120 +/- 1 MM" },
          { label: "Neck Size", value: "84 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "88 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "0.8 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Push fitting" },
          { label: "Label Type", value: "Label & IML" }, { label: "Weight Of Container (With Cap)", value: "40 +/- 2 GM" },
          { label: "Powder Volume (Approx)", value: "250 GM" }, { label: "Material", value: "Food-grade PP plastic" }
      ],
      category: "jars"
  },
  {
      id: 21, title: "Herbal Powder Jar", imageSrc: "./assets/images/products/jar9.webp", code: "JAR-08",
      description: "A classic, clean design perfect for herbal powders, teas, and organic supplements. The push-fit cap ensures freshness and ease of use.",
      specifications: [
          { label: "Over Flow Volume", value: "600 +/- 20 ML" }, { label: "Height Of Container", value: "120 +/- 1 MM" },
          { label: "Neck Size", value: "84 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "88 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "0.8 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Push fitting" },
          { label: "Label Type", value: "Label & IML" }, { label: "Weight Of Container (With Cap)", value: "40 +/- 2 GM" },
          { label: "Powder Volume (Approx)", value: "250 GM" }, { label: "Material", value: "Food-grade PP plastic" }
      ],
      category: "jars"
  },
  {
      id: 22, title: "Herbal Powder Jar", imageSrc: "./assets/images/products/jar10.webp", code: "JAR-08",
      description: "A classic, clean design perfect for herbal powders, teas, and organic supplements. The push-fit cap ensures freshness and ease of use.",
      specifications: [
          { label: "Over Flow Volume", value: "600 +/- 20 ML" }, { label: "Height Of Container", value: "120 +/- 1 MM" },
          { label: "Neck Size", value: "84 +/- 0.5 MM" }, { label: "Maximum Dia Of Container", value: "88 +/- 0.5 MM" },
          { label: "Wall Thickness", value: "0.8 +/- 0.1 MM" }, { label: "Cap Fitting", value: "Push fitting" },
          { label: "Label Type", value: "Label & IML" }, { label: "Weight Of Container (With Cap)", value: "40 +/- 2 GM" },
          { label: "Powder Volume (Approx)", value: "250 GM" }, { label: "Material", value: "Food-grade PP plastic" }
      ],
      category: "jars"
  },
  {
      id: 9, title: "Large Effervescent Tube", imageSrc: "./assets/images/products/tube1.webp", code: "TUBE-L-01",
      description: "Large capacity tube designed for effervescent tablets, featuring a moisture-proof cap with a desiccant to maintain product integrity. Perfect for vitamin C and electrolyte tablets.",
      specifications: [
          { label: "Tablet Capacity", value: "20 Tablets (25mm Dia)" }, { label: "Height Of Tube", value: "145 +/- 1 MM" },
          { label: "Tube Diameter", value: "29 +/- 0.5 MM" }, { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "large-tubes", featured: true
  },
  {
      id: 10, title: "Large Vitamin C Tube", imageSrc: "./assets/images/products/tube2.webp", code: "TUBE-L-02",
      description: "A premium large tube with an easy-to-open cap, specially designed for vitamin C tablets. Offers excellent protection against moisture and UV light.",
      specifications: [
          { label: "Tablet Capacity", value: "20 Tablets (25mm Dia)" }, { label: "Height Of Tube", value: "145 +/- 1 MM" },
          { label: "Tube Diameter", value: "29 +/- 0.5 MM" }, { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "large-tubes"
  },
  {
      id: 11, title: "Multivitamin Tablet Tube", imageSrc: "./assets/images/products/tube3.webp", code: "TUBE-L-03",
      description: "Sleek and tall tube for multivitamin tablets. The secure cap includes a desiccant silica gel to protect sensitive ingredients from humidity.",
      specifications: [
          { label: "Tablet Capacity", value: "20 Tablets (25mm Dia)" }, { label: "Height Of Tube", value: "145 +/- 1 MM" },
          { label: "Tube Diameter", value: "29 +/- 0.5 MM" }, { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "large-tubes"
  },
  {
      id: 13, title: "Effervescent Energy Tube", imageSrc: "./assets/images/products/tube5.webp", code: "TUBE-L-04",
      description: "A vibrant tube designed for energy-boosting effervescent tablets. The robust construction and reliable sealing cap make it perfect for an active lifestyle.",
      specifications: [
          { label: "Tablet Capacity", value: "15 Tablets (25mm Dia)" }, { label: "Height Of Tube", value: "120 +/- 1 MM" },
          { label: "Tube Diameter", value: "29 +/- 0.5 MM" }, { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "large-tubes"
  },
  {
      id: 14, title: "Hydration Tablet Tube", imageSrc: "./assets/images/products/tube6.webp", code: "TUBE-L-05",
      description: "Designed for hydration and electrolyte tablets, this tube features a tamper-evident ring and a superior seal to guarantee product safety and freshness.",
      specifications: [
          { label: "Tablet Capacity", value: "10-12 Tablets (25mm Dia)" }, { label: "Height Of Tube", value: "98 +/- 1 MM" },
          { label: "Tube Diameter", value: "29 +/- 0.5 MM" }, { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "large-tubes"
  },
  {
      id: 15, title: "Probiotic Tablet Tube", imageSrc: "./assets/images/products/tube7.webp", code: "TUBE-L-06",
      description: "A specialized tube for probiotics and other sensitive supplements, featuring an advanced desiccant system within the cap for maximum moisture control.",
      specifications: [
          { label: "Tablet Capacity", value: "20 Tablets (25mm Dia)" }, { label: "Height Of Tube", value: "145 +/- 1 MM" },
          { label: "Tube Diameter", value: "29 +/- 0.5 MM" }, { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "large-tubes"
  },
  {
      id: 16, title: "Zinc Tablet Tube", imageSrc: "./assets/images/products/tube8.webp", code: "TUBE-L-07",
      description: "An economical and reliable tube for supplements like Zinc or Magnesium. The simple, effective design ensures product protection and ease of use for consumers.",
      specifications: [
          { label: "Tablet Capacity", value: "10 Tablets (25mm Dia)" }, { label: "Height Of Tube", value: "98 +/- 1 MM" },
          { label: "Tube Diameter", value: "29 +/- 0.5 MM" }, { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "large-tubes"
  },
  {
      id: 17, title: "Small Immune Booster Tube", imageSrc: "./assets/images/products/smtube1.webp", code: "TUBE-S-01",
      description: "Compact and portable tube perfect for immune booster tablets. The small size makes it ideal for travel or daily carry, with a secure cap to prevent moisture ingress.",
      specifications: [
          { label: "Tablet Capacity", value: "10 Tablets (18mm Dia)" }, { label: "Height Of Tube", value: "85 +/- 1 MM" },
          { label: "Tube Diameter", value: "22 +/- 0.5 MM" }, { label: "Wall Thickness", value: "0.9 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "small-tubes", featured: true
  },
  {
      id: 18, title: "Small Antioxidant Tube", imageSrc: "./assets/images/products/smtube2.webp", code: "TUBE-S-02",
      description: "A small, discreet tube designed for antioxidant supplements. Features a sleek design and a highly effective desiccant cap to protect sensitive ingredients.",
      specifications: [
          { label: "Tablet Capacity", value: "10 Tablets (18mm Dia)" }, { label: "Height Of Tube", value: "85 +/- 1 MM" },
          { label: "Tube Diameter", value: "22 +/- 0.5 MM" }, { label: "Wall Thickness", value: "0.9 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "small-tubes"
  },
  {
      id: 19, title: "Travel-Size Vitamin Tube", imageSrc: "./assets/images/products/smtube3.webp", code: "TUBE-S-03",
      description: "The perfect travel-sized tube for daily vitamins. Its slim profile fits easily into any bag, while the secure cap ensures your tablets stay dry and safe.",
      specifications: [
          { label: "Tablet Capacity", value: "10 Tablets (18mm Dia)" }, { label: "Height Of Tube", value: "85 +/- 1 MM" },
          { label: "Tube Diameter", value: "22 +/- 0.5 MM" }, { label: "Wall Thickness", value: "0.9 +/- 0.1 MM" },
          { label: "Cap Fitting", value: "Push-fit with Desiccant" }, { label: "Material", value: "Food-grade PP" }
      ],
      category: "tubes", subcategory: "small-tubes"
  },
  {
      id: 20, title: "Push-Fit Plastic Cap", imageSrc: "./assets/images/products/Cap.webp", code: "CAP-01",
      description: "High-quality push-fit cap with an integrated desiccant chamber, suitable for our effervescent tablet tubes. Features a secure snap-fit design that ensures a tight, moisture-proof seal.",
      specifications: [
          { label: "Fitment Diameter", value: "29 MM & 22 MM" }, { label: "Height", value: "18 +/- 0.5 MM" },
          { label: "Material", value: "LDPE/PP Plastic" }, { label: "Color Options", value: "Customizable" },
          { label: "Seal Type", value: "Snap-fit with Tamper-Evident Ring" }, { label: "Desiccant", value: "Silica Gel (1-2g)" }
      ],
      category: "caps", featured: true
  }
];

document.addEventListener("DOMContentLoaded", function () {
  // --- INITIALIZATION ---
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 50,
  });

  renderAllProducts();
  setupEventListeners();
  filterProductsByCategory("all");
});

// --- DYNAMIC RENDERING ---
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-product-id", product.id);
  card.setAttribute("data-category", product.category);
  if (product.subcategory) {
    card.setAttribute("data-subcategory", product.subcategory);
  }

  card.innerHTML = `
      <div class="product-image-container">
          <img src="${product.imageSrc}" alt="${product.title}" class="product-image" loading="lazy" />
      </div>
      <div class="product-info">
          <h2 class="product-title">${product.title}</h2>
      </div>
      <button class="quick-view-btn">Quick View</button>
  `;
  return card;
}

function renderAllProducts() {
  const grids = {
    featured: document.getElementById("featured-products-grid"),
    jars: document.getElementById("jars-grid"),
    largeTubes: document.getElementById("large-tubes-grid"),
    smallTubes: document.getElementById("small-tubes-grid"),
    caps: document.getElementById("caps-grid"),
  };

  // Clear all grids before populating
  for (const key in grids) {
    grids[key].innerHTML = "";
  }

  productsData.forEach((product) => {
    const productCard = createProductCard(product);

    // Add to featured grid if applicable
    if (product.featured) {
      grids.featured.appendChild(productCard.cloneNode(true));
    }

    // Add to specific category grid
    if (product.category === "jars") {
      grids.jars.appendChild(productCard);
    } else if (product.category === "caps") {
      grids.caps.appendChild(productCard);
    } else if (product.category === "tubes") {
      if (product.subcategory === "large-tubes") {
        grids.largeTubes.appendChild(productCard);
      } else if (product.subcategory === "small-tubes") {
        grids.smallTubes.appendChild(productCard);
      }
    }
  });

  // Add empty state message if a grid is empty
  for (const key in grids) {
      if (grids[key] && grids[key].children.length === 0) {
          grids[key].innerHTML = `
              <div class="empty-state">
                  <i class="fas fa-box-open"></i>
                  <h3>No Products Found</h3>
                  <p>There are no products available in this category yet.</p>
              </div>`;
      }
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Category filter buttons
  const categoryNav = document.querySelector(".category-nav");
  categoryNav.addEventListener("click", function (e) {
    if (e.target.classList.contains("category-btn")) {
      document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      filterProductsByCategory(e.target.dataset.category);
    }
  });

  // Product card and quick view clicks (Event Delegation)
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.addEventListener("click", function (e) {
    const card = e.target.closest(".product-card");
    if (card) {
      const productId = card.dataset.productId;
      showProductPopup(productId);
    }
  });

  // Popup close handlers
  const popupOverlay = document.querySelector(".popup-overlay");
  const closeBtn = document.querySelector(".popup-close-btn");
  closeBtn.addEventListener("click", hideProductPopup);
  popupOverlay.addEventListener("click", hideProductPopup);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.querySelector(".popup-container.popup-visible")) {
      hideProductPopup();
    }
  });

  // Back to top button
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    backToTopBtn.classList.toggle("visible", window.pageYOffset > 300);
  });
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- PAGE LOGIC ---
function filterProductsByCategory(category) {
  showLoading(true);
  const sections = document.querySelectorAll(".category-section");
  sections.forEach((section) => section.classList.add("hidden"));

  if (category === "all") {
    document.getElementById("all-section").classList.remove("hidden");
  } else {
    document.getElementById(`${category}-section`).classList.remove("hidden");
  }

  setTimeout(() => {
    AOS.refresh();
    showLoading(false);
  }, 300);
}

function showProductPopup(productId) {
  const product = productsData.find((p) => p.id == productId);
  if (!product) return;

  document.getElementById("popup-image").src = product.imageSrc;
  document.getElementById("popup-image").alt = product.title;
  document.getElementById("popup-title").textContent = product.title;
  document.getElementById("popup-code").textContent = `Product Code: ${product.code}`;
  document.getElementById("popup-description").textContent = product.description;

  const specTableBody = document.getElementById("spec-table-body");
  specTableBody.innerHTML = "";
  if(product.specifications && product.specifications.length > 0) {
      document.querySelector('.spec-table-container').style.display = 'block';
      product.specifications.forEach((spec) => {
          const row = `<tr><th>${spec.label}</th><td>${spec.value}</td></tr>`;
          specTableBody.innerHTML += row;
      });
  } else {
       document.querySelector('.spec-table-container').style.display = 'none';
  }

  document.querySelector(".popup-overlay").classList.add("popup-visible");
  document.querySelector(".popup-container").classList.add("popup-visible");
  document.body.style.overflow = "hidden";
}

function hideProductPopup() {
  document.querySelector(".popup-overlay").classList.remove("popup-visible");
  document.querySelector(".popup-container").classList.remove("popup-visible");
  document.body.style.overflow = "";
}

function showLoading(show) {
  const spinner = document.getElementById("loadingSpinner");
  spinner.style.display = show ? "flex" : "none";
}