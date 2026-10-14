const drinkGroups = [
    {
        title: "Espresso y clásicos",
        imageGroup: "espresso",
        items: [
            ["Espresso", 12], ["Ristretto", 12], ["Lungo", 14], ["Doppio", 16],
            ["Americano", 15], ["Long Black", 16], ["Cortado", 16], ["Macchiato", 15],
            ["Latte Macchiato", 20], ["Café Latte", 20], ["Cappuccino", 20], ["Flat White", 21],
            ["Mokaccino (Mocha)", 23], ["Café con Leche", 18], ["Café Bombón", 20],
            ["Affogato", 22], ["Café Breve", 22], ["Red Eye", 20], ["Black Eye", 24]
        ]
    },
    {
        title: "Filtrados y tradicionales",
        imageGroup: "filter",
        items: [
            ["Dripped Coffee (Café de Filtro)", 18], ["Café de Prensa Francesa", 22],
            ["Café Turco", 20], ["Café de Olla", 18]
        ]
    },
    {
        title: "Fríos y refrescantes",
        imageGroup: "iced",
        items: [
            ["Cold Brew", 22], ["Nitro Cold Brew", 30], ["Iced Coffee", 18],
            ["Iced Latte", 22], ["Frappé", 24], ["Mazagran", 20]
        ]
    },
    {
        title: "Especiales y descafeinados",
        imageGroup: "special",
        items: [
            ["Café Irlandés", 28], ["Café Vienés", 23], ["Café Dalgona", 22],
            ["Café Vienés Con Panna", 25], ["Espresso Descafeinado", 14],
            ["Americano Descafeinado", 17], ["Latte Descafeinado", 22],
            ["Cappuccino Descafeinado", 22]
        ]
    },
    {
        title: "Matcha",
        imageGroup: "matcha",
        items: [
            ["Matcha Latte", 25], ["Iced Matcha Latte", 27],
            ["Strawberry Matcha Latte (Matcha Fresa)", 29], ["Mango Matcha Latte", 29],
            ["Vanilla Matcha Latte", 27], ["Dirty Matcha (Matcha con Shot de Espresso)", 30]
        ]
    },
    {
        title: "Lattes con sabor",
        imageGroup: "latte",
        items: [
            ["Strawberry Latte (Latte de Fresa)", 26], ["Vanilla Latte (Latte de Vainilla)", 24],
            ["Caramel Latte (Latte de Caramelo)", 25], ["Hazelnut Latte (Latte de Avellana)", 26],
            ["Pistachio Latte", 30]
        ]
    },
    {
        title: "Chai y otras bebidas",
        imageGroup: "chai",
        items: [
            ["Chai Latte", 24], ["Dirty Chai Latte", 28], ["Chai de Vainilla", 25],
            ["Golden Milk (Latte de Cúrcuma)", 24], ["Taro Latte", 26]
        ]
    }
];

const dessertGroups = [
    {
        title: "Tortas y pasteles",
        imageGroup: "cake",
        items: [
            ["Torta de Chocolate", 18], ["Torta de Vainilla", 16],
            ["Torta de Zanahoria", 18], ["Torta de Fresa", 18],
            ["Cheesecake", 20], ["Pay de Limón", 16], ["Pay de Manzana", 16]
        ]
    },
    {
        title: "Horneados y galletas",
        imageGroup: "pastry",
        items: [
            ["Brownie", 12], ["Croissant", 10],
            ["Galletas de Chispas de Chocolate", 6], ["Galletas de Avena y Pasas", 6],
            ["Galletas Red Velvet", 7], ["Alfajores", 8],
            ["Cinnamon Roll (Rollo de Canela)", 14]
        ]
    },
    {
        title: "Cupcakes",
        imageGroup: "cupcake",
        items: [
            ["Cupcake de Vainilla", 10], ["Cupcake de Chocolate", 10],
            ["Cupcake de Red Velvet", 12], ["Cupcake de Frutos Rojos", 12]
        ]
    }
];

