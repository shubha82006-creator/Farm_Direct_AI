const API = "http://127.0.0.1:8000";

let cart = 0;

// Switch screens
function showScreen(id){
    document.querySelectorAll(".screen").forEach(s=>{
        s.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

// AI Price Prediction
async function calculatePrice(){

    const crop = document.getElementById("crop").value;
    const qty = parseInt(document.getElementById("qty").value);

    document.getElementById("qtyValue").innerHTML = qty + " kg";

    const response = await fetch(API + "/predict",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            farmer:"Ramesh",
            crop:crop,
            quantity:qty
        })
    });

    const data = await response.json();

    document.getElementById("price").innerHTML =
        "₹" + data.fair_price;

    document.getElementById("earning").innerHTML =
        "Estimated Earnings : ₹" + data.earnings;
}

async function uploadHarvest(){

    const farmer = document.getElementById("farmerName").value;
    const crop = document.getElementById("crop").value;
    const qty = parseInt(document.getElementById("qty").value);

    const response = await fetch("http://127.0.0.1:8000/upload",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            farmer:farmer,
            crop:crop,
            quantity:qty
        })
    });

    const data = await response.json();

    alert(data.status);

    // Load all uploaded crops
    await loadMarket();

    // Open consumer marketplace
    showScreen("market");
}
async function loadMarket(){

    const response = await fetch("http://127.0.0.1:8000/market");
    const crops = await response.json();

    const list = document.getElementById("marketList");
    list.innerHTML = "";

    crops.forEach(item=>{

        list.innerHTML += `
        <div class="product">
            <h2>🌾 ${item.crop}</h2>
            <p><b>Farmer:</b> ${item.farmer}</p>
            <p><b>Available:</b> ${item.quantity} kg</p>
            <h3>₹${item.price}/kg</h3>

            <button onclick="addCart(${item.price})">
                Add to Cart
            </button>
        </div>`;
    });

}

// Cart
let Cart = 0;
let total = 20;

function addCart(price){

    cart++;
    total += price;

    document.getElementById("cart").innerHTML =
        `Cart : ${cart} item(s)`;

    document.getElementById("total").innerHTML =
        `Total : ₹${total}`;
}

// Restart
function restart(){

    cart = 0;

    calculatePrice();

    showScreen("welcome");
}

calculatePrice();

async function loadMarket() {
    const response = await fetch("http://127.0.0.1:8000/market");
    const data = await response.json();

    const list = document.getElementById("marketList");
    list.innerHTML = "";

    data.forEach(item => {
        list.innerHTML += `
        <div class="product">
            <h2>🌾 ${item.crop}</h2>
            <p>Farmer: ${item.farmer}</p>
            <p>Available: ${item.quantity} kg</p>
            <h3>₹${item.price}/kg</h3>
            <button onclick="addCart(${item.price})">Add to Cart</button>
        </div>`;
    });
}
