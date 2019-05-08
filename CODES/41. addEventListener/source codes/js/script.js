/*
    events - things that happens on your website
 
    addEventListener
    removeEventListener

    IE 6,7,8
    attachEvent
    detachEvent
 */
function createEvent(obj, eventName, nameOfFunctionToInvoke)
{
    if (document.addEventListener)
        obj.addEventListener(eventName, nameOfFunctionToInvoke);
    else
        obj.attachEvent("on"+eventName, nameOfFunctionToInvoke);
}

function changeColor()
{
   this.className = "changeColor";
}

function changeColorOut()
{
   this.removeAttribute("class");
}
function increaseFontSize()
{
    var fontSize = parseInt(window.getComputedStyle(this).getPropertyValue("font-size"));
   
    this.style.fontSize = (++fontSize) + "px";
}

window.onload = function()
{
    var result = document.getElementById("result");
    var stop = document.getElementById("stop");
/*
    result.onmouseover = changeColor;   

    result.onmouseout = changeColorOut;
    */
   createEvent(result, "mouseover", changeColor);
   createEvent(result, "mouseover", increaseFontSize);
   createEvent(result, "mouseout", changeColorOut);
  /* result.addEventListener("mouseover", changeColor);
   result.addEventListener("mouseover", increaseFontSize);
   result.addEventListener("mouseout", changeColorOut);
   */
  
   stop.addEventListener("click", function()
   {
       result.removeEventListener("mouseover", increaseFontSize);
   });
};
