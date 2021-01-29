## wi21-cse1100-lab04
### part1.md
#### variables & scoping
1. Line 11 will print out the length of the `prices` array. This is because `i` is defined with `var` within the function so `i` has function scope and can be accessed throughout the function. `i` is incremented at each iteration. The iteration continues until `i` is equal to the `prices` array. In other words, the last iteration is when `i` is equal to `prices.length` - 1. At the end of this iteration, `i` is incremented to `prices.length`. Thus, `console.log(i)` outputs the length of the `prices` array.

2. Line 12 will print out the discounted price of the last item of the `prices` array. `discountedPrice` is defined with `var` within the function so `discountedPrice` has function scope and can be accessed throughout the function. The loop iterates through the `prices` array and at each iteration, `discountedPrice` is set to the discounted price for the current item in the list. Thus, when the loop is exited, `discountedPrice` is the discounted price for the last item in the list. The discounted price is the price of the item * (1 - discount).

3. Line 13 will print out the final price of the last item of the `prices` array. It outputs the final price of the last item because `finalPrice` is last set to the final price of the last item. `finalPrice` is defined with `var` within the function so `finalPrice` has function scope and can be accessed throughout the function. `finalPrice` is `discountedPrice` rounded to 2 decimal places.

4. The function will return `[50, 100, 150]` if we call `discountPrices([100, 200, 300], .5)`. This is the updated price of the input array, `[100, 200, 300]`, after the discount of 0.5 on each item rounded to two decimal places. There is a 50% discount of all the items. Thus, the prices after discount will be `[50, 100, 150]`. Next, the function rounds each price to 2 decimal places. Thus, the updated price is `[50, 100, 150]`. At each iteration, the function pushes the updated price into a new array and returns it.

5. Line 11 will throw an error because `i` is defined with `let` within the for-loop. Thus, `i`'s scope is restricted to the for-loop. `i` cannot be accessed in line 11. Thus, line 11 results in an error.

6. Line 12 will throw an error because `discountedPrice` is defined with `let` within the for-loop. Thus, `discountedPrice`'s scope is restricted to the for-loop. `discountedPrice` cannot be accessed in line 12. Thus, line 12 results in an error.

7. Line 13 will print out the final price of the last item of the `prices` array. It does not encounter an error like line 11 and 12 even though `finalPrice` is defined with `let` because `finalPrice` is defined within the function, so it has the scope of the function (including inside the for loop). Thus, it outputs the final price of the last item because `finalPrice` is last set to the final price of the last item. `finalPrice` is `discountedPrice` rounded to 2 decimal places.

8. Disregarding errors from line 11 and 12, the function will output `[50, 100, 150]` for `discountPrices([100, 200, 300], .5)`. This is is the updated price of the input array, `[100, 200, 300]`, after the discount of 0.5 on each item rounded to two decimal places. There is a 50% discount of all the items. Thus, the prices after discount will be `[50, 100, 150]`. Next, the function rounds each price to 2 decimal places. Thus, the updated price is `[50, 100, 150]`. At each iteration, the function pushes the updated price into a new array and returns it.

9. Disregarding errors from earlier lines, line 11 will throw an error because `i` is defined `let` within the for-loop. Thus, `i`'s scope is restricted to the for-loop. `i` cannot be accessed in line 11. Thus, line 11 results in an error.

10. Disregarding errors from earlier lines, line 12 will throw an error because `discountedPrice` is defined with `const` within the scope of the for-loop. Thus, `discountedPrice`'s scope is restricted to the for-loop. `discounted` cannot be accessed in line 12. Thus, line 12 results in an error.

11. Disregarding errors from earlier lines not involving `finalPrice`, line 13 will not run because of the error at line 7. `finalPrice` is defined with `const` within the scope of the function. Since `finalPrice` is defined with `const`, `finalPrice` cannot be updated. Line 7 attempts to update `finalPrice` which results in an error. If line 7 were disregarded, then 0 will be outputed because `finalPrice` was assigned to 0. If `finalPrice` were redefined with `let` or `var`, `finalPrice` outside of the for-loop would be the final price of the last element of `prices` array.

12. If line 7 was removed and we disregarded errors from lines 11 and 12, then the function will return `[0, 0, 0]` for `discountPrices([100, 200, 300], .5)` because `finalPrice` will be 0 and pushed into `discounted` at each iteration. However, this is probably not how the function was meant to work. If `finalPrice` was defined as `let` or `var` instead of `const` then line 7 won't have to be removed, and the function will return `[50, 100, 150]` for `discountPrices([100, 200, 300], .5)` because the for-loop will iterate through `prices`, calculate the discounted price, round it to two decimals, and push it to `discounted`.

#### data types
13.
  - A. `student.name`
  - B. `student['Grad Year']`
  - C. `student.greeting()`
  - D. `student['Favorite Teacher'].name`
  - E. `student.courseload[0]`

#### basic operators & type conversion
14. A. '3' + 2 -> '32'
