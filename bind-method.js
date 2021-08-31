const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
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
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal Golam'
}

kibria.treatDay(100);
const heroTreatDey = kibria.treatDay.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
kibria.treatDay(400);
const normalTreatDay = kibria.treatDay.bind(normalGolam);
normalTreatDay(2000);