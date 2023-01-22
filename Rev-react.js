//Classes in React/js

class Keshav {
  constructor() {
    this.lastName = 'kumar';
  }
  LName(value) {
    console.log(value + this.lastName);
    return value + this.lastName;
  }

  fullName(value) {
    return this.LName(value);
  }
}
const instance = new Keshav();

const x = instance.fullName('keshav');
console.log(x);