const menuPhotos = {
    espresso: [
        "photo-1495474472287-4d71bcdd2085",
        "photo-1509042239860-f550ce710b93",
        "photo-1495474472287-4d71bcdd2085"
    ],
    filter: [
        "photo-1442512595331-e89e73853f31"
    ],
    iced: [
        "photo-1461023058943-07fcbe16d735",
        "photo-1517701604599-bb29b565090c",
        "photo-1517701604599-bb29b565090c"
    ],
    special: [
        "photo-1509042239860-f550ce710b93",
        "photo-1495474472287-4d71bcdd2085"
    ],
    matcha: ["photo-1515823064-d6e0c04616a7"],
    latte: [
        "photo-1509042239860-f550ce710b93",
        "photo-1495474472287-4d71bcdd2085"
    ],
    chai: ["photo-1571934811356-5cc061b6821f"],
    cake: [
        "photo-1578985545062-69928b1d9587",
        "photo-1571115177098-24ec42ed204d",
        "photo-1488477181946-6428a0291777",
        "photo-1550617931-e17a7b70dce2"
    ],
    pastry: [
        "photo-1555507036-ab1f4038808a",
        "photo-1499636136210-6f4ee915583e",
        "photo-1606313564200-e75d5e30476c",
        "photo-1509440159596-0249088772ff"
    ],
    cupcake: [
        "photo-1486427944299-d1955d23e34d",
        "photo-1578985545062-69928b1d9587",
        "photo-1571115177098-24ec42ed204d"
    ]
};

const dessertPhotos = {
    "Torta de Chocolate": "photo-1578985545062-69928b1d9587",
    "Torta de Vainilla": "photo-1571115177098-24ec42ed204d",
    "Torta de Zanahoria": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Carrot_cake_-_Milfey_Patisserie_2026-04-04.jpg/960px-Carrot_cake_-_Milfey_Patisserie_2026-04-04.jpg",
    "Torta de Fresa": "photo-1565958011703-44f9829ba187",
    "Brownie": "photo-1606313564200-e75d5e30476c",
    "Cheesecake": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Cheesecake_with_slice_cut_out.jpg/960px-Cheesecake_with_slice_cut_out.jpg",
    "Pay de Limón": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Lemon_Tart_With_Plate_And_Spoon.jpg/960px-Lemon_Tart_With_Plate_And_Spoon.jpg",
    "Pay de Manzana": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Apple_pie_24.jpg/960px-Apple_pie_24.jpg",
    "Croissant": "photo-1555507036-ab1f4038808a",
    "Galletas de Chispas de Chocolate": "photo-1499636136210-6f4ee915583e",
    "Galletas de Avena y Pasas": "photo-1509440159596-0249088772ff",
    "Galletas Red Velvet": "photo-1499636136210-6f4ee915583e",
    "Alfajores": "photo-1499636136210-6f4ee915583e",
    "Cinnamon Roll (Rollo de Canela)": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Cinnamon_bun_-_Black_Mocha_2024-01-08.jpg/960px-Cinnamon_bun_-_Black_Mocha_2024-01-08.jpg",
    "Cupcake de Vainilla": "photo-1486427944299-d1955d23e34d",
    "Cupcake de Chocolate": "photo-1550617931-e17a7b70dce2",
    "Cupcake de Red Velvet": "photo-1571115177098-24ec42ed204d",
    "Cupcake de Frutos Rojos": "photo-1565958011703-44f9829ba187"
};

const photoCredits = {
    "Cheesecake": {
        text: "Foto: Martin van Dam · CC BY 2.0",
        url: "https://commons.wikimedia.org/wiki/File:Cheesecake_with_slice_cut_out.jpg"
    },
    "Pay de Manzana": {
        text: "Foto: Shisma · CC BY 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Apple_pie_24.jpg"
    }
};

const adoptionCats = [
    {
        name: "Miso",
        sex: "male",
        description: "Macho · Juguetón y curioso",
        image: "photo-1573865526739-10659fec78a5"
    },
    {
        name: "Simón",
        sex: "male",
        description: "Macho · Tranquilo y cariñoso",
        image: "photo-1518791841217-8f162f1e1131"
    },
    {
        name: "Coco",
        sex: "male",
        description: "Macho · Dulce y sociable",
        image: "photo-1511044568932-338cba0ad803"
    },
    {
        name: "Luna",
        sex: "female",
        description: "Hembra · Amable y mimosa",
        image: "photo-1514888286974-6c03e2ca1dba"
    },
    {
        name: "Nube",
        sex: "female",
        description: "Hembra · Curiosa y juguetona",
        image: "photo-1533743983669-94fa5c4338ec"
    },
    {
        name: "Canela",
        sex: "female",
        description: "Hembra · Serena y compañera",
        image: "photo-1574158622682-e40e69881006"
    }
];

