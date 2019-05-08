/*  
 * Objects - containers for storing variables (properties) and functions (called methods) 
 *          thematically related to each other for easier re-using
 *          
 *  Class (constructor function)
 *          Shortly class is a form for creating objects.
 *          A form like that is used to collect objects into one "class".
 *          You can create because of it many different from each other objects
 *          but with the same properties and methods.
 *                    
 */

var div = document.getElementById("test");

div.innerHTML = "this is new text";
/*
var person = {
    name: "Arek", 
    surname: "Wlodarczyk",
    age: 15,
    isAdult: function()
    {
        if (this.age < 18)
            return false;
        
        return true;
    },
    toString: function()
    {
        return this.name + " " + this.surname;
    }
}; 

AJAX
PHP
MYSQL
*/

function person(name, surname, age)
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isAdult = function()
    {
        if (this.age < 18)
            return false;
        
        return true;
    };
    this.toString = function()
    {      
        return this.name + " " + this.surname + " AGE: " + this.age;
    };
}

var x = new person("Arek", "Wlodarczyk", "39");
var y = new person("Viola", "Wlodarczyk", "51");
var z = new person("Agness", "Wlodarczyk", "22");

div.innerHTML = x + "<br>" + y + "<br>" + z; //["age"]