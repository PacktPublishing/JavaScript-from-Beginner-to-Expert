/*
   setTimeout(javascript function, milliseconds); - function will be run once
   setInterval(javascript function, milliseconds); - function will be run many times in intervals (pierod between two events)

   clearTimeout - it will stop the function that was gonna be executed by setTimeout
   clearInterval - its gonna stop interval
 */
var timeOutRefId;
function stopwatchStart(stopwachHandler, startingValue)
{
    stopwachHandler.innerHTML = --startingValue;
    if (startingValue <= 0)
        return;
    
    timeOutRefId = setTimeout(function()
    {
        stopwatchStart(stopwachHandler, startingValue);
    }, 1000);
}
function Stopwatch(stopwatchHandler)
{
    this.stopwachHandler = stopwatchHandler;
    this.startingValue;
    this.timeOutRefId;
    
    this.start = function(startingValue)
    {
        if (this.timeOutRefId)
            this.stop();
        
        this.startingValue = startingValue;
        
        this.startStopwatch();        
    };
    this.startStopwatch = function()
    {
        if (this.startingValue < 0)
            return;
        
        this.stopwachHandler.innerHTML = this.startingValue--;
        
        var self = this;
        
        this.timeOutRefId = setTimeout(function(){
            self.startStopwatch();
        }, 1000);
    };
    this.stop = function()
    {        
       clearTimeout(this.timeOutRefId);  
    };
    this.continue = function()
    {
       this.startStopwatch();  
    };
}
window.onload = function()
{
   
   var buttonStart = document.getElementById("buttonStart");
   var buttonStop = document.getElementById("buttonStop");
   var buttonContinue = document.getElementById("buttonContinue");
   
   var stopwatchHandler = document.getElementById("stopwatchHandler");
  

   var stopwatch = new Stopwatch(stopwatchHandler);
   
   buttonStart.onclick = function()
   {
       var startingValue = document.getElementById("startingValue").value;
       stopwatch.start(startingValue);
   };
   buttonStop.onclick = function()
   {       
       stopwatch.stop();
   };
   buttonContinue.onclick = function()
   {
       stopwatch.continue();  
   };


  /*
   buttonStart.onclick = function()
   {
       var startingValue = document.getElementById("startingValue").value;
       if (timeOutRefId)
           clearTimeout(timeOutRefId);
       
       stopwachHandler.innerHTML = startingValue;   
       
       setTimeout(function(){
           stopwatchStart(stopwachHandler, startingValue);
       }, 1000);
   };
   */
    
};






