var output = document.querySelector("p");
output.textContent = 10;
    /* STEP 1: Creating Strings */

    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent
var string1 = "Hello!, how are you";
output.textContent = string1;
    /* STEP 2: Escaping Characters */
var string2 = 'it\'s cold out there';
var string2 = "it's cold out there";
    /* STEP 3: Concatenation */
output.textContent = string2;

output.textContent = string1 + string2;
output.textContent = string1 + 20;
output.textContent = 33 + 20 +"1";
output.textContent = "hello" + 22 + 22 + 1 + 2 + 3;

    /* STEP 4: Numbers and Strings */

    // numbers can be converted to strings
output.textContent = "check" + 55;
    // strings can be converted to numbers, too
var num1 = "20";
var num2 = Number(num1);
output.textContent = typeof(num2);
    // and back again, if we want

output.textContent = num2.toString() + String(num2);