function photoUrl(photoId) {
    return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=640&q=80`;
}

function getProductPhoto(name, imageGroup, index) {
    if (dessertPhotos[name]) {
        return dessertPhotos[name].startsWith("https://")
            ? dessertPhotos[name]
            : photoUrl(dessertPhotos[name]);
    }

    const photos = menuPhotos[imageGroup];
    return photoUrl(photos[index % photos.length]);
}

function createProductCard(name, price, imageGroup, index) {
    const card = document.createElement("article");
    card.className = "catalog-card";

    const image = document.createElement("img");
    image.className = "catalog-photo";
    image.src = getProductPhoto(name, imageGroup, index);
    image.alt = `Foto de ${name}`;
    image.loading = "lazy";
    image.width = 640;
    image.height = 420;

    const details = document.createElement("div");
    details.className = "catalog-card-details";

    const title = document.createElement("h4");
    title.textContent = name;

    const productName = document.createElement("div");
    productName.className = "catalog-product-name";
    productName.append(title);

    if (photoCredits[name]) {
        const credit = document.createElement("a");
        credit.className = "photo-credit";
        credit.href = photoCredits[name].url;
        credit.target = "_blank";
        credit.rel = "noreferrer";
        credit.textContent = photoCredits[name].text;
        productName.append(credit);
    }

    const priceLabel = document.createElement("span");
    priceLabel.className = "catalog-price";
    priceLabel.textContent = `Bs ${price}`;
    priceLabel.setAttribute("aria-label", `Precio: ${price} bolivianos`);

    details.append(productName, priceLabel);
    card.append(image, details);
    return card;
}

function renderCatalog(targetId, groups) {
    const catalog = document.getElementById(targetId);

    groups.forEach((group) => {
        const section = document.createElement("section");
        section.className = "catalog-group";

        const heading = document.createElement("h3");
        heading.textContent = group.title;

        const grid = document.createElement("div");
        grid.className = "catalog-grid";

        group.items.forEach(([name, price], index) => {
            grid.append(createProductCard(name, price, group.imageGroup, index));
        });

        section.append(heading, grid);
        catalog.append(section);
    });
}

renderCatalog("drinks-catalog", drinkGroups);
renderCatalog("desserts-catalog", dessertGroups);

function renderAdoptionCats() {
    const catChoice = document.getElementById("cat-choice");

    adoptionCats.forEach((cat) => {
        const card = document.createElement("article");
        card.className = "cat-card";

        const image = document.createElement("img");
        image.className = "cat-photo";
        image.src = photoUrl(cat.image);
        image.alt = `Gatito llamado ${cat.name}`;
        image.loading = "lazy";
        image.width = 640;
        image.height = 420;

        const info = document.createElement("div");
        info.className = "cat-info";

        const name = document.createElement("h4");
        name.textContent = cat.name;

        const description = document.createElement("p");
        description.textContent = cat.description;

        const button = document.createElement("button");
        button.className = "button button-primary";
        button.type = "button";
        button.textContent = "Solicitar adopción";
        button.addEventListener("click", () => {
            catChoice.value = cat.name;
            document.getElementById("solicitud").scrollIntoView({ behavior: "smooth" });
            catChoice.focus({ preventScroll: true });
        });

        const option = document.createElement("option");
        option.value = cat.name;
        option.textContent = `${cat.name} (${cat.sex === "male" ? "macho" : "hembra"})`;
        catChoice.append(option);

        info.append(name, description, button);
        card.append(image, info);
        document.getElementById(cat.sex === "male" ? "male-cats" : "female-cats").append(card);
    });
}

renderAdoptionCats();

document.getElementById("adoption-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const feedback = document.getElementById("form-feedback");
    feedback.textContent = `Gracias, ${formData.get("name")}. Tu solicitud de ejemplo para ${formData.get("cat")} está lista; recuerda que no se envió.`;
    form.reset();
});
