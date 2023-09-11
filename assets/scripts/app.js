const pillowImage = 'https://as1.ftcdn.net/v2/jpg/02/61/92/76/1000_F_261927657_rTbgXMYA70DB7D3tkPAMmGghOoqnJzG0.jpg';
const carpetImage = 'https://t3.ftcdn.net/jpg/01/91/27/76/360_F_191277640_tdXKlzGlKAI8701Wd0WHQm6ljHAgDGPw.jpg';

class Product {
    title = 'DEFAULT';
    imageUrl;
    price;
    description;

    constructor(title, image, price, desc) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}

const productList = {
    products: [
        new Product('Pillow', pillowImage, 19.99, 'A soft pillow!'),
        new Product('Carpet', carpetImage, 89.99, 'A nice natural carpet!'),
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.classList = 'product-list';

        for (prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.classList = 'product-item';

            prodEl.innerHTML = `
                <div>
                    <img src='${prod.imageUrl}' alt='${prod.title}'/>
                    <div class='product-item__content'>
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;

            prodList.append(prodEl);
        }

        renderHook.append(prodList);
    }
};

productList.render();

