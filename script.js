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

// Edita estos datos al definir la agenda; los valores null se muestran como pendientes de confirmación.
const gatoccinoEvents = [
    {
        id: "juegos-y-michis",
        title: "Tardes de juegos y michis 🎲",
        category: "juegos",
        categoryLabel: "Juegos",
        description: "Una experiencia para compartir con amigos, disfrutar de juegos de mesa, tomar bebidas deliciosas y pasar tiempo con nuestros gatitos.",
        image: "photo-1610890716171-6b1bb98ffd09",
        imageAlt: "Juegos de mesa preparados para compartir",
        date: null,
        time: null,
        price: null,
        availability: null
    },
    {
        id: "club-lectura-gatuno",
        title: "Club de lectura gatuno 📚",
        category: "lectura",
        categoryLabel: "Lectura",
        description: "Un espacio tranquilo para leer, conversar sobre libros y disfrutar de una taza de café mientras los gatitos nos acompañan.",
        image: "photo-1512820790803-83ca734da794",
        imageAlt: "Libros abiertos para una tarde de lectura",
        date: null,
        time: null,
        price: null,
        availability: null
    },
    {
        id: "adopcion-responsable",
        title: "Jornadas de adopción responsable 🐾",
        category: "adopciones",
        categoryLabel: "Adopciones",
        description: "Actividades para conocer gatitos que buscan un hogar amoroso, recibir información sobre adopción responsable y contactar con las personas encargadas del proceso.",
        image: "photo-1514888286974-6c03e2ca1dba",
        imageAlt: "Gatito esperando conocer a su futura familia",
        date: null,
        time: null,
        price: null,
        availability: null
    },
    {
        id: "gatoccino-temporada",
        title: "Gatoccino de temporada 🎃",
        category: "temporadas",
        categoryLabel: "Temporadas",
        description: "Eventos temáticos según la época del año, como Halloween gatuno, Navidad, San Valentín o celebraciones especiales, con decoración, bebidas temáticas y actividades divertidas.",
        image: "photo-1511795409834-ef04bbd61622",
        imageAlt: "Espacio decorado para una celebración especial",
        date: null,
        time: null,
        price: null,
        availability: null
    },
    {
        id: "cumpleanos-celebraciones",
        title: "Cumpleaños y celebraciones especiales 🎂",
        category: "celebraciones",
        categoryLabel: "Celebraciones",
        description: "Un servicio para organizar encuentros pequeños y celebraciones en un ambiente acogedor, con bebidas, postres y la compañía de nuestros michis, siempre respetando su bienestar.",
        image: "photo-1464349095431-e9a21285b5f3",
        imageAlt: "Pastel para celebrar un cumpleaños",
        date: null,
        time: null,
        price: null,
        availability: null
    },
    {
        id: "talleres-creativos",
        title: "Talleres creativos con gatitos 🎨",
        category: "talleres",
        categoryLabel: "Talleres",
        description: "Actividades como dibujo, pintura, manualidades y decoración de accesorios inspirados en gatos.",
        image: "photo-1513364776144-60967b0f800f",
        imageAlt: "Materiales de pintura para un taller creativo",
        date: null,
        time: null,
        price: null,
        availability: null
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

function eventDate(eventItem) {
    if (!eventItem.date || !/^\d{4}-\d{2}-\d{2}$/.test(eventItem.date)) {
        return null;
    }

    const [year, month, day] = eventItem.date.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
        ? date
        : null;
}

function eventDateLabel(eventItem) {
    const date = eventDate(eventItem);
    return date
        ? new Intl.DateTimeFormat("es", { day: "numeric", month: "long", year: "numeric" }).format(date)
        : "Fecha por confirmar";
}

function eventMetadata(eventItem) {
    return [
        ["Fecha", eventDateLabel(eventItem)],
        ["Horario", eventItem.time || "Horario por confirmar"],
        ["Precio", eventItem.price || "Precio por confirmar"],
        ["Cupos", eventItem.availability || "Cupos por confirmar"]
    ];
}

function createEventCard(eventItem) {
    const card = document.createElement("article");
    card.className = "event-card";
    card.dataset.category = eventItem.category;

    const image = document.createElement("img");
    image.className = "event-card-image";
    image.src = photoUrl(eventItem.image);
    image.alt = eventItem.imageAlt;
    image.loading = "lazy";
    image.width = 640;
    image.height = 420;

    const content = document.createElement("div");
    content.className = "event-card-content";

    const category = document.createElement("span");
    category.className = "event-category";
    category.textContent = eventItem.categoryLabel;

    const title = document.createElement("h4");
    title.textContent = eventItem.title;

    const description = document.createElement("p");
    description.className = "event-card-description";
    description.textContent = eventItem.description;

    const metadata = document.createElement("dl");
    metadata.className = "event-card-meta";
    eventMetadata(eventItem).forEach(([label, value]) => {
        const item = document.createElement("div");
        const term = document.createElement("dt");
        term.textContent = label;
        const detail = document.createElement("dd");
        detail.textContent = value;
        item.append(term, detail);
        metadata.append(item);
    });

    const actions = document.createElement("div");
    actions.className = "event-card-actions";

    const detailsButton = document.createElement("button");
    detailsButton.className = "button button-outline";
    detailsButton.type = "button";
    detailsButton.textContent = "Ver detalles";
    detailsButton.addEventListener("click", () => openEventDetails(eventItem));

    const requestButton = document.createElement("button");
    requestButton.className = "event-request-link";
    requestButton.type = "button";
    requestButton.textContent = "Quiero participar →";
    requestButton.addEventListener("click", () => selectEventForRequest(eventItem));

    actions.append(detailsButton, requestButton);
    content.append(category, title, description, metadata, actions);
    card.append(image, content);
    return card;
}

function createUpcomingItem(eventItem) {
    const item = document.createElement("article");
    item.className = "upcoming-item";

    const date = document.createElement("span");
    date.className = "upcoming-date";
    date.textContent = eventDateLabel(eventItem);

    const title = document.createElement("h4");
    title.textContent = eventItem.title;

    const time = document.createElement("p");
    time.textContent = eventItem.time || "Horario por confirmar";

    const detailsButton = document.createElement("button");
    detailsButton.className = "upcoming-details";
    detailsButton.type = "button";
    detailsButton.textContent = "Ver detalles →";
    detailsButton.addEventListener("click", () => openEventDetails(eventItem));

    item.append(date, title, time, detailsButton);
    return item;
}

function renderGatoccinoEvents() {
    const eventGrid = document.getElementById("events-grid");
    const upcomingList = document.getElementById("upcoming-events");
    const eventChoice = document.getElementById("event-choice");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcomingEvents = gatoccinoEvents
        .map((item, index) => ({ item, index, date: eventDate(item) }))
        .filter(({ date }) => !date || date >= today)
        .sort((first, second) => {
            if (first.date && second.date) {
                return first.date - second.date || first.index - second.index;
            }
            if (first.date) {
                return -1;
            }
            if (second.date) {
                return 1;
            }
            return first.index - second.index;
        })
        .map(({ item }) => item);

    gatoccinoEvents.forEach((eventItem) => {
        eventGrid.append(createEventCard(eventItem));
        const option = document.createElement("option");
        option.value = eventItem.id;
        option.textContent = eventItem.title;
        eventChoice.append(option);
    });

    upcomingEvents.slice(0, 3).forEach((eventItem) => {
        upcomingList.append(createUpcomingItem(eventItem));
    });
}

function openEventDetails(eventItem) {
    const dialog = document.getElementById("event-details-dialog");
    const image = document.getElementById("event-dialog-image");
    image.src = photoUrl(eventItem.image);
    image.alt = eventItem.imageAlt;
    document.getElementById("event-dialog-title").textContent = eventItem.title;
    document.getElementById("event-dialog-description").textContent = eventItem.description;

    const metadata = document.getElementById("event-dialog-meta");
    metadata.replaceChildren();
    eventMetadata(eventItem).forEach(([label, value]) => {
        const item = document.createElement("li");
        item.textContent = `${label}: ${value}`;
        metadata.append(item);
    });

    document.getElementById("event-dialog-request").onclick = () => {
        dialog.close();
        selectEventForRequest(eventItem);
    };
    dialog.showModal();
}

function selectEventForRequest(eventItem) {
    const eventChoice = document.getElementById("event-choice");
    eventChoice.value = eventItem.id;
    const requestPanel = document.getElementById("solicitud-evento");
    requestPanel.scrollIntoView({ behavior: "smooth" });
    document.getElementById("event-visitor-name").focus({ preventScroll: true });
}

document.querySelectorAll(".event-filter").forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
        const selectedCategory = filterButton.dataset.eventFilter;
        document.querySelectorAll(".event-filter").forEach((button) => {
            const isActive = button === filterButton;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
        document.querySelectorAll(".event-card").forEach((card) => {
            card.hidden = selectedCategory !== "todos" && card.dataset.category !== selectedCategory;
        });
    });
});

