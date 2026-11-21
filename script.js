/* ==========================================================================
   𝟜 𝔽𝔸𝕊𝕃 — PREMIUM MARKET JAVASCRIPT
   Barcha dinamik xususiyatlar, savat, to'lov, mahsulotlar va interaktiv rejim
   ========================================================================== */

// 1. Asosiy doimiy qiymatlar (Konstantalar)
const DELIVERY_FEE = 50000;              // Standart yetkazib berish: 50 000 so'm
const FREE_DELIVERY_THRESHOLD = 150000;   // 150 000 so'mdan oshsa — yetkazish BEPUL!

// 2. Mahsulotlar to'plami (4 FASL bo'yicha saralangan 30 ta sarhil mahsulot)
const products = [
    // ================= 🌸 BAHOR FASLI NE'MATLARI (7 TA) =================
    { 
        id: 1, 
        name: "Sarhil Bahorgi Ko'katlar to'plami (1 bog')", 
        price: 12000, 
        category: "Oziq-ovqat", 
        season: "Bahor",
        unit: "1 bog' (250g)", 
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80", 
        rating: 4.9, 
        reviews: 84, 
        badge: "Yangi Uzilgan", 
        desc: "Ismaloq, yalpiz va rayhon — bahoriy ko'k somsa, chuchvara va barra salatlar uchun yangi uzilgan barra ko'katlar." 
    },
    
    { 
        id: 3, 
        name: "Sarhil Shirin Qulupnay (500g)", 
        price: 38000, 
        category: "Shirinlik", 
        season: "Bahor",
        unit: "500 gr", 
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80", 
        rating: 5.0, 
        reviews: 118, 
        badge: "Yangi Mavsum", 
        desc: "Xushbo'y, shirin va sara uzilgan ilk bahoriy issiqxona qulupnayi. Vitamin C ga nihoyatda boy." 
    },
    { 
        id: 4, 
        name: "Yangi Bahorgi Bodring (1 kg)", 
        price: 18000, 
        category: "Oziq-ovqat", 
        season: "Bahor",
        unit: "1 kg", 
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&q=80", 
        rating: 4.8, 
        reviews: 67, 
        badge: "Barra & Qarsildoq", 
        desc: "Yupqa po'stli, xushbo'y va suvli bahoriy bodring. Bahorgi vitaminli salatlar uchun ayni muddao." 
    },
    { 
        id: 5, 
        name: "Yalpizli va Rayhonli Ko'k Choy 1L", 
        price: 12000, 
        category: "Ichimlik", 
        season: "Bahor",
        unit: "1 litr", 
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80", 
        rating: 4.8, 
        reviews: 73, 
        badge: "Tetiklik", 
        desc: "Bahor nafasi ufurib turgan barra yalpiz va rayhon damlamasi bilan boyitilgan tabiiy xushbo'y ko'k choy." 
    },
    { 
        id: 6, 
        name: "Bahorgi Yangi Qo'zi Go'shti (1 kg)", 
        price: 140000, 
        category: "Oziq-ovqat", 
        season: "Bahor",
        unit: "1 kg", 
        image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&q=80", 
        rating: 4.9, 
        reviews: 95, 
        badge: "Halol & Yumshoq", 
        desc: "Bahor mavsumining mayin va mazali yosh qo'zichoq go'shti. Bahoriy sho'rva va dimlama uchun juda munosib." 
    },

    // ================= ☀️ YOZ FASLI SALQINLIGI (8 TA) =================
    { 
        id: 8, 
        name: "Muzdek Shirin Tarvuz (Mirzacho'l, ~6kg)", 
        price: 35000, 
        category: "Shirinlik", 
        season: "Yoz",
        unit: "1 dona (~6 kg)", 
        image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600&q=80", 
        rating: 5.0, 
        reviews: 210, 
        badge: "Muzdek & Asal", 
        desc: "Yoz oftobida yetilgan shirin, lahm va qizil Mirzacho'l tarvuzi. Issiq kunda chanqoqni bir zumda bosadi." 
    },
    { 
        id: 9, 
        name: "Banan (1 kg)", 
        price: 40000, 
        category: "Shirinlik", 
        season: "Yoz",
        unit: "1 dona (~4 kg)", 
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80", 
        rating: 4.9, 
        reviews: 175, 
        badge: "Xushbo'y Novvot", 
        desc: "Haqiqiy o'zbek polizining gultoji — tilni yorar darajada shirin, xushbo'y va sharbatga to'la obi novvot qovun." 
    },
    { 
        id: 10, 
        name: "Coca-Cola Original Muzdek 1,5L", 
        price: 16000, 
        category: "Ichimlik", 
        season: "Yoz",
        unit: "1 dona (1.5L)", 
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80", 
        rating: 4.9, 
        reviews: 142, 
        badge: "Muzdek Tetiklik", 
        desc: "Yozning eng qaynoq kunlarida muzdek ichiladigan klassik gazlangan salqin ichimlik." 
    },
    { 
        id: 11, 
        name: "Pepsi Muzdek Salqin 1,5L", 
        price: 16000, 
        category: "Ichimlik", 
        season: "Yoz",
        unit: "1 dona (1.5L)", 
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&q=80", 
        rating: 4.8, 
        reviews: 108, 
        badge: "Klassik Tanlov", 
        desc: "Muzdek tetiklashtiruvchi, yozgi bayram va do'stlar davrasining ajralmas ichimligi." 
    },
    { 
        id: 12, 
        name: "Qaymoqli Plombir Muzqaymoq (To'plam 4 dona)", 
        price: 28000, 
        category: "Shirinlik", 
        season: "Yoz",
        unit: "4 dona to'plam", 
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80", 
        rating: 5.0, 
        reviews: 164, 
        badge: "Rohatbaxsh", 
        desc: "Tabiiy qaymoq va quyuq sutdan tayyorlangan muzdek klassik plombir. Yoz jaziramasida eng yaxshi tansiq lazzat." 
    },
    { 
        id: 13, 
        name: "Sarhil  O'rik (1 kg)", 
        price: 25000, 
        category: "Shirinlik", 
        season: "Yoz",
        unit: "1 kg", 
        image: "https://www.spot.uz/media/img/2019/01/zxIUdE15474715033443_l.jpg", 
        rating: 4.9, 
        reviews: 93, 
        badge: "Oftob Mevalari", 
        desc: "Farg'ona bog'larida yetilgan oftob taftiga to'la asaldek shirin shaftoli va sarxil o'riklar." 
    },
    { 
        id: 14, 
        name: "Muzdek Tog' Mineral Suvi 1,5L", 
        price: 5000, 
        category: "Ichimlik", 
        season: "Yoz",
        unit: "1.5 litr", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYp4Do_pafFNVoM3Ls8mMFPlydtdLIQsZCA63rLoiMOVfWR_d3d-VnIs&s=10", 
        rating: 4.9, 
        reviews: 110, 
        badge: "Sof Buloq", 
        desc: "Yozgi jaziramada tananing mineral muvozanatini tiklovchi muzdek sof tog' buloq suvi." 
    },
    { 
        id: 15, 
        name: "Sprite Muzdek Laym 1,5L", 
        price: 15000, 
        category: "Ichimlik", 
        season: "Yoz",
        unit: "1 dona (1.5L)", 
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80", 
        rating: 4.7, 
        reviews: 79, 
        badge: "Laym Nafasi", 
        desc: "Yozgi issiqda laym va limonning muzdek sersalqin shabadasi bilan chanqovni bosadi." 
    },

    // ================= 🍂 KUZ FASLI TO'KINLIGI (7 TA) =================
    { 
        id: 16, 
        name: "Shirin Quva Anori (1 kg)", 
        price: 28000, 
        category: "Shirinlik", 
        season: "Kuz",
        unit: "1 kg", 
        image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=600&q=80", 
        rating: 5.0, 
        reviews: 135, 
        badge: "Oltin Kuz Hosili", 
        desc: "Quvaning mashhur la'l donador shirin anori. Qon bosimini me'yorlashtiruvchi va immunitetni kuchaytiruvchi ne'mat." 
    },
    { 
        id: 17, 
        name: "Oq va Qora Husayni Uzumi (1 kg)", 
        price: 22000, 
        category: "Shirinlik", 
        season: "Kuz",
        unit: "1 kg", 
        image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=600&q=80", 
        rating: 4.9, 
        reviews: 112, 
        badge: "Shirin Shirador", 
        desc: "Kuzning oftobli kunlarida yetilgan, uzun donali va qarsildoq barra Husayni uzumi." 
    },
    { 
        id: 18, 
        name: "Yangi Qong'ir Yong'oq (500g)", 
        price: 45000, 
        category: "Shirinlik", 
        season: "Kuz",
        unit: "500 gr", 
        image: "https://kun.uz/_next/image?url=https%3A%2F%2Fstorage.kun.uz%2Fsource%2F1%2FAnG6uLgkiCVrYeFKWrn0x7hjQ_YDKuOl.jpg&w=1200&q=75", 
        rating: 4.8, 
        reviews: 86, 
        badge: "Yangi Hosil", 
        desc: "Bustonliq tog'laridan yangi terilgan toza yong'oq mag'zi. Miya faoliyati va quvvat uchun beqiyos." 
    },
    { 
        id: 19, 
        name: "Oshbop Shirin Qovoq (1 dona ~3kg)", 
        price: 20000, 
        category: "Oziq-ovqat", 
        season: "Kuz",
        unit: "1 dona (~3 kg)", 
        image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=600&q=80", 
        rating: 4.8, 
        reviews: 64, 
        badge: "To'kin Dasturxon", 
        desc: "Kuzgi qovoqli manti, somsa va quyuq sho'rvalar uchun tillarang, shirin va to'yimli sara qovoq." 
    },
    { 
        id: 20, 
        name: "Guruch Lazer (A'lo nav, 1 kg)", 
        price: 24000, 
        category: "Oziq-ovqat", 
        season: "Kuz",
        unit: "1 kg", 
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80", 
        rating: 5.0, 
        reviews: 188, 
        badge: "Kuzgi Oshbop", 
        desc: "Xorazmning yangi kuzgi hosilidan olingan Lazer guruchi. Haqiqiy to'y oshi uchun maxsus tozalangan." 
    },
    { 
        id: 21, 
        name: "Ergonomik Maktab Ryukzaki", 
        price: 145000, 
        category: "O'quv", 
        season: "Kuz",
        unit: "1 dona", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80", 
        rating: 4.9, 
        reviews: 94, 
        badge: "Kuzgi O'quv Mavsumi", 
        desc: "Yangi o'quv yili boshlanishiga bag'ishlangan, suv o'tkazmas va qulay ortopedik maktab sumkasi." 
    },
    { 
        id: 22, 
        name: "Kuzgi Maktab To'plami (Daftar & Ruchkalar)", 
        price: 22000, 
        category: "O'quv", 
        season: "Kuz",
        unit: "to'plam", 
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80", 
        rating: 4.8, 
        reviews: 104, 
        badge: "Bestseller", 
        desc: "Kuzgi o'quv mavsumi uchun 5 ta qalin daftar, 5 ta yumshoq gelli ruchka va sifatli o'chirg'ich." 
    },

    // ================= ❄️ QISH FASLI ILIQLIGI (8 TA) =================
    { 
        id: 23, 
        name: "Mol go'shti (Sarhil Lahm, 1 kg)", 
        price: 150000, 
        category: "Oziq-ovqat", 
        season: "Qish",
        unit: "1 kg", 
        image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&q=80", 
        rating: 5.0, 
        reviews: 215, 
        badge: "Qishki Quvvat", 
        desc: "Qishning sovuq kunlarida issiq sho'rva, dimlama va qovurdoq uchun yangi so'yilgan sarhil lahm mol go'shti." 
    },
    { 
        id: 24, 
        name: "Issiq Zanjabil va Asalli Damlama (250g)", 
        price: 32000, 
        category: "Ichimlik", 
        season: "Qish",
        unit: "250 gr", 
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80", 
        rating: 5.0, 
        reviews: 129, 
        badge: "Immunitet & Qaynoq", 
        desc: "Zanjabil, limon, tog' gullari va asal uyg'unligi. Qishki shamollashlarning oldini oladi va tanani isitadi." 
    },
    { 
        id: 25, 
        name: "Marokash Shirin Mandarini (1 kg)", 
        price: 22000, 
        category: "Shirinlik", 
        season: "Qish",
        unit: "1 kg", 
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=600&q=80", 
        rating: 4.9, 
        reviews: 182, 
        badge: "Yangi Yil Kayfiyati", 
        desc: "Qish mavsumining ramzi — shirin, danaksiz, xushbo'y va oson archiladigan sarhil mandarin." 
    },
    { 
        id: 26, 
        name: "Sitrus Shirintoy Apelsin (1 kg)", 
        price: 18000, 
        category: "Shirinlik", 
        season: "Qish",
        unit: "1 kg", 
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=600&q=80", 
        rating: 4.8, 
        reviews: 97, 
        badge: "Vitamin C Bombasi", 
        desc: "Qishning sovuq kunlarida quvvat beruvchi, suvli va quyosh ta'miga ega sitrus apelsin." 
    },
    { 
        id: 27, 
        name: "Issiq Tandir Non (Sedanalik, 1 dona)", 
        price: 5000, 
        category: "Oziq-ovqat", 
        season: "Qish",
        unit: "1 dona", 
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", 
        rating: 5.0, 
        reviews: 310, 
        badge: "Qaynoq Tandirdan", 
        desc: "Tandirdan yangi uzilgan, xushbo'y sedanalik issiq non. Qishki dasturxonning ko'rki." 
    },
    { 
        id: 28, 
        name: "Sarhil Quritilgan Mevalar to'plami (500g)", 
        price: 36000, 
        category: "Shirinlik", 
        season: "Qish",
        unit: "500 gr", 
        image: "https://ecdn6-nc.globalso.com/upload/p/2392/image_other/2026-01/freeze-dried-strawberries-3.jpg", 
        rating: 4.9, 
        reviews: 91, 
        badge: "Tabiiy Kompotbop", 
        desc: "Qandak o'rik turshagi, qora mayiz va quritilgan olma. Qishda issiq vitaminli kompotlar uchun a'lo." 
    },
    { 
        id: 29, 
        name: "Quyuq Qaynoq Shokolad & Kakao (200g)", 
        price: 34000, 
        category: "Ichimlik", 
        season: "Qish",
        unit: "200 gr", 
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&q=80", 
        rating: 4.9, 
        reviews: 83, 
        badge: "Qishki Isituvchi", 
        desc: "Haqiqiy elit Belgiya kakaosidan tayyorlangan xushbo'y issiq shokolad. Qishki oqshomlarga huzur baxsh etadi." 
    },
    { 
        id: 30, 
        name: "Tabiy Tog' Asali", 
        price: 55000, 
        category: "Shirinlik", 
        season: "Qish",
        unit: "500 gr", 
        
    
        image: "https://frankfurt.apollo.olxcdn.com/v1/files/xvg18jnnzkrp3-UZ/image;s=1000x700", 
        rating: 5.0, 
        reviews: 147, 
        badge: "100% Shifobaxsh", 
        desc: "Qishki qahratonda tanani quvvatga to'ldiruvchi, tog' asali va sara yong'oqlar qorishmasidan tayyorlangan tabiiy shifo." 
    }
];

