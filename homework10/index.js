class Plant {
    constructor(growth, age) {
        this.growth = growth;
        this.age = age;
        
    }
    grow() {
        this.growth = 10;
        console.log(`Роза выросла на ${this.growth} см`)
    }
}

class Rose extends Plant{
    constructor(growth, age, numberOfFlowers) {
        super(growth, age)
        this.numberOfFlowers = numberOfFlowers
    }

}
const rose = new Plant(15, "год")
console.log(rose)
rose.grow()