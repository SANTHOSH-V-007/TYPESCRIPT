var User = /** @class */ (function () {
    function User() {
        this.userid = "admin@gmail.com";
        this.upass = "santhosh123";
    }
    Object.defineProperty(User.prototype, "_userid", {
        get: function () {
            return this.userid;
        },
        set: function (val) {
            this.userid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_upass", {
        get: function () {
            return this.upass;
        },
        set: function (val) {
            this.upass = val;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.userDetails = function () {
        return "UserId:".concat(this.userid, " password:").concat(this.upass);
    };
    return User;
}());
var userObj = new User();
console.log(userObj._userid);
console.log(userObj._upass);
userObj._userid = 'king@gmail.com';
console.log(userObj._userid);
userObj._upass = 'thala123';
console.log(userObj._upass);
