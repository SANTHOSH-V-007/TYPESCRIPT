var checkNumber = function (num) {
    return (num % 2 == 0) ? "".concat(num, " even number") : "".concat(num, " odd number");
};
console.log(checkNumber(10));
console.log(checkNumber(9));
