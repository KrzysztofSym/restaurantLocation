
let product = document.querySelector(".products");

let productList = [
    {
        id: 1,
        name: 'Aenean eget tristiqu',
        image: "https://img.freepik.com/free-photo/grilled-beef-burger-with-cheese-fries-refreshing-cola-drink-generated-by-artificial-intelligence_25030-63071.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "5.0",
        tag: ['varius', 'eget', 'eleifend'],
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        name: 'Gift Box',
        rate: "4.0",
        tag: ['varius', 'eleifend'],
        
    },
    {
        id: 3,
        name: 'Gingerbread Cookie',
        image: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "4.5",
        tag: ['eget', 'eleifend'],
    },
    {
        id: 4,
        name: 'Snowflake Decoration',
        image: "https://img.freepik.com/premium-photo/delicious-food-fine-dining-restaurant-ultra-realistic-generative-ai_751108-3797.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "5.0",
        tag: ['eget'],
    },
    {
        id: 5,
        name: 'Star-shaped Cookie',
        image: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "3.5",
        tag: ['varius', 'eget', 'eleifend'],
    },
    {
        id: 6,
        name: "Santa's Hat",
        image: "https://img.freepik.com/premium-photo/shrimp-arugula-salad-with-tomato-parmesan_219193-7683.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "4.5",
        tag: ['varius', 'eget'],
    },
    {
        id: 7,
        name: 'Candy Cane',
        image: "https://img.freepik.com/premium-photo/big-shawarma-kebab-fried-fire-street-food-sandwich-gyro-fresh-roll-lavash-pita-bread-chicken-beef-shawarma-3d-illustration_86390-9780.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=sph",
        rate: "3.5",
        tag: ['varius', 'eleifend'],
    },
    {
        id: 8,
        name: 'Snowman Decoration',
        image: "https://img.freepik.com/free-photo/side-view-lula-kebab-with-red-onions-sumakh-grilled-green-chili-peppers-wooden-board-tablejpg_140725-11482.jpg?w=740&t=st=1705661821~exp=1705662421~hmac=12d123c6ae0d1f8043d0c7c8d7dabd345481cc4d196580dff77b220f9a9e7b69",
        rate: "3.5",
        tag: ['varius', 'eget'],
    },
    {
        id: 9,
        name: 'Christmas Ball',
        image: "https://img.freepik.com/premium-photo/olympus-digital-camera_980733-11.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "4.0",
        tag: ['eleifend'],
    },
    {
        id: 10,
        name: 'Christmas Red Socks',
        image: "https://img.freepik.com/free-photo/chicken-gardenblue-with-vegetables-plate_140725-4541.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rate: "3.5",
        tag: ['varius', 'eget', 'eleifend'],
    },
    {
        id: 11,
        name: 'Red Ribbon',
        image: "https://img.freepik.com/free-photo/pasta-with-cheese-topped-with-basil_140725-3803.jpg?size=626&ext=jpg&ga=GA1.1.1515467990.1705658998&semt=ais",
        rete: "4.5",
        tag: ['varius'],
    },
    {
        id: 12,
        name: 'Christmas Tree Cookie',
        image: "https://img.freepik.com/free-photo/side-view-doner-plate-with-french-fries-tomato-fresh-cucumber-yogurt-bread-table_141793-4969.jpg?w=996&t=st=1705661809~exp=1705662409~hmac=c9680c62866bbcea805ea5a35fb32585f0ae714458fb44802027433524682f26",
        rate: "3.0",
        tag: ['eget', 'eleifend'],
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
        
                      
            `;
        product.appendChild(newDiv);
    })
}
initApp();

let addC = document.querySelectorAll(".addCart");


addC.forEach(element=>{
    element.addEventListener("click", ()=>{
    if (element.classList.contains("active")) {
        element.classList.remove("active");
     
    } else {
    element.classList.add("active");
console.log("ok");
}})});
    
