// --- DATA FOR ALL 16 PRODUCTS ---
const productsData = [
  {
    id: 1,
    title: "IML Supplement Container",
    imageSrc: "./assets/images/products/product1.webp",
    code: "IML-01",
    description:
      "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap.",
    specifications: [
      { label: "Over Flow Volume", value: "560 +/- 20 ML" },
      { label: "Height Of Container", value: "114 +/- 1 MM" },
      { label: "Neck Size", value: "84 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "82 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "0.8 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting" },
      { label: "Label Type", value: "Label & IML" },
      { label: "Weight Of Container (With Cap)", value: "38 +/- 2 GM" },
      { label: "Powder Volume (Approx)", value: "200 To 250 GM" },
    ],
  },
  {
    id: 2,
    title: "Large Powder Container",
    imageSrc: "./assets/images/products/product2.webp",
    code: "IML-02",
    description:
      "Our largest capacity container, ideal for bulk protein powders and nutritional products. Features a sturdy build and a wide mouth for easy scooping.",
    specifications: [
      { label: "Over Flow Volume", value: "1200 +/- 30 ML" },
      { label: "Height Of Container", value: "180 +/- 2 MM" },
      { label: "Neck Size", value: "110 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "112 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.2 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Screw-on" },
      { label: "Label Type", value: "IML" },
      { label: "Weight Of Container (With Cap)", value: "85 +/- 5 GM" },
      { label: "Powder Volume (Approx)", value: "500 To 600 GM" },
    ],
  },
  {
    id: 3,
    title: "Chocolate Powder Jar",
    imageSrc: "./assets/images/products/product3.webp",
    code: "IML-03",
    description:
      "A beautifully designed jar for premium chocolate-flavored powders and drink mixes. The IML label offers vibrant, full-color graphics.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  // Adding more product data... for demonstration, we will vary some values
  {
    id: 4,
    title: "Weight Management Tub",
    imageSrc: "./assets/images/products/product4.webp",
    code: "WMT-01",
    description: "Sleek tub for weight management products.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 5,
    title: "Fat Cutter Supplement Jar",
    imageSrc: "./assets/images/products/product5.webp",
    code: "FCS-02",
    description: "Compact and effective packaging for fat-cutter supplements.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 6,
    title: "Effervescent Tablet Tube",
    imageSrc: "./assets/images/products/product6.webp",
    code: "ETT-10",
    description:
      "Protective tube for effervescent tablets with a desiccant cap.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 7,
    title: "Vitamin C Tablet Tube",
    imageSrc: "./assets/images/products/product7.webp",
    code: "VTC-15",
    description: "Brightly labeled tube for Vitamin C supplements.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 8,
    title: "Cough Support Tablet Tube",
    imageSrc: "./assets/images/products/product8.webp",
    code: "CST-20",
    description: "Secure packaging for cough and cold remedies.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 9,
    title: "High-Potency Vitamin Tube",
    imageSrc: "./assets/images/products/product9.webp",
    code: "HPV-10",
    description: "Premium tube for high-potency vitamins.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 10,
    title: "Digestive Health Jar",
    imageSrc: "./assets/images/products/product10.webp",
    code: "DHJ-05",
    description: "Airtight jar to preserve digestive health powders.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 11,
    title: "Probiotic Brewing Aid Jar",
    imageSrc: "./assets/images/products/product11.webp",
    code: "PBA-01",
    description: "Specialized jar for fermentation and brewing aids.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 12,
    title: "Immune Booster Tablet Tube",
    imageSrc: "./assets/images/products/product12.webp",
    code: "IBT-25",
    description: "Large capacity tube for immune-boosting tablets.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 13,
    title: "Antioxidant Support Tube",
    imageSrc: "./assets/images/products/product13.webp",
    code: "AST-12",
    description: "Sleek tube for antioxidant supplements.",
    specifications: [
     { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 14,
    title: "Compact Powder Container",
    imageSrc: "./assets/images/products/product1.webp",
    code: "CPC-01",
    description:
      "A smaller version of our IML container, perfect for travel sizes.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 15,
    title: "Pet Food Container",
    imageSrc: "./assets/images/products/product2.webp",
    code: "PFC-01",
    description: "Durable and safe container for dry pet food and treats.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
  {
    id: 16,
    title: "Protein Isolate Jar",
    imageSrc: "./assets/images/products/product3.webp",
    code: "PIJ-01",
    description: "Professional jar for pure protein isolate powders.",
    specifications: [
      { label: "Over Flow Volume", value: "750 +/- 20 ML" },
      { label: "Height Of Container", value: "150 +/- 1 MM" },
      { label: "Neck Size", value: "90 +/- 0.5 MM" },
      { label: "Maximum Dia Of Container", value: "95 +/- 0.5 MM" },
      { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
      { label: "Cap Fitting", value: "Push fitting with seal" },
      { label: "Label Type", value: "Full-wrap IML" },
      { label: "Weight Of Container (With Cap)", value: "55 +/- 3 GM" },
      { label: "Powder Volume (Approx)", value: "300 To 350 GM" },
    ],
  },
];

// --- POPUP SCRIPT ---
AOS.init({ duration: 800, easing: "ease-in-out", once: true, offset: 50 });

const productCards = document.querySelectorAll(".product-card");
const popupOverlay = document.querySelector(".popup-overlay");
const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".popup-close-btn");

// Get references to all elements inside the popup that need to be updated
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupCode = document.getElementById("popup-code");
const popupDescription = document.getElementById("popup-description");
const specTableBody = document.getElementById("spec-table-body");

function showPopup(productId) {
  // Find the product data using the ID from the clicked card
  const product = productsData.find((p) => p.id == productId);
  if (!product) {
    console.error("Product not found for ID:", productId);
    return;
  }

  // --- Populate the popup with the product's data ---
  popupImage.src = product.imageSrc;
  popupImage.alt = product.title;
  popupTitle.textContent = product.title;
  popupCode.textContent = `Product Code: ${product.code}`;
  popupDescription.textContent = product.description;

  // --- Dynamically build the specification table ---
  // First, clear any old rows from the table
  specTableBody.innerHTML = "";

  // Then, create and append a new row for each specification
  product.specifications.forEach((spec) => {
    const row = document.createElement("tr");
    row.innerHTML = `<th>${spec.label}</th><td>${spec.value}</td>`;
    specTableBody.appendChild(row);
  });

  // Make the popup visible
  popupOverlay.classList.add("popup-visible");
  popupContainer.classList.add("popup-visible");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function hidePopup() {
  popupOverlay.classList.remove("popup-visible");
  popupContainer.classList.remove("popup-visible");
  document.body.style.overflow = ""; // Restore background scrolling
}

// --- Event Listeners ---
productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const productId = card.dataset.productId;
    showPopup(productId);
  });
});

closeBtn.addEventListener("click", hidePopup);
popupOverlay.addEventListener("click", hidePopup);

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    popupContainer.classList.contains("popup-visible")
  ) {
    hidePopup();
  }
});


