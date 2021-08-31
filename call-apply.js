const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDay: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('here', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal Golam'
}
// call
kibria.treatDay.call(heroBalam, 500, 100, 50)
kibria.treatDay.call(heroBalam, 300, 50, 30);

kibria.treatDay.apply(heroBalam, [500, 100, 50]);
kibria.treatDay.apply(heroBalam, [1000, 200, 100]);

kibria.treatDay.apply(normalGolam, [700, 100, 70]);