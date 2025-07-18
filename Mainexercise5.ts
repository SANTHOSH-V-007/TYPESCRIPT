import { product } from "./productexercise5";
import { Cart } from "./cartexercise5";
  let product1 = new product(1, 'Laptop', 999.99);
 let product2 = new product(2, 'Mouse', 19.99);
 let product3 = new product(3, 'Keyboard', 49.99);
 
 let myobj = new Cart();
 
 myobj.additems(product1);
 myobj.additems(product2);
 myobj.additems(product3);
 
 
 console.log(myobj.getProducts());
 
myobj.removeProduct(2);
 
console.log(myobj.getProducts());
 console.log(myobj.getTotal());
 console.log(myobj.getProducts());