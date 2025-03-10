/*
 * LOGICAL OPERATORS
 * 
 * 0 - false, 1 - true
 * 
 * ! - NOT
 * 
 * !(0) - the result to 1
 * !(1) - the result to 0
 * 
 * && - conjunction - AND
 * 
 * expr 1 expr2 result
 * 0      0     0
 * 1      0     0
 * 0      1     0
 * 1      1     1
 * 
 * CONJUNCTION is TRUE only if both expressions are true in the same TIME
 * 
 *  
 * || - disjunction - OR (alternative)
 * 
 * expr 1 expr2 result
 * 0      0     0
 * 1      0     1
 * 0      1     1
 * 1      1     1
 * 
 * DISJUNCTION is FALSE only when both expression are FALSE in the same time
 * 
 */

var a = 7,
    b = 3;
   // 1     // 0
if (!(a > b || b == 5))
    alert("test");

