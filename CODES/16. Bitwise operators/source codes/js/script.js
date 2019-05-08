/*
 *  BITWISE OPERATORS
 *  
 *  & - bitwise and
 *  | - bitwise or
 *  
 *  ^ - XOR eXclusive OR
 *  
 *  expr1 expr2 result
 *  1     0     1
 *  0     1     1
 *  1     1     0
 *  0     0     0
 *   
 *  x << 1 - moving bits to the left by 1 (left shift)
 *  x >> 2 - moving bits to the right by 2 (right shift)
 *  
 *  ~ - bitwise negation
 *  
 *  1 2 6 = 1 * 10 ^ 2 + 2 * 10 ^ 1 + 6 * 10 ^ 0 
 *  
 *  1 0 1 0 = 1 * 2 ^ 3 + 1 * 2 ^ 1 = 8 + 2 = 10
 *  
 *  1 1 1 0
 *  1 0 1 0
 *  ---------
 *  0 1 0 0
 *  
 *  
 *  1 1 1 0
 *  
 */

alert(~14);