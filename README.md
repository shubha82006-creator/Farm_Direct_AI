# 🌾 Farm Direct AI

### AI-Powered Direct Farm To Fam Marketplace

Farm Direct AI is a smart digital marketplace designed to connect farmers directly with consumers, reducing the dependency on intermediaries and helping farmers receive better returns for their produce.

The platform combines **AI-based price suggestions, direct product listing, order placement, logistics tracking, and secure payment** into a single system.

---

## 🚀 Project Overview

Farmers often depend on multiple intermediaries to sell their agricultural products. This can reduce their earnings while increasing the final price paid by consumers.

Farm Direct AI provides a direct digital connection between farmers and consumers.

### 🎯 Objectives

- Connect farmers directly with consumers
- Reduce dependency on intermediaries
- Help farmers make informed pricing decisions
- Provide transparent product information
- Enable direct order placement
- Support logistics and delivery tracking
- Provide secure payment and settlement
- Make the platform simple and accessible

---

## 🏗️ System Architecture

The platform follows the following workflow:

```text
Farmer Registration & Verification
              ↓
       Product Listing
              ↓
AI Based Demand & Price Suggestion
              ↓
      Direct Order Placement
              ↓
   Logistics & Delivery Tracking
              ↓
    Secure Payment & Settlement

    👨‍🌾 Farmer Module

Farmers can:

Register on the platform
Add their agricultural products
Enter available quantity
Get an AI-based fair price suggestion
Publish products to the marketplace
View their listed products
Manage available inventory
Edit product information
Remove products when required
🛒 Consumer Module

Consumers can:

Browse fresh agricultural products
Search for products
Filter products by category
View farmer information
View available quantity and price
Add products to cart
Change cart quantities
Place orders
Select payment methods
Track orders
🤖 AI-Based Price Suggestion

Farm Direct AI provides a price recommendation based on:

Crop type
Available quantity
Market-oriented base pricing
Quantity-based price adjustment

The system provides a suggested fair price and estimates the farmer's potential earnings.

Example:

Crop: Tomato
Quantity: 120 kg

AI Suggested Price: ₹32/kg

Estimated Earnings:
120 × ₹32 = ₹3,840
📦 Logistics & Delivery Tracking

After an order is placed, the system provides an order tracking flow.

Order Placed
     ↓
Order Confirmed
     ↓
Preparing for Pickup
     ↓
Picked Up
     ↓
In Transit
     ↓
Delivered

This provides transparency to consumers regarding their order status.

💳 Secure Payment & Settlement

The prototype supports multiple payment options:

UPI
Card
Cash on Delivery

The payment flow is designed to provide a simple and transparent checkout experience.

🌐 Multilingual Support

The application supports multiple languages to make the platform more accessible.

Currently supported:

🇬🇧 English
🇮🇳 Kannada
🇮🇳 Hindi
🎙️ Voice Assistance

Farm Direct AI includes voice interaction using browser-based speech capabilities.

This can help users interact with the application without relying entirely on typing.

🛠️ Technologies Used
Frontend
HTML5
CSS3
JavaScript
Web Speech API
Local Storage
Backend
Python
FastAPI
SQLAlchemy
SQLite
Pydantic
Uvicorn
AI / Data Processing
Python-based price prediction logic
Crop and quantity-based pricing
📁 Project Structure
Farm_Direct_AI/
│
├── frontend/
│   └── index.html
│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── price_model.py
│   └── farm.db
│
└── README.md
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/shubha82006-creator/Farm_Direct_AI.git
2. Open the project
cd Farm_Direct_AI
🔧 Backend Setup

Navigate to the backend folder:

cd backend

Install the required packages:

pip install fastapi uvicorn sqlalchemy pydantic

Start the FastAPI server:

python -m uvicorn app:app --reload

The backend will run at:

http://127.0.0.1:8000

API documentation:

http://127.0.0.1:8000/docs
💻 Frontend Setup

Open:

frontend/index.html

You can run the frontend using VS Code Live Server.

Make sure the backend server is running when using features that communicate with the API.

🔌 API Endpoints
Home
GET /

Checks whether the backend is running.

AI Price Prediction
POST /predict

Returns:

Fair price
Estimated earnings
Product Upload
POST /upload

Stores a farmer's product listing.

Marketplace
GET /market

Returns available crop listings stored in the database.

🗄️ Database

The backend uses SQLite for storing farmer product listings.

The database is automatically created as:

farm.db

The product information includes:

Farmer
Crop
Quantity
Price
🌟 Key Features
Feature	Description
👨‍🌾 Farmer Registration	Register farmers on the platform
🌱 Product Listing	Farmers can list agricultural products
🤖 AI Price Suggestion	Suggests a fair price
🛒 Direct Marketplace	Consumers buy directly from farmers
🔎 Search & Categories	Easily find products
📦 Order Tracking	Track order progress
💳 Payment	UPI, Card and COD
🎙️ Voice Assistance	Voice-based interaction
🌐 Multilingual	English, Kannada and Hindi
📊 Inventory Management	Manage available stock
🔐 Transparency & Trust

Farm Direct AI focuses on creating a transparent connection between farmers and consumers.

Consumers can see:

Product
Farmer
Location
Available quantity
Price

This helps build trust and provides better visibility into the source of agricultural products.

🎯 Social Impact

Farm Direct AI aims to:

Improve farmer earning potential
Reduce unnecessary intermediaries
Improve price transparency
Give consumers direct access to fresh produce
Support digital inclusion
Encourage technology adoption in agriculture
🔮 Future Enhancements

Future versions can include:

Real-time market price integration
Advanced demand forecasting
Machine-learning based price prediction
Weather-based crop insights
Crop disease detection
GPS-based logistics optimization
Real-time delivery tracking
Digital farmer verification
Online payment gateway integration
Cloud deployment
Mobile application
Regional language expansion
👥 Target Users
Farmers

Farmers can directly list and sell their agricultural produce.

Consumers

Consumers can discover and purchase fresh produce directly from farmers.

Delivery Partners

Delivery partners can manage pickup and delivery operations.

📌 Project Status

Prototype / SIH 2026 Project

The current version demonstrates the core Farm Direct AI marketplace workflow and provides a foundation for further AI, logistics, payment, and cloud integration.

👩‍💻 Developer

Shubhamangala C

B.E. Information Science Engineering
Garden City University, Bengaluru

📜 License

This project is developed for educational, innovation, and hackathon purposes.


### Then push the README

In your project folder:

```powershell
cd "C:\Users\flipkart\OneDrive\Desktop\Farm Direct AI"

git add README.md
git commit -m "Add project README"
git push origin main

