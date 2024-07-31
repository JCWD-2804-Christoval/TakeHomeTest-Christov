# Drug Order Management System
A web application developed using React with TypeScript for managing drug orders. The application includes features such as user authentication, drug catalog browsing, cart management, and order checkout. State management is handled using the Context API, and the backend services are simulated using json-server.

## Table of Contents:
* Features
* Installation
* Usage
* Folder Structure
* Contributing
* License
* Acknowledgements

## Features
* __User Authentication__: Register and log in using email and password.
* __Drug Catalog__: Browse and search for drugs.
* __Drug Details__: View detailed information about each drug.
* __Cart Management__: Add, update, or remove drugs from the cart.
* __Order Checkout__: Finalize the purchase with user details and payment information.

## Installation
Clone the repository: <br>
`git clone https://github.com/JCWD-2804-Christoval/TakeHomeTest-Christov.git` <br>
`cd drug-order-management`

Install dependencies: <br>
`npm install`

Start the json-server: <br>
`npx json-server --watch src/db.json --port 3000`

Start the React application: <br>
`npm run dev`

Open the application in your browser at `http://localhost:5173`.

## Usage
1. __Authentication__: Register a new account or log in with an existing account.
2. __Browse Drugs__: Use the home page to browse the available drugs and search for specific items.
3. __View Drug Details__: Click on a drug to see its details.
4. __Manage Cart__: Add drugs to the cart, update quantities, or remove them.
5. __Checkout__: Complete the purchase by providing shipping and payment information.

## Folder Structure
```plaintext
src/
│
├── assets/
│   ├── images/
│   └── styles/
│       ├── App.css
│       ├── Auth.css
│       ├── Cart.css
│       ├── Checkout.css
│       ├── DrugDetail.css
│       └── Home.css
│
├── components/
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Drugcard.tsx
│   ├── DrugDetail.tsx
│   ├── Home.tsx
│   └── Login.tsx
│
├── context/
│   ├── AuthContext.tsx
│   └── CartContext.tsx
│
├── pages/
│   ├── AuthPage.tsx
│   ├── HomePage.tsx
│   ├── DrugDetailPage.tsx
│   ├── CartPage.tsx
│   └── CheckoutPage.tsx
│
├── services/
│   └── api.ts
│
├── App.css
├── App.tsx
├── main.tsx
├── index.css
│
└── db.json
```

## Contributing
If you wish to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
1. Fork the Project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Acknowledgements
* React
* TypeScript
* json-server
* Vite