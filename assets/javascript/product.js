
      // --- DATA FOR ALL 16 PRODUCTS ---
      const productsData = [
        {
          id: 1,
          title: "IML Supplement Container",
          imageSrc: "./assets/images/products/jar1.webp",
          code: "IML-01",
          description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1000 units" },
            { label: "Lead Time", value: "15-20 days" }
          ],
          category: "jars",
          featured: true
        },
        {
          id: 2,
          title: "Large Powder Container",
          imageSrc: "./assets/images/products/jar2.webp",
          code: "IML-02",
          description: "Our largest capacity container, ideal for bulk protein powders and nutritional products. Features a sturdy build and a wide mouth for easy scooping. Perfect for gym supplements and wholesale packaging.",
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
            { label: "Material", value: "Food-grade HDPE plastic" },
            { label: "MOQ", value: "500 units" },
            { label: "Lead Time", value: "10-15 days" }
          ],
          category: "jars",
          featured: true
        },
        {
          id: 3,
          title: "Chocolate Powder Jar",
          imageSrc: "./assets/images/products/jar3.webp",
          code: "IML-03",
          description: "A beautifully designed jar for premium chocolate-flavored powders and drink mixes. The IML label offers vibrant, full-color graphics. Perfect for health drinks, cocoa powders, and flavored supplements.",
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
            { label: "Material", value: "PET plastic" },
            { label: "MOQ", value: "2000 units" },
            { label: "Lead Time", value: "20-25 days" }
          ],
          category: "jars",
          featured: true
        },
        {
          id: 4,
          title: "Weight Management Tub",
          imageSrc: "./assets/images/products/jar4.webp",
          code: "WMT-01",
          description: "Sleek and modern tub designed specifically for weight management products. Features a wide opening for easy access and a secure lid to maintain product freshness. Ideal for meal replacements and diet supplements.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1500 units" },
            { label: "Lead Time", value: "18-22 days" }
          ],
          category: "jars"
        },
        {
          id: 5,
          title: "IML Supplement Container",
          imageSrc: "./assets/images/products/jar5.webp",
          code: "IML-01",
          description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1000 units" },
            { label: "Lead Time", value: "15-20 days" }
          ],
          category: "jars",
          featured: true
        },
        {
          id: 6,
          title: "Large Effervescent Tablet Tube",
          imageSrc: "./assets/images/products/jar6.webp",
          code: "LET-10",
          description: "Large capacity tube designed specifically for effervescent tablets. Features a moisture-proof design and secure cap to maintain product integrity. Perfect for vitamin C, electrolyte, and medicinal tablets.",
          specifications: [
            { label: "Capacity", value: "100 tablets" },
            { label: "Height", value: "200 +/- 2 MM" },
            { label: "Diameter", value: "60 +/- 0.5 MM" },
            { label: "Wall Thickness", value: "1.0 +/- 0.1 MM" },
            { label: "Cap Type", value: "Child-resistant" },
            { label: "Material", value: "Food-grade HDPE" },
            { label: "Weight", value: "45 +/- 2 GM" },
            { label: "MOQ", value: "2000 units" },
            { label: "Lead Time", value: "12-15 days" }
          ],
          category: "tubes",
          subcategory: "large-tubes",
          featured: true
        },
        {
          id: 7,
          title: "Large Vitamin C Tablet Tube",
          imageSrc: "./assets/images/products/jar7.webp",
          code: "LVT-15",
          description: "Premium large tube with child-resistant cap, specially designed for vitamin C tablets. Offers excellent protection against moisture and UV light. Features a transparent body for product visibility.",
          specifications: [
            { label: "Capacity", value: "80 tablets" },
            { label: "Height", value: "180 +/- 2 MM" },
            { label: "Diameter", value: "55 +/- 0.5 MM" },
            { label: "Wall Thickness", value: "0.9 +/- 0.1 MM" },
            { label: "Cap Type", value: "Child-resistant" },
            { label: "Material", value: "PET plastic" },
            { label: "Weight", value: "40 +/- 2 GM" },
            { label: "MOQ", value: "2500 units" },
            { label: "Lead Time", value: "15-18 days" }
          ],
          category: "tubes",
          subcategory: "large-tubes"
        },
        {
          id: 8,
          title: "Medium Cough Support Tablet Tube",
          imageSrc: "./assets/images/products/jar8.webp",
          code: "MCT-20",
          description: "Medium-sized tube perfect for cough and cold tablets. Features a secure screw-top cap and tamper-evident seal. The opaque design helps protect light-sensitive ingredients.",
          specifications: [
            { label: "Capacity", value: "50 tablets" },
            { label: "Height", value: "150 +/- 1 MM" },
            { label: "Diameter", value: "45 +/- 0.5 MM" },
            { label: "Wall Thickness", value: "0.8 +/- 0.1 MM" },
            { label: "Cap Type", value: "Screw-on" },
            { label: "Material", value: "PP plastic" },
            { label: "Weight", value: "30 +/- 1 GM" },
            { label: "MOQ", value: "3000 units" },
            { label: "Lead Time", value: "10-12 days" }
          ],
          category: "tubes",
          subcategory: "medium-tubes",
          featured: true
        },
        {
          id: 9,
          title: "Medium High-Potency Vitamin Tube",
          imageSrc: "./assets/images/products/tube1.webp",
          code: "MHV-10",
          description: "Medium tube designed for high-potency vitamins and supplements. Features a moisture-absorbing liner in the cap to extend product shelf life. The wide mouth allows for easy tablet access.",
          specifications: [
            { label: "Capacity", value: "60 tablets" },
            { label: "Height", value: "140 +/- 1 MM" },
            { label: "Diameter", value: "50 +/- 0.5 MM" },
            { label: "Wall Thickness", value: "0.9 +/- 0.1 MM" },
            { label: "Cap Type", value: "Screw-on with liner" },
            { label: "Material", value: "HDPE plastic" },
            { label: "Weight", value: "35 +/- 1 GM" },
            { label: "MOQ", value: "2000 units" },
            { label: "Lead Time", value: "12-15 days" }
          ],
          category: "tubes",
          subcategory: "medium-tubes"
        },
        {
          id: 10,
          title: "IML Supplement Container",
          imageSrc: "./assets/images/products/tube2.webp",
          code: "IML-01",
          description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1000 units" },
            { label: "Lead Time", value: "15-20 days" }
          ],
          category: "jars",
          featured: true
        },
        {
          id: 11,
          title: "IML Supplement Container",
          imageSrc: "./assets/images/products/tube3.webp",
          code: "IML-01",
          description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1000 units" },
            { label: "Lead Time", value: "15-20 days" }
          ],
          category: "jars",
          featured: true
        },
        // {
        //   id: 12,
        //   title: "Small Immune Booster Tablet Tube",
        //   imageSrc: "./assets/images/products/tube4.webp",
        //   code: "SIT-25",
        //   description: "Compact and portable tube perfect for immune booster tablets. The small size makes it ideal for travel or daily carry. Features a secure flip-top cap for easy one-handed operation.",
        //   specifications: [
        //     { label: "Capacity", value: "30 tablets" },
        //     { label: "Height", value: "120 +/- 1 MM" },
        //     { label: "Diameter", value: "40 +/- 0.5 MM" },
        //     { label: "Wall Thickness", value: "0.7 +/- 0.1 MM" },
        //     { label: "Cap Type", value: "Flip-top" },
        //     { label: "Material", value: "PP plastic" },
        //     { label: "Weight", value: "25 +/- 1 GM" },
        //     { label: "MOQ", value: "5000 units" },
        //     { label: "Lead Time", value: "8-10 days" }
        //   ],
        //   category: "tubes",
        //   subcategory: "small-tubes",
        //   featured: true
        // },
        {
          id: 13,
          title: "Small Antioxidant Support Tube",
          imageSrc: "./assets/images/products/tube5.webp",
          code: "SAT-12",
          description: "Small tube designed for antioxidant supplements. Features a sleek design with a transparent window to view contents. The secure cap ensures product freshness and prevents spills.",
          specifications: [
            { label: "Capacity", value: "25 tablets" },
            { label: "Height", value: "110 +/- 1 MM" },
            { label: "Diameter", value: "38 +/- 0.5 MM" },
            { label: "Wall Thickness", value: "0.7 +/- 0.1 MM" },
            { label: "Cap Type", value: "Push-pull" },
            { label: "Material", value: "PET plastic" },
            { label: "Weight", value: "22 +/- 1 GM" },
            { label: "MOQ", value: "4000 units" },
            { label: "Lead Time", value: "10-12 days" }
          ],
          category: "tubes",
          subcategory: "small-tubes"
        },
        {
          id: 14,
          title: "Push-Fit Plastic Cap",
          imageSrc: "./assets/images/products/tube6.webp",
          code: "PFC-01",
          description: "High-quality push-fit cap suitable for various container sizes. Features a secure snap-fit design that ensures a tight seal while being easy to open. Made from durable, food-grade plastic.",
          specifications: [
            { label: "Diameter", value: "84 +/- 0.5 MM" },
            { label: "Height", value: "15 +/- 0.5 MM" },
            { label: "Material", value: "PP plastic" },
            { label: "Color Options", value: "White, Black, Clear" },
            { label: "Seal Type", value: "Snap-fit" },
            { label: "Weight", value: "8 +/- 0.5 GM" },
            { label: "MOQ", value: "5000 units" },
            { label: "Lead Time", value: "7-10 days" }
          ],
          category: "caps",
          featured: true
        },
        {
          id: 15,
          title: "Screw-On Container Cap",
          imageSrc: "./assets/images/products/tube7.webp",
          code: "SOC-02",
          description: "Durable screw-on cap with integrated liner for an airtight seal. Designed to fit standard container openings. The ergonomic design provides excellent grip for easy opening and closing.",
          specifications: [
            { label: "Diameter", value: "110 +/- 0.5 MM" },
            { label: "Height", value: "25 +/- 0.5 MM" },
            { label: "Material", value: "HDPE plastic" },
            { label: "Liner Material", value: "Foam PE" },
            { label: "Thread Type", value: "Continuous" },
            { label: "Weight", value: "15 +/- 1 GM" },
            { label: "MOQ", value: "3000 units" },
            { label: "Lead Time", value: "10-12 days" }
          ],
          category: "caps"
        },
        {
          id: 16,
          title: "Sealed Lid with Gasket",
          imageSrc: "./assets/images/products/tube8.webp",
          code: "SLG-03",
          description: "Premium lid with integrated silicone gasket for superior airtight sealing. Ideal for products requiring maximum freshness protection. The wide flange design ensures a perfect fit every time.",
          specifications: [
            { label: "Diameter", value: "90 +/- 0.5 MM" },
            { label: "Height", value: "20 +/- 0.5 MM" },
            { label: "Material", value: "PP plastic" },
            { label: "Gasket Material", value: "Food-grade silicone" },
            { label: "Seal Type", value: "Compression" },
            { label: "Weight", value: "12 +/- 0.5 GM" },
            { label: "MOQ", value: "4000 units" },
            { label: "Lead Time", value: "12-15 days" }
          ],
          category: "caps",
          featured: true
        },
        {
          id: 17,
          title: "IML Supplement Container",
          imageSrc: "./assets/images/products/smtube1.webp",
          code: "IML-01",
          description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1000 units" },
            { label: "Lead Time", value: "15-20 days" }
          ],
          category: "jars",
          featured: true
        },
        {
          id: 18,
          title: "IML Supplement Container",
          imageSrc: "./assets/images/products/smtube2.webp",
          code: "IML-01",
          description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1000 units" },
            { label: "Lead Time", value: "15-20 days" }
          ],
          category: "jars",
          featured: true
        },
        {
          id: 19,
          title: "IML Supplement Container",
          imageSrc: "./assets/images/products/smtube3.webp",
          code: "IML-01",
          description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1000 units" },
            { label: "Lead Time", value: "15-20 days" }
          ],
          category: "jars",
          featured: true
        },
        {
          id: 20,
          title: "IML Supplement Container",
          imageSrc: "./assets/images/products/cap.webp",
          code: "IML-01",
          description: "A versatile and durable container perfect for powders and supplements. Features In-Mould Labeling (IML) for a seamless finish and a secure push-fitting cap. Ideal for protein powders, nutritional supplements, and health products.",
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
            { label: "Material", value: "Food-grade PP plastic" },
            { label: "MOQ", value: "1000 units" },
            { label: "Lead Time", value: "15-20 days" }
          ],
          category: "jars",
          featured: true
        },
      ];

      // --- INITIALIZATION ---
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize AOS animation library
        AOS.init({ 
          duration: 800, 
          easing: "ease-in-out", 
          once: true, 
          offset: 50,
          disable: window.innerWidth < 768
        });

        // Set up featured products grid
        setupFeaturedProducts();
        
        // Set up event listeners
        setupEventListeners();
        
        // Hide all category sections except "all" initially
        hideAllCategorySections();
        document.getElementById('all-section').style.display = 'block';
      });

      // --- FEATURED PRODUCTS SETUP ---
      function setupFeaturedProducts() {
        const featuredGrid = document.getElementById('featured-products-grid');
        const featuredProducts = productsData.filter(product => product.featured);
        
        if (featuredProducts.length === 0) {
          featuredGrid.innerHTML = `
            <div class="empty-state">
              <i class="fas fa-box-open"></i>
              <h3>No Featured Products</h3>
              <p>Currently there are no featured products available.</p>
            </div>
          `;
          return;
        }
        
        featuredGrid.innerHTML = '';
        
        featuredProducts.forEach(product => {
          const productCard = createProductCard(product);
          featuredGrid.appendChild(productCard);
        });
      }

      // --- PRODUCT CARD CREATION ---
      function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', product.id);
        card.setAttribute('data-category', product.category);
        if (product.subcategory) {
          card.setAttribute('data-subcategory', product.subcategory);
        }
        
        card.innerHTML = `
          <div class="product-image-container">
            <img src="${product.imageSrc}" alt="${product.title}" class="product-image" />
          </div>
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
          </div>
          <button class="quick-view-btn">Quick View</button>
        `;
        
        // Add animation attributes if not in featured grid
        if (!product.featured) {
          card.setAttribute('data-aos', 'fade-up');
        }
        
        return card;
      }

      // --- EVENT LISTENERS SETUP ---
      function setupEventListeners() {
        // Product card click handlers
        setupProductCardInteractions();
        
        // Category filter buttons
        setupCategoryFilters();
        
        // Popup close handlers
        setupPopupCloseHandlers();
        
        // Back to top button
        setupBackToTopButton();
        
        // Quick view buttons
        setupQuickViewButtons();
      }

      function setupProductCardInteractions() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
          card.addEventListener('click', function(e) {
            // Don't trigger if clicking the quick view button
            if (!e.target.classList.contains('quick-view-btn')) {
              const productId = this.dataset.productId;
              showProductPopup(productId);
            }
          });
        });
      }

      function setupQuickViewButtons() {
        document.addEventListener('click', function(e) {
          if (e.target.classList.contains('quick-view-btn')) {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.productId;
            showProductPopup(productId);
          }
        });
      }

      function setupCategoryFilters() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        
        categoryBtns.forEach(btn => {
          btn.addEventListener('click', function() {
            // Update active state of buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterProductsByCategory(category);
          });
        });
      }

      function setupPopupCloseHandlers() {
        const popupOverlay = document.querySelector('.popup-overlay');
        const closeBtn = document.querySelector('.popup-close-btn');
        
        closeBtn.addEventListener('click', hideProductPopup);
        popupOverlay.addEventListener('click', hideProductPopup);
        
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && document.querySelector('.popup-container.popup-visible')) {
            hideProductPopup();
          }
        });
      }

      function setupBackToTopButton() {
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', function() {
          if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
          } else {
            backToTopBtn.classList.remove('visible');
          }
        });
        
        backToTopBtn.addEventListener('click', function() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }

      // --- PRODUCT FILTERING ---
      function filterProductsByCategory(category) {
        // Show loading spinner
        showLoading(true);
        
        // Hide all category sections initially
        hideAllCategorySections();
        
        if (category === 'all') {
          document.getElementById('all-section').style.display = 'block';
        } else {
          document.getElementById(`${category}-section`).style.display = 'block';
        }
        
        // Scroll to the top of the section
        setTimeout(() => {
          window.scrollTo({
            top: document.querySelector('.category-nav').offsetTop - 20,
            behavior: 'smooth'
          });
          showLoading(false);
        }, 300);
      }

      function hideAllCategorySections() {
        document.querySelectorAll('.category-section').forEach(section => {
          section.style.display = 'none';
        });
      }

      // --- PRODUCT POPUP ---
      function showProductPopup(productId) {
        // Find the product data
        const product = productsData.find(p => p.id == productId);
        if (!product) {
          console.error('Product not found for ID:', productId);
          return;
        }

        // Get popup elements
        const popupImage = document.getElementById('popup-image');
        const popupTitle = document.getElementById('popup-title');
        const popupCode = document.getElementById('popup-code');
        const popupDescription = document.getElementById('popup-description');
        const specTableBody = document.getElementById('spec-table-body');

        // Populate popup with product data
        popupImage.src = product.imageSrc;
        popupImage.alt = product.title;
        popupTitle.textContent = product.title;
        popupCode.textContent = `Product Code: ${product.code}`;
        popupDescription.textContent = product.description;

        // Build specification table
        specTableBody.innerHTML = '';
        product.specifications.forEach(spec => {
          const row = document.createElement('tr');
          row.innerHTML = `<th>${spec.label}</th><td>${spec.value}</td>`;
          specTableBody.appendChild(row);
        });

        // Show popup
        document.querySelector('.popup-overlay').classList.add('popup-visible');
        document.querySelector('.popup-container').classList.add('popup-visible');
        document.body.style.overflow = 'hidden';
      }

      function hideProductPopup() {
        document.querySelector('.popup-overlay').classList.remove('popup-visible');
        document.querySelector('.popup-container').classList.remove('popup-visible');
        document.body.style.overflow = '';
      }

      // --- UTILITY FUNCTIONS ---
      function showLoading(show) {
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.display = show ? 'flex' : 'none';
      }

      // Handle window resize to disable AOS on mobile
      window.addEventListener('resize', function() {
        AOS.refresh();
        if (window.innerWidth < 768) {
          AOS.init({ disable: true });
        } else {
          AOS.init({ disable: false });
        }
      });
 