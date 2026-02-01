var container = document.getElementById("productContainer");
var sortSelect = document.getElementById("sortSelect");
var categorySelect = document.getElementById("categorySelect");

var products = [
    {name:"Laptop", price:60000, rating:4.5, category:"Electronics"},
    {name:"Mobile", price:20000, rating:4.2, category:"Electronics"},
    {name:"Headphones", price:2000, rating:4.1, category:"Electronics"},
    {name:"Watch", price:3500, rating:4.0, category:"Electronics"},

    {name:"Tshirt", price:500, rating:3.8, category:"Clothing"},
    {name:"Jeans", price:1200, rating:4.3, category:"Clothing"},
    {name:"Jacket", price:2500, rating:4.6, category:"Clothing"},
    {name:"Shoes", price:3000, rating:4.4, category:"Clothing"},

    {name:"Novel", price:300, rating:4.7, category:"Books"},
    {name:"Dictionary", price:700, rating:4.0, category:"Books"},
    {name:"Notebook", price:80, rating:3.9, category:"Books"},
    {name:"Pen", price:150, rating:4.2, category:"Books"},

    {name:"Chair", price:1500, rating:4.1, category:"Home"},
    {name:"Table", price:4000, rating:4.5, category:"Home"},
    {name:"Lamp", price:900, rating:3.7, category:"Home"},
    {name:"Fan", price:2200, rating:4.3, category:"Home"},

    {name:"Keyboard", price:800, rating:4.4, category:"Electronics"},
    {name:"Mouse", price:400, rating:4.1, category:"Electronics"},
    {name:"Shirt", price:900, rating:3.9, category:"Clothing"},
    {name:"Bottle", price:250, rating:4.2, category:"Home"}
];

function display(list) {

    container.innerHTML = "";

    for (var i = 0; i < list.length; i++) {

        var p = list[i];

        var div = document.createElement("div");
        div.className = "card";

        div.innerHTML =
            "<h4>" + p.name + "</h4>" +
            "<p>Price : " + p.price + "</p>" +
            "<p>Rating : " + p.rating + "</p>" +
            "<p>" + p.category + "</p>";

        container.appendChild(div);
    }
}

function update() {

    var temp = [];

    for (var i = 0; i < products.length; i++) {
        temp.push(products[i]);
    }

    var cat = categorySelect.value;

    if (cat != "all") {
        var newList = [];

        for (var i = 0; i < temp.length; i++) {
            if (temp[i].category == cat) {
                newList.push(temp[i]);
            }
        }

        temp = newList;
    }

    var sort = sortSelect.value;

    if (sort == "priceLow") temp.sort(function(a,b){ return a.price - b.price; });
    else if (sort == "priceHigh") temp.sort(function(a,b){ return b.price - a.price; });
    else if (sort == "nameAZ") temp.sort(function(a,b){ return a.name.localeCompare(b.name); });
    else if (sort == "nameZA") temp.sort(function(a,b){ return b.name.localeCompare(a.name); });
    else if (sort == "ratingLow") temp.sort(function(a,b){ return a.rating - b.rating; });
    else if (sort == "ratingHigh") temp.sort(function(a,b){ return b.rating - a.rating; });

    display(temp);
}

sortSelect.addEventListener("change", update);
categorySelect.addEventListener("change", update);

display(products);
