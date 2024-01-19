
let product = document.querySelector(".products");

let productList = [
    {
        id: 1,
        name: 'Aenean eget tristiqu',
        image: "https://img.freepik.com/free-photo/grilled-beef-burger-with-cheese-fries-refreshing-cola-drink-generated-by-artificial-intelligence_25030-63071.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "5.0",
        tag: ['varius', 'eget', 'eleifend'],
        distance: "1.8"
    },
    {
        id: 2,
        name: 'Non interdum',
        image: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "4.0",
        tag: ['varius', 'eleifend'],
        distance: "2.2"
        
    },
    {
        id: 3,
        name: 'Aenean eget tristiqu',
        image: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "4.5",
        tag: ['eget', 'eleifend'],
        distance: "1.8"
    },
    {
        id: 4,
        name: 'Nibh',
        image: "https://img.freepik.com/premium-photo/delicious-food-fine-dining-restaurant-ultra-realistic-generative-ai_751108-3797.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "5.0",
        tag: ['eget'],
        distance: "2.6"
    },
    {
        id: 5,
        name: 'Malesuada quic',
        image: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "3.5",
        tag: ['varius', 'eget', 'eleifend'],
        distance: "3.5"
    },
    {
        id: 6,
        name: "Porta id",
        image: "https://img.freepik.com/premium-photo/shrimp-arugula-salad-with-tomato-parmesan_219193-7683.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "4.5",
        tag: ['varius', 'eget'],
        distance: "1.2"
    },
    {
        id: 7,
        name: 'Wrapper',
        image: "https://img.freepik.com/premium-photo/big-shawarma-kebab-fried-fire-street-food-sandwich-gyro-fresh-roll-lavash-pita-bread-chicken-beef-shawarma-3d-illustration_86390-9780.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "3.5",
        tag: ['varius', 'eleifend'],
        distance: "1.4"
    },
    {
        id: 8,
        name: 'Meat Decoration',
        image: "https://img.freepik.com/free-photo/side-view-lula-kebab-with-red-onions-sumakh-grilled-green-chili-peppers-wooden-board-tablejpg_140725-11482.jpg?w=740&t=st=1705661821~exp=1705662421~hmac=12d123c6ae0d1f8043d0c7c8d7dabd345481cc4d196580dff77b220f9a9e7b69",
        rate: "3.5",
        tag: ['varius', 'eget'],
        distance: "2.8"
    },
    {
        id: 9,
        name: 'Suvenir',
        image: "https://img.freepik.com/premium-photo/olympus-digital-camera_980733-11.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "4.0",
        tag: ['eleifend'],
        distance: "1.9"
    },
    {
        id: 10,
        name: 'Red surprise',
        image: "https://img.freepik.com/free-photo/chicken-gardenblue-with-vegetables-plate_140725-4541.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "3.5",
        tag: ['varius', 'eget', 'eleifend'],
        distance: "2.8"
    },
    {
        id: 11,
        name: 'Shock plate',
        image: "https://img.freepik.com/free-photo/pasta-with-cheese-topped-with-basil_140725-3803.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "4.5",
        tag: ['varius'],
        distance: "3.9"
    },
    {
        id: 12,
        name: 'Full plate',
        image: "https://img.freepik.com/free-photo/side-view-doner-plate-with-french-fries-tomato-fresh-cucumber-yogurt-bread-table_141793-4969.jpg?w=996&t=st=1705661809~exp=1705662409~hmac=c9680c62866bbcea805ea5a35fb32585f0ae714458fb44802027433524682f26",
        rate: "3.0",
        tag: ['eget', 'eleifend'],
        distance: "2.1"
    },
]

let products = [];
function initApp() {
    productList.forEach((value, key) =>{
         let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        let discountValue = value.discount || ''; // Default to an empty string if discount is not provided
        let discountHtml = value.discount ? `<div class="discount">${discountValue}</div>` : '';
              
        newDiv.innerHTML = `
            <div class="meal">
                <div class="picture">
                    <img src="${value.image}">
                </div>
                <div class="name">
                    <h4>${value.name}</h4>
                    <i data-star="${value.rate}"></i>
                    <div class="tag">
                        ${value.tag && value.tag.length ? value.tag.map(tagValue => `<p>${tagValue}</p>`).join('') : ''}
                    </div>
                </div>
                <div class="direction">
                    <span class="material-symbols-outlined">turn_right</span>
                    <p>${value.distance} km</p>
                </div>
            </div>
            <div class="bookmark">
                <div class="phone">
                    <i class="fa-solid fa-phone"></i>
                    <p>Call</p>
                </div>
                <div class="tags">
                    <i class="fa-solid fa-bookmark"></i>
                    <p>Bookmark</p>
                </div>
            </div>
                      
            `;
        product.appendChild(newDiv);
    })
}
initApp();


let items = document.querySelectorAll(".item");

items.forEach(item => {
    let meal = item.querySelector(".meal");
    let bookmark = item.querySelector(".bookmark");

    meal.addEventListener("click", () => {
        // Remove "active" class from all meals within items
        items.forEach(i => {
            let m = i.querySelector(".meal");
            if (m !== meal) {
                m.classList.remove("active");
                i.querySelector(".bookmark").classList.remove("active");
            }
        });

        // Toggle "active" class for the clicked meal
        meal.classList.toggle("active");

        // Update the bookmark's "active" class to match the meal's state
        bookmark.classList.toggle("active", meal.classList.contains("active"));

        console.log("ok");
    });
});



    
