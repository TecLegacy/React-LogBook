//Classes in React/js
class Keshav {
  constructor() {
    this.lastName = 'kumar';
  }
  LName(value) {
    // console.log(value + this.lastName);
    return value + this.lastName;
  }

  fullName(value) {
    return this.LName(value);
  }
}
const instance = new Keshav();

const x = instance.fullName('keshav');

/**Loops - for of, for in
 *  Object.entries , values , key
 *  array.entries , values , key
 */
const lastNames = ['kumar', 'rana', 'verma'];
const commonNames = {
  india: 'aman',
  usa: 'dave',
  korea: 'ruki',
};

//For in - is iterable for arrays and objects with methods(entries,value,key)
for (const [key, prop] of Object.entries(commonNames)) {
  console.log(key);
  console.log(prop);
}

//For in - is iterable for objects
for (const key in commonNames) {
  console.log(key);
}
