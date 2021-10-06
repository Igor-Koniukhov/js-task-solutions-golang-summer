let products =[
    {
        id: 22,
        image: "https://roll-club.kh.ua/wp-content/uploads/2021/04/okean-1.jpg.webp",
        ingredients: [
            "Corn",
            "Onion",
            "Mushrooms",
            "Bavarian sausages"
        ],
        name: "Pizza Pepperoni with tomatoes",
        price: 2.42,
        type: "pizza",
        suppliers_id: 8
    },
    {
        id: 23,
        image: "https://roll-club.kh.ua/wp-content/uploads/2021/04/4-mjasa-1.jpg.webp",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice",
            "Cucumber",
            "Cream cheese",
            "Unagi sauce"
        ],
        name: "Pizza Texas",
        price: 3.3,
        type: "pizza",
        suppliers_id: 8
    },
    {
        id: 24,
        image: "https://roll-club.kh.ua/wp-content/uploads/2021/04/rostbif-v-tunce-1.jpg.webp",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice"
        ],
        name: "Pizza Hawaiian",
        price: 4.88,
        type: "pizza",
        suppliers_id: 8
    },
    {
        id: 25,
        image: "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/49e75c35-6fff-4a0f-8d6a-959cf4721c74_Medium_.jpg",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice",
            "Cucumber"
        ],
        name: "Original burger",
        price: 5.62,
        type: "burger",
        suppliers_id: 9
    },
    {
        id: 26,
        image: "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/93bce037-709e-41a0-9beb-ab3670663b40_Medium_.jpg",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice",
            "Cucumber",
            "Cream cheese"
        ],
        name: "Crispy Chicken burger",
        price: 2.93,
        type: "burger",
        suppliers_id: 9
    },
    {
        id: 27,
        image: "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/ba3a1ca2-2ec6-4cf4-a843-f7f0fc0f175a_Medium_.jpg",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice",
            "Cucumber"
        ],
        name: "Bacon Cheese Burger",
        price: 7.58,
        type: "burger",
        suppliers_id: 9
    },
    {
        id: 28,
        image: "https://roll-club.kh.ua/wp-content/uploads/2019/03/kapricheza.jpg.webp",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice",
            "Cucumber"
        ],
        name: "Pizza Ocean",
        price: 3.04,
        type: "pizza",
        suppliers_id: 10
    },
    {
        id: 29,
        image: "https://roll-club.kh.ua/wp-content/uploads/2015/09/4-syra.jpg.webp",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice",
            "Cucumber",
            "Cream cheese",
            "Unagi sauce"
        ],
        name: "Pizza Florida",
        price: 6.63,
        type: "pizza",
        suppliers_id: 10
    },
    {
        id: 30,
        image: "https://roll-club.kh.ua/wp-content/uploads/2014/08/ukrainskaja.jpg.webp",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice"
        ],
        name: "Pizza Italiano",
        price: 5.59,
        type: "pizza",
        suppliers_id: 10
    },
    {
        id: 31,
        image: "https://ninjasushi.com.ua/img/452.png",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice",
            "Cucumber",
            "Cream cheese"
        ],
        name: "Philadelphia with salmon",
        price: 5.44,
        type: "sushi",
        suppliers_id: 11
    },
    {
        id: 32,
        image: "https://ninjasushi.com.ua/img/102-600x600.png",
        ingredients: [
            "Salmon",
            "Nori",
            "Rice",
            "Cucumber",
            "Cream cheese",
            "Unagi sauce"
        ],
        name: "Unagi Philadelphia",
        price: 4.57,
        type: "sushi",
        suppliers_id: 11
    },
    {
        id: 33,
        image: "https://roll-club.kh.ua/wp-content/uploads/2014/08/ukrainskaja.jpg.webp",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar",
            "Milk",
            "Cream cheese",
            "Unagi sauce",
            "Japanese tamago"
        ],
        name: "Himawari",
        price: 6.39,
        type: "sushi",
        suppliers_id: 11
    },
    {
        id: 34,
        image: "https://target.scene7.com/is/image/Target/GUEST_9066181d-e570-4eb1-b85d-1c8a547857fe?wid=1416&hei=1416&fmt=webp",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar"
        ],
        name: "Swedish Meatballs",
        price: 5.59,
        type: "frozen_meal",
        suppliers_id: 12
    },
    {
        id: 35,
        image: "https://target.scene7.com/is/image/Target/GUEST_7c640617-96cd-4236-96f0-38a995828861?wid=1416&hei=1416&fmt=webp",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar"
        ],
        name: "Unwrapped Burrito Bowl",
        price: 7.54,
        type: "frozen_meal",
        suppliers_id: 12
    },
    {
        id: 36,
        image: "https://target.scene7.com/is/image/Target/GUEST_dd195641-5a34-4be1-9e14-c4632ee5942e?wid=1416&hei=1416&fmt=webp",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar"
        ],
        name: "Tortellini Bowls",
        price: 2.52,
        type: "frozen_meal",
        suppliers_id: 12
    },
    {
        id: 37,
        image: "https://i5.walmartimages.com/asr/64dc7c05-7d2c-4e29-854d-bada644f019e_1.f4de24032b1a5f48063903f488213f99.jpeg",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar",
            "Milk"
        ],
        name: "Chicken Pot Pie",
        price: 4.16,
        type: "frozen_meal",
        suppliers_id: 13
    },
    {
        id: 38,
        image: "https://i5.walmartimages.com/asr/94fb73ff-59ce-48c2-acd3-42bbb3c52e67.56499b84aa3d79c7a9c51f29da5c3626.png",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar",
            "Milk"
        ],
        name: "Beef & Bean Green Chili Burritos",
        price: 7.81,
        type: "appetizer",
        suppliers_id: 13
    },
    {
        id: 39,
        image: "https://i5.walmartimages.com/asr/f490a06c-4ea2-41f5-9151-a05449e93e43.64a407ec5ca286d97dd37cdede9f51fc.jpeg",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar"
        ],
        name: "Peanut Butter & Grape Jelly Sandwich",
        price: 2.66,
        type: "appetizer",
        suppliers_id: 13
    },
    {
        id: 40,
        image: "https://i5.walmartimages.com/asr/7be23ae2-0733-4fe1-a13c-13c1121db61a.37700bee4e0c25b6a3f93496ae17c7c7.jpeg",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar"
        ],
        name: "Angel Food Cake",
        price: 7.44,
        type: "dessert",
        suppliers_id: 14
    },
    {
        id: 41,
        image: "https://i5.walmartimages.com/asr/7df68f47-78dc-4308-8a46-2ca7e1fa50e6.b2973bca56a71b9dc3e773ee08aeb1a6.jpeg",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar"
        ],
        name: "New York Style Cheesecake",
        price: 6.92,
        type: "dessert",
        suppliers_id: 14
    },
    {
        id: 42,
        image: "https://i5.walmartimages.com/asr/7bd145de-7975-4c04-842e-188a5a0be79d_2.57a9e072cd4d529d16ccd9125f6a035d.jpeg",
        ingredients: [
            "Potatoes",
            "Flour",
            "Sugar",
            "Milk"
        ],
        name: "Sweet Potato Pie",
        price: 4.47,
        type: "pastry",
        suppliers_id: 14
    }
]

localStorage.setItem('products', JSON.stringify(products))