// 3. Ilova holati (State Management)
let cart = JSON.parse(localStorage.getItem("4fasl_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("4fasl_favs")) || [];
let currentCategory = "Hammasi";
let currentSeason = "Hammasi";
let searchQuery = "";
let currentSort = "default";
let onlyFavorites = false;
let appliedPromo = null; // { code: '4FASL', discountPercent: 10 }

// Fasl belgisi yordamchisi
function getSeasonIcon(season) {
    switch (season) {
        case "Bahor": return "🌸";
        case "Yoz": return "☀️";
        case "Kuz": return "🍂";
        case "Qish": return "❄️";
        default: return "✨";
    }
}

// 4. Mahsulotlarni chizish (Render Products)
function renderProducts() {
    const gridContainer = document.getElementById("products-grid");
    if (!gridContainer) return;
    
    gridContainer.innerHTML = "";
    let visibleList = products.filter(item => {
        const matchesSeason = (currentSeason === "Hammasi" || item.season === currentSeason);
        const matchesCategory = (currentCategory === "Hammasi" || item.category === currentCategory);
        const q = searchQuery.toLowerCase();
        const matchesSearch = item.name.toLowerCase().includes(q) || 
                              item.category.toLowerCase().includes(q) ||
                              (item.season && item.season.toLowerCase().includes(q)) ||
                              (item.desc && item.desc.toLowerCase().includes(q)) ||
                              (item.badge && item.badge.toLowerCase().includes(q));
        const isFavorite = favorites.includes(item.id);
        const matchesFav = (!onlyFavorites || isFavorite);
        return matchesSeason && matchesCategory && matchesSearch && matchesFav;
    });

    // Saralash
    if (currentSort === "price-low") {
        visibleList.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
        visibleList.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating") {
        visibleList.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === "name") {
        visibleList.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Natijalar sonini yangilash
    const countEl = document.getElementById("results-count");
    if (countEl) {
        let labelParts = [];
        if (currentSeason !== "Hammasi") labelParts.push(`${getSeasonIcon(currentSeason)} ${currentSeason}`);
        if (currentCategory !== "Hammasi") labelParts.push(currentCategory);
        if (onlyFavorites) labelParts.push("Sevimlilar");
        
        if (labelParts.length > 0) {
            countEl.textContent = `${labelParts.join(" • ")}: ${visibleList.length} ta mahsulot (jami 30 tadan)`;
        } else {
            countEl.textContent = `Barcha 4 fasl: ${visibleList.length} ta sarhil mahsulot`;
        }
    }

    if (visibleList.length === 0) {
        gridContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🍃</div>
                <h3>Hech qanday mahsulot topilmadi</h3>
                <p>Tanlangan mezon yoki qidiruv bo'yicha mahsulot topilmadi. Filtrlarni qayta o'rnating.</p>
                <button class="btn-reset-filters" onclick="resetFilters()">Filtrlarni tozalash</button>
            </div>
        `;
        return;
    }

    visibleList.forEach((item, index) => {
        const isFavorite = favorites.includes(item.id);
        const cartItem = cart.find(c => c.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        const card = document.createElement("div");
        card.className = "product-card";
        card.style.animationDelay = `${index * 0.03}s`;

        // Yulduzchalar
        const stars = "★".repeat(Math.floor(item.rating)) + (item.rating % 1 !== 0 ? "½" : "");

        card.innerHTML = `
            <div class="card-media">
                <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
                <div class="card-badges">
                    <span class="badge-tag badge-category">${item.category}</span>
                    <span class="badge-tag badge-season season-${item.season.toLowerCase()}">${getSeasonIcon(item.season)} ${item.season}</span>
                    ${item.badge ? `<span class="badge-tag badge-highlight">${item.badge}</span>` : ""}
                </div>
                <button 
                    class="card-fav-btn ${isFavorite ? 'liked' : ''}" 
                    onclick="toggleFavorite(${item.id})" 
                    title="Sevimlilarga qo'shish">
                    ${isFavorite ? '♥' : '♡'}
                </button>
                <button class="quick-view-overlay-btn" onclick="openQuickView(${item.id})">
                    👁️ Tezkor ko'rish
                </button>
            </div>
            <div class="card-body">
                <div>
                    <div class="card-rating-row">
                        <span class="stars-gold">${stars}</span>
                        <span>${item.rating} (${item.reviews})</span>
                    </div>
                    <h3 class="card-title" title="${item.name}">${item.name}</h3>
                    <div class="card-unit">${item.unit || "1 dona"}</div>
                </div>
                <div class="card-bottom-row">
                    <div class="card-price-wrap">
                        <span class="card-price-label">Narxi</span>
                        <span class="card-price-value">${item.price.toLocaleString()} so'm</span>
                    </div>
                    <div class="card-action-container" id="action-box-${item.id}">
                        ${quantity > 0 ? `
                            <div class="card-qty-stepper">
                                <button class="stepper-btn" onclick="updateItemQty(${item.id}, -1)">−</button>
                                <span class="stepper-count">${quantity}</span>
                                <button class="stepper-btn" onclick="updateItemQty(${item.id}, 1)">+</button>
                            </div>
                        ` : `
                            <button class="btn-add-cart" onclick="addToCart(${item.id})">
                                <span>🛒</span> Savatga
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });

    updateCategoryCounts();
}

// 5. Toifalar va Fasllar bo'yicha mahsulotlar sonini ko'rsatish
function updateCategoryCounts() {
    const cats = ["Hammasi", "Oziq-ovqat", "Ichimlik", "O'quv", "Shirinlik"];
    cats.forEach(cat => {
        const count = cat === "Hammasi" 
            ? products.length 
            : products.filter(p => p.category === cat).length;
        const badge = document.getElementById(`count-${cat}`);
        if (badge) badge.textContent = count;
    });

    const seasons = ["Hammasi", "Bahor", "Yoz", "Kuz", "Qish"];
    seasons.forEach(s => {
        const count = s === "Hammasi"
            ? products.length
            : products.filter(p => p.season === s).length;
        const badge = document.getElementById(`season-count-${s}`);
        if (badge) badge.textContent = count;
    });
    
    // Sevimlilar soni
    const favCountEl = document.getElementById("fav-count");
    if (favCountEl) favCountEl.textContent = favorites.length;
    const headerFavCount = document.getElementById("header-fav-count");
    if (headerFavCount) headerFavCount.textContent = favorites.length;
}

// 6. Toifani almashtirish
function filterProducts(category, clickedBtn) {
    currentCategory = category;
    document.querySelectorAll(".filter-pills-wrap .filter-btn:not(.fav-filter-pill)").forEach(btn => {
        btn.classList.remove("active");
    });
    if (clickedBtn) {
        clickedBtn.classList.add("active");
    } else {
        const allBtn = Array.from(document.querySelectorAll(".filter-pills-wrap .filter-btn")).find(b => b.textContent.includes(category));
        if (allBtn) allBtn.classList.add("active");
    }
    renderProducts();
}

// 6.1. Fasllar bo'yicha saralash
function filterBySeason(season, clickedEl) {
    currentSeason = season;

    // Fasllar tab tugmalarini yangilash
    document.querySelectorAll(".season-tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-season") === season);
    });

    // Hero bannerdagi fasl chiplarini yangilash
    document.querySelectorAll(".seasons-row .season-chip").forEach(chip => {
        chip.classList.toggle("active", chip.getAttribute("data-season") === season);
    });

    renderProducts();

    // Agar Hero banner yoki Footerdan bosilgan bo'lsa, mahsulotlar qismiga silliq siljitish
    if (clickedEl && (clickedEl.closest(".hero-banner") || clickedEl.closest(".footer"))) {
        const targetSection = document.querySelector(".controls-bar");
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}

// 7. Qidiruv boshqaruvi
function handleSearch(source) {
    const input = source || document.getElementById("search-input");
    searchQuery = input ? input.value.trim() : "";
    
    // Desktop va mobil qidiruv maydonlarini sinxronlashtirish
    const mainInput = document.getElementById("search-input");
    const mobileInput = document.getElementById("mobile-search-input");
    if (mainInput && mainInput !== input) mainInput.value = searchQuery;
    if (mobileInput && mobileInput !== input) mobileInput.value = searchQuery;

    // Tozalash tugmasi
    const clearBtn = document.getElementById("search-clear-btn");
    if (clearBtn) {
        clearBtn.classList.toggle("active", searchQuery.length > 0);
    }

    renderProducts();
}

function clearSearch() {
    searchQuery = "";
    const mainInput = document.getElementById("search-input");
    const mobileInput = document.getElementById("mobile-search-input");
    if (mainInput) mainInput.value = "";
    if (mobileInput) mobileInput.value = "";
    const clearBtn = document.getElementById("search-clear-btn");
    if (clearBtn) clearBtn.classList.remove("active");
    renderProducts();
}

// 8. Saralashni almashtirish
function handleSortChange(selectEl) {
    currentSort = selectEl.value;
    renderProducts();
}

// 9. Sevimlilar funksiyasi (Wishlist)
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index === -1) {
        favorites.push(productId);
        showToast("❤️ Sevimlilar ro'yxatiga qo'shildi!");
    } else {
        favorites.splice(index, 1);
        showToast("💔 Sevimlilardan olib tashlandi");
    }
    localStorage.setItem("4fasl_favs", JSON.stringify(favorites));
    renderProducts();
}

function toggleOnlyFavorites(btn) {
    onlyFavorites = !onlyFavorites;
    btn.classList.toggle("active", onlyFavorites);
    renderProducts();
}

function resetFilters() {
    searchQuery = "";
    currentCategory = "Hammasi";
    currentSeason = "Hammasi";
    onlyFavorites = false;
    currentSort = "default";
    
    const mainInput = document.getElementById("search-input");
    if (mainInput) mainInput.value = "";
    const mobileInput = document.getElementById("mobile-search-input");
    if (mobileInput) mobileInput.value = "";
    const clearBtn = document.getElementById("search-clear-btn");
    if (clearBtn) clearBtn.classList.remove("active");

    const favBtn = document.getElementById("fav-filter-btn");
    if (favBtn) favBtn.classList.remove("active");
    
    document.querySelectorAll(".filter-pills-wrap .filter-btn:not(.fav-filter-pill)").forEach(btn => btn.classList.remove("active"));
    const allBtn = document.querySelector(".filter-pills-wrap .filter-btn");
    if (allBtn) allBtn.classList.add("active");

    document.querySelectorAll(".season-tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-season") === "Hammasi");
    });
    document.querySelectorAll(".seasons-row .season-chip").forEach(chip => {
        chip.classList.toggle("active", chip.getAttribute("data-season") === "Hammasi");
    });

    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) sortSelect.value = "default";

    renderProducts();
}

// 10. Savat funksiyalari (Cart Operations)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let item = cart.find(c => c.id === productId);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    renderProducts();
    updateCartUI();
    showToast(`✨ "${product.name}" savatga qo'shildi!`);
}

function updateItemQty(productId, delta) {
    let itemIndex = cart.findIndex(c => c.id === productId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += delta;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    saveCart();
    renderProducts();
    updateCartUI();
}

function removeFromCart(cartIndex) {
    const removedItem = cart[cartIndex];
    cart.splice(cartIndex, 1);
    saveCart();
    renderProducts();
    updateCartUI();
    if (removedItem) {
        showToast(`🗑️ "${removedItem.name}" savatdan o'chirildi`);
    }
}

function saveCart() {
    localStorage.setItem("4fasl_cart", JSON.stringify(cart));
}

// 11. Savat va Hisob-kitob UI-ni yangilash
function updateCartUI() {
    const cartContainer = document.getElementById("cart-items");
    const cartBadge = document.getElementById("cart-count");
    const headerSumPreview = document.getElementById("header-cart-sum");
    const subtotalEl = document.getElementById("summary-subtotal");
    const discountEl = document.getElementById("summary-discount");
    const discountRow = document.getElementById("discount-row");
    const deliveryEl = document.getElementById("summary-delivery");
    const totalEl = document.getElementById("summary-total");
    
    // Bepul yetkazish progress bari
    const freeBar = document.getElementById("free-shipping-bar");
    const freeText = document.getElementById("free-shipping-info");

    let totalCount = 0;
    let subtotal = 0;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty-view">
                <div class="empty-icon">🛒</div>
                <h4 style="font-size: 1.1rem; margin-bottom: 6px;">Savatingiz bo'sh</h4>
                <p style="font-size: 13px;">O'zingizga ma'qul mahsulotlarni tanlab, buyurtma bering.</p>
            </div>
        `;
    } else {
        cart.forEach((item, index) => {
            totalCount += item.quantity;
            subtotal += item.price * item.quantity;

            const row = document.createElement("div");
            row.className = "cart-item-row";
            row.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">${(item.price * item.quantity).toLocaleString()} so'm</div>
                    <div class="cart-item-unit-price">${item.price.toLocaleString()} so'm / ${item.unit || 'dona'}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-stepper">
                        <button class="cart-qty-btn" onclick="updateItemQty(${item.id}, -1)">−</button>
                        <span class="cart-qty-num">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="updateItemQty(${item.id}, 1)">+</button>
                    </div>
                    <span class="cart-remove-btn" onclick="removeFromCart(${index})" title="O'chirish">✕ O'chirish</span>
                </div>
            `;
            cartContainer.appendChild(row);
        });
    }

    // Yetkazib berish usuliga qarab hisoblash
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked')?.value || "delivery";
    let deliveryFee = 0;

    if (cart.length > 0 && deliveryMethod === "delivery") {
        if (subtotal >= FREE_DELIVERY_THRESHOLD) {
            deliveryFee = 0;
        } else {
            deliveryFee = DELIVERY_FEE;
        }
    }

    // Bepul yetkazish progress bari
    if (freeBar && freeText) {
        if (subtotal >= FREE_DELIVERY_THRESHOLD) {
            freeBar.style.width = "100%";
            freeText.innerHTML = "🎉 Siz uchun yetkazib berish <strong>MUTLAQO BEPUL!</strong>";
        } else {
            const diff = FREE_DELIVERY_THRESHOLD - subtotal;
            const percent = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
            freeBar.style.width = `${percent}%`;
            freeText.innerHTML = `Bepul yetkazishgacha yana: <strong>${diff.toLocaleString()} so'm</strong>`;
        }
    }

    // Promokod chegirmasi
    let discountAmount = 0;
    if (appliedPromo) {
        discountAmount = Math.round((subtotal * appliedPromo.discountPercent) / 100);
        if (discountRow) discountRow.style.display = "flex";
        if (discountEl) discountEl.textContent = `-${discountAmount.toLocaleString()} so'm (${appliedPromo.discountPercent}%)`;
    } else {
        if (discountRow) discountRow.style.display = "none";
    }

    const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

    // Hisob-kitob matnlarini yangilash
    if (cartBadge) cartBadge.textContent = totalCount;
    if (headerSumPreview) headerSumPreview.textContent = `${subtotal.toLocaleString()} so'm`;
    if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString()} so'm`;
    
    if (deliveryEl) {
        if (deliveryMethod === "pickup") {
            deliveryEl.textContent = "0 so'm (Olib ketish)";
        } else if (deliveryFee === 0 && cart.length > 0) {
            deliveryEl.innerHTML = "<span style='color: var(--success); font-weight: 700;'>BEPUL 🎉</span>";
        } else {
            deliveryEl.textContent = `${deliveryFee.toLocaleString()} so'm`;
        }
    }

    if (totalEl) totalEl.textContent = `${grandTotal.toLocaleString()} so'm`;
}

// 12. Savat yon oynasini ochish / yopish
function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    const overlay = document.getElementById("cart-overlay");
    if (!sidebar || !overlay) return;

    const isOpen = sidebar.classList.contains("open");
    if (!isOpen) {
        sidebar.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    } else {
        sidebar.classList.remove("open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }
}

// 13. Yetkazib berish usulini almashtirish
function toggleDeliveryMethod() {
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
    const addressBox = document.getElementById("address-box");
    if (addressBox) {
        addressBox.style.display = deliveryMethod === "delivery" ? "block" : "none";
    }
    updateCartUI();
}

// 14. To'lov usulini almashtirish
function togglePaymentMethod() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const cardBox = document.getElementById("interactive-card-box");
    if (cardBox) {
        cardBox.style.display = paymentMethod === "card" ? "block" : "none";
    }
}

// 15. Interaktiv Karta vidjeti va formatlash
function formatCardNumber(input) {
    let digits = input.value.replace(/\D/g, "").substring(0, 16);
    let formatted = digits.match(/.{1,4}/g);
    input.value = formatted ? formatted.join(" ") : digits;

    const visualNumber = document.getElementById("visual-card-number");
    const brandLabel = document.getElementById("card-brand-label");

    if (visualNumber) {
        visualNumber.textContent = input.value || "•••• •••• •••• ••••";
    }

    if (brandLabel) {
        if (digits.startsWith("8600")) {
            brandLabel.textContent = "UZCARD";
        } else if (digits.startsWith("9860")) {
            brandLabel.textContent = "HUMO";
        } else if (digits.startsWith("4")) {
            brandLabel.textContent = "VISA";
        } else if (digits.startsWith("5")) {
            brandLabel.textContent = "MASTERCARD";
        } else {
            brandLabel.textContent = "PREMIUM CARD";
        }
    }
}

function formatExpiry(input) {
    let digits = input.value.replace(/\D/g, "").substring(0, 4);
    if (digits.length >= 3) {
        input.value = digits.substring(0, 2) + "/" + digits.substring(2);
    } else {
        input.value = digits;
    }

    const visualExpiry = document.getElementById("visual-card-expiry");
    if (visualExpiry) {
        visualExpiry.textContent = input.value || "OO/YY";
    }
}

function updateCardHolder(input) {
    const visualHolder = document.getElementById("visual-card-holder");
    if (visualHolder) {
        visualHolder.textContent = input.value.toUpperCase() || "ISM FAMILIYA";
    }
}

// 16. Promokod qo'llash
function applyPromoCode() {
    const promoInput = document.getElementById("promo-input");
    if (!promoInput) return;

    const code = promoInput.value.trim().toUpperCase();
    if (code === "4FASL" || code === "PREMIUM" || code === "SARHIL") {
        appliedPromo = { code: code, discountPercent: 10 };
        showToast("🎉 Promokod qabul qilindi: 10% chegirma berildi!");
        updateCartUI();
    } else if (code === "") {
        showToast("⚠️ Iltimos, promokodni kiriting");
    } else {
        showToast("❌ Bunday promokod mavjud emas yoki muddati o'tgan");
    }
}

// 17. Tezkor ko'rish modali (Quick View)
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("quick-view-modal");
    if (!modal) return;

    document.getElementById("modal-img").src = product.image;
    document.getElementById("modal-img").alt = product.name;
    document.getElementById("modal-category").innerHTML = `${getSeasonIcon(product.season)} ${product.season} • ${product.category}`;
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById("modal-desc").textContent = product.desc;
    document.getElementById("modal-price").textContent = `${product.price.toLocaleString()} so'm`;
    document.getElementById("modal-unit").textContent = product.unit || "1 dona";
    document.getElementById("modal-rating").textContent = `${product.rating} ★ (${product.reviews} ta sharh)`;

    const addBtn = document.getElementById("modal-add-btn");
    addBtn.onclick = () => {
        addToCart(product.id);
        closeQuickView();
    };

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeQuickView() {
    const modal = document.getElementById("quick-view-modal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

// 18. Buyurtmani rasmiylashtirish (Checkout & Elegant Receipt Modal)
function checkoutOrder() {
    if (cart.length === 0) {
        showToast("⚠️ Savatingiz bo'sh! Avval mahsulot tanlang.");
        return;
    }

    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
    const addressInput = document.getElementById("delivery-address");
    const address = addressInput ? addressInput.value.trim() : "";

    if (deliveryMethod === "delivery" && address === "") {
        showToast("📍 Iltimos, yetkazib berish manzilini kiriting!");
        if (addressInput) addressInput.focus();
        return;
    }

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (paymentMethod === "card") {
        const cardNum = document.getElementById("card-number")?.value.replace(/\s/g, "") || "";
        const cardExpiry = document.getElementById("card-expiry")?.value.trim() || "";
        const cardHolder = document.getElementById("card-holder")?.value.trim() || "";

        if (cardNum.length < 16) {
            showToast("💳 16 xonali karta raqamini to'liq kiriting!");
            return;
        }
        if (cardExpiry.length < 5) {
            showToast("📅 Kartaning amal qilish muddatini (OO/YY) kiriting!");
            return;
        }
        if (cardHolder === "") {
            showToast("👤 Karta egasining ismini kiriting!");
            return;
        }
    }

    // Buyurtma chekini shakllantirish
    const orderNumber = "FASL-" + Math.floor(100000 + Math.random() * 900000);
    const subtotalText = document.getElementById("summary-subtotal")?.textContent || "0";
    const deliveryText = document.getElementById("summary-delivery")?.textContent || "0";
    const totalText = document.getElementById("summary-total")?.textContent || "0";

    const receiptOrderNo = document.getElementById("receipt-order-no");
    const receiptAddress = document.getElementById("receipt-address");
    const receiptPayment = document.getElementById("receipt-payment");
    const receiptTotal = document.getElementById("receipt-total");

    if (receiptOrderNo) receiptOrderNo.textContent = `#${orderNumber}`;
    if (receiptAddress) receiptAddress.textContent = deliveryMethod === "delivery" ? address : "Do'kondan olib ketish";
    
    let paymentTitle = "Naqd pul";
    if (paymentMethod === "card") paymentTitle = "Bank kartasi";
    if (paymentMethod === "click") paymentTitle = "Click / Payme";
    if (receiptPayment) receiptPayment.textContent = paymentTitle;

    if (receiptTotal) receiptTotal.textContent = totalText;

    // Savatni yopish va chek modalini ochish
    toggleCart();
    const receiptModal = document.getElementById("receipt-modal");
    if (receiptModal) {
        receiptModal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    // Savatni tozalash
    cart = [];
    appliedPromo = null;
    saveCart();
    renderProducts();
    updateCartUI();

    if (addressInput) addressInput.value = "";
}

function closeReceiptModal() {
    const receiptModal = document.getElementById("receipt-modal");
    if (receiptModal) {
        receiptModal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

// 19. Tungi / Kunduzgi rejim (Dark Mode Toggle)
function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("4fasl_theme", isDark ? "dark" : "light");
    
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.innerHTML = isDark 
            ? `☀️ <span class="hide-mobile">Kunduzgi rejim</span>` 
            : `🌙 <span class="hide-mobile">Tungi rejim</span>`;
    }
}

// Boshlang'ich mavzuni tiklash
(function initTheme() {
    const savedTheme = localStorage.getItem("4fasl_theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        const themeBtn = document.getElementById("theme-toggle");
        if (themeBtn) {
            themeBtn.innerHTML = `☀️ <span class="hide-mobile">Kunduzgi rejim</span>`;
        }
    }
})();

// 20. Toast bildirishnoma tizimi
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

// Boshlang'ich yuklash
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUI();
});
