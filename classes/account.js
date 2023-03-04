class Account {
    constructor(name) {
        this.name = name;
    }

    say_Hello() {
        console.log(this.name);
    }
}

module.exports = Account;