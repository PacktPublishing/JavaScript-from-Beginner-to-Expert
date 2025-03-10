/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//VARIABLE
var VAT = 12;

var calculatedVAT = (1 + VAT * 1/100);
var netPriceOfShoes = 100;
var netPriceOfTV = 959;

var grossPriceOfShoes = netPriceOfShoes * calculatedVAT;
var grossPriceOfTV = netPriceOfTV * calculatedVAT;

var name = "Arkadiusz";
var surname = "Włodarczyk";

alert(name + " " + surname);

// THE SIZE OF LETTERS INSIDE VARIABLE NAME MATTERS!!!

/*
 * 1) you cannot start name of variable with the digit
 * 2) you cant use as the name keywords
 * 3) do not use spaces in names
 * 4) you shouldnt use operators in the names
 */

//TYPES OF VARIABLES
/*
 * 1) numbers - integer
 * 2) string - continious characters
 * 3) boolean - true / false
 * 4) arrays, objects
 * 5) null - empty
 * 6) undefined
 */