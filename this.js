// console.log(this);
const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDayArrow: () => {
        console.log(this);
    },
    treatDayInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDay: function (expense) {
        this.money = this.money - expense;
        console.log('here', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

function add() {
    console.log(this);
}
