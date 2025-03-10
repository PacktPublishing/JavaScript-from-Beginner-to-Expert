/*

    Manipulation of time using DATE object

    new Date()
    new Date(miliseconds) - you can create Date typing how many miliseconds has passed from 1st January 1970 r
    new Date(year, month, day, hours, minutes, seconds, milliseconds) - only first 3 arguments are required, 
                                                                        we start counting months from ZERO!
    new Date(dateString) where dateString is in format like:
    np. YYYY-MM-DD, YYYY-MM, YYYY
        YYYY/MM/DD, MM/DD/YYYY 
    
 */
Date.prototype.getFormattedTime = function()
{
    var hours = this.getHours();  
    var minutes = this.getMinutes();  
    var seconds = this.getSeconds();  

    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;       
    if (seconds < 10)
        seconds = "0" + seconds;    

    var suffix = "";
    if (hours < 12)
        suffix = "AM";
    else
    {
        hours -= 12;
        suffix = "PM";
    }

    return hours + ":" + minutes + ":" + seconds + " " + suffix;   
};

function Clock(elementHandler)
{
    this.elementHandler = elementHandler;
    this.actualDate = new Date();
    this.start = function()
    {
       this.updateElementHandlerContent();
       
       var self = this;
       setInterval(function(){
           self.addSecond();
           self.updateElementHandlerContent();
       }, 1000);  
    };
    this.addSecond = function()
    {
        this.actualDate = new Date();
    };
    this.updateElementHandlerContent = function()
    {
        this.elementHandler.innerHTML = this.actualDate.getFormattedTime();
    };
}
window.onload = function()
{
  var info = document.getElementById("info");   
  var info2 = document.getElementById("info2");   
  var clock = new Clock(info);
  var clock2 = new Clock(info2);
  
  clock.start();
  clock2.start();
};






