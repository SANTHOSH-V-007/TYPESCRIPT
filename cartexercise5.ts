import { product } from "./productexercise5";
 export class Cart {
    products :product [] = [];
 
additems(product:product){
    this.products.push(product);
 
}
removeProduct(productId: number) {
    this.products = this.products.filter(product => product.Id !== productId);
}
getTotal(): number {
    return this.products.reduce((total, product) => total + product.Price, 0);
}
getProducts(): product[] {
    return this.products;
}
 
 
}