document.addEventListener('DOMContentLoaded', () => {
    const app = {
        state: {
            language: 'en',
            currentCategory: 'kitchen',
            list: [],
        },
        data: {
            en: {
                categories: {
                    kitchen: 'Kitchen',
                    spices: 'Spices & Masala',
                    snacks: 'Snacks',
                    beverages: 'Beverages',
                    fruits_vegetables: 'Fruits & Vegetables',
                    meat_poultry: 'Meat & Poultry',
                    dairy: 'Dairy & Eggs',
                    grains_pulses: 'Grains & Pulses',
                    noodles_pasta: 'Noodles & Pasta',
                    ramadan_items: 'Ramadan Special',
                    cleaning_household: 'Cleaning & Household',
                    others: 'Others',
                },
                items: {
                    kitchen: ['Dish Washer', 'Scrub', 'Sponges', 'Utensils', 'Aluminum Foil', 'Plastic Wrap', 'Paper Towels', 'Dishwashing Liquid'],
                    spices: ['Garam Masala', 'Red Chili Powder', 'Turmeric', 'Cumin Powder', 'Coriander Powder', 'Black Pepper', 'Salt', 'Bay Leaves', 'Green Cardamom', 'Black Cardamom', 'Cinnamon', 'Cloves', 'Star Anise', 'Fennel Seeds', 'Mustard Seeds', 'Fenugreek Seeds', 'Curry Powder', 'Chat Masala', 'Biryani Masala', 'Chicken Masala'],
                    snacks: ['Biscuits', 'Chips', 'Chocolates', 'Cookies', 'Crackers', 'Nuts', 'Rusk', 'Cake Rusk', 'Nimco', 'Chanay'],
                    beverages: ['Tang', 'Jam-e-Shereen', 'Rooh Afza', 'Soft Drinks', 'Tea', 'Coffee', 'Milk', 'Fruit Juices', 'Energy Drinks', 'Mineral Water'],
                    fruits_vegetables: ['Apples', 'Bananas', 'Oranges', 'Mangoes', 'Grapes', 'Carrots', 'Potatoes', 'Onions', 'Tomatoes', 'Ginger', 'Garlic', 'Green Chilies', 'Mint', 'Coriander Leaves', 'Spinach', 'Okra', 'Cauliflower'],
                    meat_poultry: ['Chicken', 'Beef', 'Mutton', 'Fish', 'Prawns', 'Minced Meat', 'Chicken Karahi Cut', 'Beef Boneless'],
                    dairy: ['Milk', 'Yogurt', 'Cheese', 'Butter', 'Eggs', 'Cream', 'Khoya', 'Paneer'],
                    grains_pulses: ['Basmati Rice', 'Regular Rice', 'Wheat Flour', 'Gram Flour', 'Semolina', 'Cornflour', 'Toor Dal (Arhar)', 'Moong Dal (Split)', 'Whole Moong Dal', 'Masoor Dal (Red Lentil)', 'Whole Masoor Dal', 'Chana Dal (Split Chickpeas)', 'Whole Chickpeas (Kabuli Chana)', 'Black Chickpeas (Kala Chana)', 'Urad Dal (Black Lentil)', 'Whole Urad Dal', 'Kidney Beans (Rajma)', 'White Kidney Beans (Safed Rajma)', 'Black Eyed Peas (Lobia)', 'Moth Dal (Turkish Gram)', 'Kulthi Dal (Horse Gram)', 'Green Peas (Dried)', 'Lima Beans (Bakla)', 'Soybean'],
                    noodles_pasta: ['Maggi Noodles', 'Knorr Noodles', 'Shan Noodles', 'Pasta', 'Macaroni', 'Vermicelli', 'Korean Noodles'],
                    cleaning_household: ['Detergent', 'Floor Cleaner', 'Glass Cleaner', 'Toilet Paper', 'Soap', 'Shampoo', 'Toothpaste', 'Fabric Softener', 'Bleach'],
                    others: ['Batteries', 'Light Bulbs', 'Matches', 'Candles', 'Tissues', 'Garbage Bags', 'Mosquito Coils', 'Air Freshener'],
                }
            },
            ur: {
                categories: {
                    kitchen: 'باورچی خانہ',
                    spices: 'مصالحے',
                    snacks: 'نمکین',
                    beverages: 'مشروبات',
                    fruits_vegetables: 'پھل اور سبزیاں',
                    meat_poultry: 'گوشت اور مرغی',
                    dairy: 'دودھ اور انڈے',
                    grains_pulses: 'اناج اور دالیں',
                    noodles_pasta: 'نوڈلز اور پاستا',
                    cleaning_household: 'صفائی اور گھریلو',
                    others: 'دیگر',
                },
                items: {
                    kitchen: ['ڈش واشر', 'اسکرب', 'اسپنج', 'برتن', 'ایلومینیم فوائل', 'پلاسٹک ریپ', 'کاغذی توالیے', 'برتن دھونے کا صابن'],
                    spices: ['گرم مسالہ', 'لال مرچ پاؤڈر', 'ہلدی', 'زیرہ پاؤڈر', 'دھنیا پاؤڈر', 'کالی مرچ', 'نمک', 'تیز پتہ', 'چھوٹی الائچی', 'بڑی الائچی', 'دارچینی', 'لونگ', 'چکری پھول', 'سونف', 'رائی', 'میتھی دانہ', 'کری پاؤڈر', 'چاٹ مسالہ', 'بریانی مسالہ', 'چکن مسالہ'],
                    snacks: ['بسکٹ', 'چپس', 'چاکلیٹ', 'کوکیز', 'کریکرز', 'نٹس', 'رسک', 'کیک رسک', 'نمکو', 'چنے'],
                    beverages: ['ٹینگ', 'جام شیریں', 'روح افزا', 'سافٹ ڈرنکس', 'چائے', 'کافی', 'دودھ', 'فروٹ جوس', 'انرجی ڈرنک', 'پانی'],
                    fruits_vegetables: ['سیب', 'کیلے', 'سنتری', 'آم', 'انگور', 'گاجر', 'آلو', 'پیاز', 'ٹماٹر', 'ادرک', 'لہسن', 'ہری مرچ', 'پودینہ', 'دھنیا', 'پالک', 'بھنڈی', 'پھول گوبھی'],
                    meat_poultry: ['چکن', 'گائے کا گوشت', 'مٹن', 'مچھلی', 'جھینگا', 'قیمہ', 'چکن کڑاہی کٹ', 'بونلیس بیف'],
                    dairy: ['دودھ', 'دہی', 'پنیر', 'مکھن', 'انڈے', 'کریم', 'کھویا', 'پنیر'],
                    grains_pulses: ['بادشاہی چاول', 'عام چاول', 'گندم کا آٹا', 'بیسن', 'دال', 'چنے', 'کالا چنا', 'راجمہ', 'سوجی', 'مکئی کا آٹا'],
                    noodles_pasta: ['میگی نوڈلز', 'نار نوڈلز', 'شان نوڈلز', 'پاستا', 'میکرونی', 'سیویاں', 'کوریائی نوڈلز'],
                    cleaning_household: ['ڈٹرجنٹ', 'فرش کلینر', 'گلاس کلینر', 'ٹوائلٹ پیپر', 'صابن', 'شیمپو', 'ٹوتھ پیسٹ', 'فیبرک سافٹنر', 'بلیچ'],
                    others: ['بیٹریاں', 'بلب', 'ماچس', 'موم بتیاں', 'ٹشو', 'کوڑا دان کے تھیلے', 'مچھر کائل', 'ایئر فریشنر'],
                }
            }
        },
        elements: {
            categoriesContainer: document.getElementById('categories'),
            itemsContainer: document.getElementById('items'),
            currentList: document.getElementById('list-items'),
            langToggleBtn: document.getElementById('lang-toggle-btn'),
            headerTitle: document.querySelector('header h1'),
            newListBtn: document.getElementById('new-list-btn'),
            viewListBtn: document.getElementById('view-list-btn'),
            screenshotBtn: document.getElementById('screenshot-btn'),
            myListTitle: document.querySelector('#current-list h2'),
            searchBar: document.getElementById('search-bar'),
        },
        init() {
            this.loadState();
            this.renderCategories();
            this.renderItems();
            this.renderList();
            this.addEventListeners();
            this.updateUI();
        },
        addEventListeners() {
            this.elements.langToggleBtn.addEventListener('click', () => this.toggleLanguage());
            this.elements.categoriesContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('category-tab')) {
                    this.state.currentCategory = e.target.dataset.category;
                    this.renderCategories();
                    this.renderItems();
                }
            });
            this.elements.itemsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('add-item-btn')) {
                    const itemName = e.target.dataset.item;
                    this.addItemToList(itemName);
                }
            });
            this.elements.currentList.addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-item-btn')) {
                    const itemName = e.target.dataset.item;
                    this.removeItemFromList(itemName);
                } else if (e.target.classList.contains('quantity-btn')) {
                    const itemName = e.target.dataset.item;
                    const action = e.target.dataset.action;
                    this.updateQuantity(itemName, action);
                }
            });
            this.elements.screenshotBtn.addEventListener('click', () => this.takeScreenshot());
            this.elements.searchBar.addEventListener('keyup', () => this.renderItems());
            this.elements.newListBtn.addEventListener('click', () => this.clearList());
        },
        clearList() {
            this.state.list = [];
            this.renderList();
        },
        takeScreenshot() {
            const listElement = document.getElementById('current-list');
            html2canvas(listElement).then(canvas => {
                const image = canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = image;
                a.download = 'soda-ki-list.png';
                a.click();
            });
        },
        renderCategories() {
            const { categories } = this.data[this.state.language];
            this.elements.categoriesContainer.innerHTML = Object.keys(categories).map(key => `
                <div class="category-tab ${this.state.currentCategory === key ? 'active' : ''}" data-category="${key}">
                    ${categories[key]}
                </div>
            `).join('');
        },
        renderItems() {
            const { items } = this.data[this.state.language];
            let categoryItems = items[this.state.currentCategory] || [];
            const searchTerm = this.elements.searchBar.value.toLowerCase();

            if (searchTerm) {
                categoryItems = Object.values(items).flat().filter(item => 
                    item.toLowerCase().includes(searchTerm)
                );
            }

            this.elements.itemsContainer.innerHTML = categoryItems.map(item => `
                <div class="item">
                    <span>${item}</span>
                    <button class="add-item-btn" data-item="${item}">+</button>
                </div>
            `).join('');
        },
        renderList() {
            this.elements.currentList.innerHTML = this.state.list.map(item => `
                <li>
                    <span>${item.name}</span>
                    <div class="quantity-selector">
                        <button class="quantity-btn" data-action="decrease" data-item="${item.name}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-action="increase" data-item="${item.name}">+</button>
                        <button class="remove-item-btn" data-item="${item.name}" style="margin-left: 10px;">&times;</button>
                    </div>
                </li>
            `).join('');
            this.saveState();
        },
        addItemToList(itemName) {
            const existingItem = this.state.list.find(item => item.name === itemName);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.state.list.push({ name: itemName, quantity: 1 });
            }
            this.renderList();
        },
        removeItemFromList(itemName) {
            this.state.list = this.state.list.filter(item => item.name !== itemName);
            this.renderList();
        },
        updateQuantity(itemName, action) {
            const item = this.state.list.find(i => i.name === itemName);
            if (item) {
                if (action === 'increase') {
                    item.quantity++;
                } else if (action === 'decrease') {
                    item.quantity--;
                    if (item.quantity === 0) {
                        this.removeItemFromList(itemName);
                    }
                }
            }
            this.renderList();
        },
        toggleLanguage() {
            this.state.language = this.state.language === 'en' ? 'ur' : 'en';
            this.updateUI();
            this.renderCategories();
            this.renderItems();
            // We need to re-translate the list items
            this.translateList();
            this.renderList();
        },
        translateList() {
            const currentLang = this.state.language;
            const otherLang = currentLang === 'en' ? 'ur' : 'en';

            this.state.list.forEach(listItem => {
                let translated = false;
                for (const category in this.data[otherLang].items) {
                    const itemIndex = this.data[otherLang].items[category].indexOf(listItem.name);
                    if (itemIndex > -1) {
                        listItem.name = this.data[currentLang].items[category][itemIndex];
                        translated = true;
                        break;
                    }
                }
            });
        },
        updateUI() {
            const lang = this.state.language;
            this.elements.langToggleBtn.textContent = lang === 'en' ? 'Urdu' : 'English';
            this.elements.headerTitle.textContent = lang === 'en' ? 'Soda Ki List' : 'سودۓ کی لسٹ';
            this.elements.myListTitle.textContent = lang === 'en' ? 'My List' : 'میری لسٹ';
            this.elements.newListBtn.textContent = lang === 'en' ? 'Make a New List' : 'نئی لسٹ بنائیں';
            this.elements.viewListBtn.textContent = lang === 'en' ? 'View Existing List' : 'موجودہ لسٹ دیکھیں';
            this.elements.screenshotBtn.textContent = lang === 'en' ? 'Screenshot' : 'اسکرین شاٹ';
            this.elements.searchBar.placeholder = lang === 'en' ? 'Search for items...' : 'اشیاء تلاش کریں...';
            
            if (lang === 'ur') {
                document.body.style.fontFamily = "'Noto Nastaliq Urdu', serif";
            } else {
                document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
            }
        },
        saveState() {
            // Note: localStorage is not available in Claude artifacts environment
            // This would work in a real browser environment
            try {
                localStorage.setItem('sodaKiListState', JSON.stringify(this.state));
            } catch (e) {
                console.log('LocalStorage not available');
            }
        },
        loadState() {
            try {
                const savedState = localStorage.getItem('sodaKiListState');
                if (savedState) {
                    this.state = JSON.parse(savedState);
                }
            } catch (e) {
                console.log('LocalStorage not available');
            }
        }
    };

    app.init();
});
