## **Here's what I've learned and understood about these JavaScript operators:**

= assignment operator  
== comparison operator. Compares if values are equal  
=== strict equality equality. Compares if values and data types are equal  
!= inequality operator  
!== strict inequality operator

**Assignment Operator**
**= (Assignment)**
Assigns a value to a variable  
The right side is evaluated first, then assigned to the left side  
**Example:**  
let x = 5 assigns the value 5 to variable x


**Comparison Operators**  
**== (Loose Equality/Abstract Equality)**  
Compares values for equality after performing type coercion  
JavaScript automatically converts operands to the same type before comparison  
**Examples:**  
5 == "5" returns **true** (string "5" is converted to number 5)  
true == 1 returns **true** (boolean true becomes 1)  
null == undefined returns **true**  


**=== (Strict Equality)**  
Compares both value and data type without any type conversion  
No type coercion occurs - both operands must be exactly the same type and value  
**Examples:**
5 === "5" returns **false** (number vs string)  
5 === 5 returns **true**   
null === undefined returns **false**  


**Inequality Operators**  
**!= (Loose Inequality)**  
Returns true if operands are not equal after type coercion  
Opposite of ==  
**Example:** 5 != "6" returns **true**, but 5 != "5" returns **false**  

**!== (Strict Inequality)**  
Returns true if operands are not equal in value OR not the same type  
Opposite of ===  
No type coercion occurs  
**Example:** 5 !== "5" returns **true** (different types)  

