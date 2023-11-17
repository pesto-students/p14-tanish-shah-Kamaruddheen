// Create WeakMap to store view counts for each product
const product = new WeakMap();
// Create WeakSet to store products added to cart
const cart = new WeakSet();

// Increment view count for product
function incrementProductViews(productId) {

  // Check if product exists in WeakMap, If not assign views as 0
  let viewCount = product.get(productId) || 0; 

  // Increment view count
  viewCount++;

  // Storing view count of that product in WeakMap
  product.set(productId, viewCount);

  console.log(`Product ID ${productId.Id} is viewed for the ${product.get(productId)} time.`);
}

// Add product to cart WeakSet
function addToCart(productId) {

  // Check if product already in cart WeakSet
  if (cart.has(productId)) {
    return "Product already in cart : " + productId.Id;
  }

  // Add new product to cart WeakSet
  cart.add(productId);
  
  return "Product added to cart : " + productId.Id;

}

// Product object
const product_obj = {
  Id: 123,
};

// Product ID 123 is viewed for the 1 time
incrementProductViews(product_obj);

// Product ID 123 is viewed for the 2 time
incrementProductViews(product_obj);

// "Product added to cart"
console.log(addToCart(product_obj));

// "Product already in cart"
console.log(addToCart(product_obj));
