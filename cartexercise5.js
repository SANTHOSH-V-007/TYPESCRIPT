"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.additems = function (product) {
        this.products.push(product);
    };
    Cart.prototype.removeProduct = function (productId) {
        this.products = this.products.filter(function (product) { return product.Id !== productId; });
    };
    Cart.prototype.getTotal = function () {
        return this.products.reduce(function (total, product) { return total + product.Price; }, 0);
    };
    Cart.prototype.getProducts = function () {
        return this.products;
    };
    return Cart;
}());
exports.Cart = Cart;
