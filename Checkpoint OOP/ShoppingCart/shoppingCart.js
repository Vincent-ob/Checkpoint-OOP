// Step 1: Create a Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Step 2: Create a ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    totalPrice() {
        return this.product.price * this.quantity;
    }
}

// Step 3: Create a ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = []; // Array to hold shopping cart items
    }

    // Method to add items to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Increase quantity if the item already exists
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem); // Add new item to the cart
        }
    }

    // Method to remove items from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get the total of items inside the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.totalPrice(), 0);
    }

    // Method to display cart items
    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.totalPrice().toFixed(2)}`);
        });
    }
}

// Step 4: Testing the Shopping Cart
// Create products
const product1 = new Product(1, "Apple", 0.99);
const product2 = new Product(2, "Banana", 0.59);
const product3 = new Product(3, "Orange", 1.29);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 3); // Add 3 Apples
cart.addItem(product2, 2); // Add 2 Bananas
cart.addItem(product3, 1); // Add 1 Orange

// Display the cart
console.log("Cart Items:");
cart.displayCartItems();
console.log(`Total: $${cart.getTotal().toFixed(2)}`);

// Remove an item from the cart
cart.removeItem(2); // Remove Bananas

// Display the cart again
console.log("\nCart Items After Removal:");
cart.displayCartItems();
console.log(`Total: $${cart.getTotal().toFixed(2)}`);