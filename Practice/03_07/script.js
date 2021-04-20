/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const guitar = {
    name : "Taylor 414ce",
    acoustic : true,
    electric : true,
    isActive : false,
    color : "natural",
    strings : 6,
    switchToElectric : function(switchState){
        this.isActive = true;
    },

}
const guitarTwo = {
    name : "Taylor 814ce",
    acoustic : true,
    electric : true,
    isActive : false,
    color : "natural",
    strings : 12,
    switchToElectric : function(switchState){
        this.isActive = true;
    },
}
