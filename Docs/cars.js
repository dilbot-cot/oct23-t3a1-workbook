/**
 * Defines a class called 'Car' to model a car's basic properties
 *
 * @class Car
 * @typedef {Car}
 */
class Car {
    /**
     * Creates an instance of Car.
     *
     * @constructor
     * @param {string} brand The brand name of the car.
     */
    constructor(brand) {
      this.carname = brand; // 'carname' property holds the brand of the car
    }
    /**
     * Returns a string representation of the Car object
     *
     * @returns {string}
     */
    present() {
      return 'I have a ' + this.carname;
    }
}
  
  
  /**
   * Defines a class called 'Model' that extends the 'Car' to include model year information
   *
   * @class Model
   * @typedef {Model}
   * @extends {Car}
   */
class Model extends Car {
    /**
     * Creates an instance of Model.
     *
     * @constructor
     * @param {string} brand The brand name of the car
     * @param {number} mod The model year of the car
     */
    constructor(brand, mod) {
      super(brand); // Call to parent class 'Car' constructor
      this.model = mod; // 'model' propery holds the model year
    }   
    /**
     * returns a string that includes both the make and the model year
     *
     * @returns {string} Description of the car with model year
     */
    show() {
      return this.present() + ', it was made in ' + this.model;
    }
}
  
// Initialises an array of car makes
let makes = ["Ford", "Holden", "Toyota"]
// Initialises an array of model years from 1980 to 2019
let models = Array.from(new Array(40), (x,i) => i + 1980)
  
  
/**
 * Function to generate a random integer within a defined range [min, max]
 *
 * @param {number} min the minimum value in the range
 * @param {number} max the maximum value in the range
 * @returns {number} A random integer between min and max (inclusive)
 */
function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min); 
}
  
// Loop through each model year
for (model of models) {
    // Randomly choose a make from the 'makes' array
    make = makes[randomIntFromInterval(0,makes.length-1)]
    // Randomly choose a model year from the 'models' array
    model = models[randomIntFromInterval(0,makes.length-1)]
  
    // Create a new Model object with the random make and model year
    mycar = new Model(make, model);
    // display the car's description
    console.log(mycar.show())
}