/*
   onkeydown - when you press whatever key
   onkeypress - when you press whatever key but you can get only info about character keys with event object 
   onkeyup - when you press down a key and then release it

   onfocus - when the use enters (focus) the input
   onblur - when you lose focus (blur - leave) the input - there is no need for a change in input
   onchange - when the user changes something in input and change the focus
 
   e.which - they keycode of pressed key. In order to support ie6-8 var charPressed = e.which || e.keyCode

   e.charCode - keycode like above (just a few events) - DO NOT USE - IT'S OLD, MOST TIME NOT SUPPORTED - it's gonna be deleted
*/
//isNaN
function isNumber(valueToCheck)
{
    return !isNaN(valueToCheck);
}

window.onload = function()
{
   
    var numberField = document.getElementById("myForm").numberField;  //.element[0];
    var textField = document.getElementById("myForm").textField;  
    var submitMyFormButton = document.getElementById("myForm").submitMyFormButton;  
    
    var info = document.getElementById("info");  
    var i = 0;
    
    numberField.onkeydown = function (e)
    {
       
        
        //if (!isNumber(this.value))
        if (!isNumber(String.fromCharCode(e.which)) && e.which !== 8 && e.which !== 190)
        {
            info.innerHTML = "Please, type a number";
            
            e.preventDefault();
        }
        else
        {
            info.innerHTML = "";
            this.style.backgroundColor = "green";
        }
       
    };
    
    
    
};






