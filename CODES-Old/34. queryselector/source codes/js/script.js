/*
    getElementById()
    getElementsByTagName()

    less supported:
    getElementsByClassName() - not supported in ie6,7,8
    getElementsByName() - not supported in ie6,7,8,9
    
    not supported in ie 6 i 7 i half supported in ie8:
    querySelector() - selecting the first occurrence of query and returning it as single variable
    querySelectorAll() - selecting all possible occurrences of query and returning the array

                        
 */

var programmingCourses = document.querySelectorAll("li");

alert(programmingCourses[6].innerHTML);