document.querySelector(".event-dialog-close").addEventListener("click", () => {
    document.getElementById("event-details-dialog").close();
});

document.getElementById("event-request-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const selectedEvent = gatoccinoEvents.find((item) => item.id === formData.get("event"));
    if (!selectedEvent) {
        document.getElementById("event-form-feedback").textContent = "Elige una actividad para continuar.";
        return;
    }

    const subject = encodeURIComponent(`Consulta sobre ${selectedEvent.title}`);
    const body = encodeURIComponent([
        `Nombre: ${formData.get("name")}`,
        `Contacto: ${formData.get("contact")}`,
        `Evento: ${selectedEvent.title}`,
        `Participantes: ${formData.get("attendees")}`,
        "",
        "Entiendo que esta consulta no confirma una reserva; el equipo de Gatoccino debe confirmar la disponibilidad."
    ].join("\n"));
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:hola@gatoccino.com?subject=${subject}&body=${body}`;
    emailLink.target = "_blank";
    emailLink.rel = "noopener noreferrer";
    emailLink.textContent = "Enviar consulta por correo";

    const feedback = document.getElementById("event-form-feedback");
    feedback.replaceChildren(
        document.createTextNode(`Se preparó una consulta sobre ${selectedEvent.title}. Usa el enlace para enviarla por correo; la participación queda pendiente de confirmación del equipo. `),
        emailLink
    );
});

let calendarMonth = new Date();
calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1);

function renderEventsCalendar() {
    const calendar = document.getElementById("events-calendar");
    const monthHeading = document.getElementById("calendar-month");
    const selectedYear = calendarMonth.getFullYear();
    const selectedMonth = calendarMonth.getMonth();
    const monthName = new Intl.DateTimeFormat("es", { month: "long", year: "numeric" }).format(calendarMonth);
    monthHeading.textContent = monthName.charAt(0).toLocaleUpperCase("es") + monthName.slice(1);
    calendar.replaceChildren();

    ["L", "M", "X", "J", "V", "S", "D"].forEach((day) => {
        const weekday = document.createElement("span");
        weekday.className = "calendar-weekday";
        weekday.textContent = day;
        calendar.append(weekday);
    });

    const firstWeekday = (new Date(selectedYear, selectedMonth, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    for (let index = 0; index < firstWeekday; index += 1) {
        const blankDay = document.createElement("span");
        blankDay.className = "calendar-blank";
        calendar.append(blankDay);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
        const calendarDate = new Date(selectedYear, selectedMonth, day);
        const dateKey = [
            selectedYear,
            String(selectedMonth + 1).padStart(2, "0"),
            String(day).padStart(2, "0")
        ].join("-");
        const eventsOnDate = gatoccinoEvents.filter((item) => item.date === dateKey);
        const dayButton = document.createElement("button");
        dayButton.className = "calendar-day";
        dayButton.type = "button";
        dayButton.textContent = String(day);
        dayButton.setAttribute("aria-label", `${day} de ${monthName}${eventsOnDate.length ? `: ${eventsOnDate.map((item) => item.title).join(", ")}` : ""}`);
        if (eventsOnDate.length) {
            dayButton.classList.add("has-event");
        }
        dayButton.addEventListener("click", () => {
            const note = document.getElementById("calendar-note");
            note.textContent = eventsOnDate.length
                ? `El ${day} de ${monthName}: ${eventsOnDate.map((item) => item.title).join(", ")}. Consulta disponibilidad con el equipo.`
                : `No hay actividades publicadas para el ${day} de ${monthName}.`;
        });
        calendar.append(dayButton);
    }

    const scheduledEvents = gatoccinoEvents.some((item) => {
        const date = eventDate(item);
        return date && date.getFullYear() === selectedYear && date.getMonth() === selectedMonth;
    });
    document.getElementById("calendar-note").textContent = scheduledEvents
        ? "Selecciona un día marcado para consultar sus actividades."
        : "Las fechas de actividades están por confirmar.";
}

document.getElementById("calendar-previous").addEventListener("click", () => {
    calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1);
    renderEventsCalendar();
});

document.getElementById("calendar-next").addEventListener("click", () => {
    calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1);
    renderEventsCalendar();
});

renderGatoccinoEvents();
renderEventsCalendar();
