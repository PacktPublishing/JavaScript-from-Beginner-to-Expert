/*
      window.pageYOffset;
      window.scrollBy(xaxis, yaxis);
 */

window.onload = function()
{
    var toTopButton = document.getElementById("toTopButton");
    
    window.onscroll = function()
    {
        var test = document.getElementById("test");
        var toTopButton = document.getElementById("toTopButton");
        
        if (window.pageYOffset > 400)
            toTopButton.style.display = "block";
        else
            toTopButton.style.display = "none";
        
        test.innerHTML = window.pageYOffset;
    };
    
    toTopButton.onclick = function()
    {
        window.scrollBy(0, -1 * window.pageYOffset);
    };
};




