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
14.
  - A. '3' + 2 -> `'32'` because `'3'` is a string and `+` concatenates strings, so `2` is converted to a string and concatenated with `'3'`.
  - B. '3' - 2 -> `1` because there is no `-` for strings. Thus, `'3'` is converted to a numeric and then 2 is subtracted from the numeric 3.
  - C. 3 + null -> `3` because `3` is a numeric 3 and `+` adds numerics, so `null` is converted to a numeric null, which has a value of 0. Thus, 0 is added to 3.
  - D. '3' + null -> `'3null'` because `'3'` is a string and '+' concatenates strings, so `null` is converted to a string, which is `'null'` and concantenated to `'3'`.
  - E. true + 3 -> `4` because there is not `+` for booleans and `3` is a numeric. So, `true` is converted to a numeric. `true` has a value of 1. Then, 3 is added to 1.
  - F. false + null -> `0` because there is no `+` operation for booleans and null. However, `false` and `null` can be converted to numerics and numerics have a `+` operation. `false` has a numeric value of 0 and `null` has a numeric value of 0. The values are added together.
  - G. "3" + undefined -> `'3undefined'` because `"3"` is a string and `+` concatenates strings. So `undefined` is converted to a string and concatenated to `"3"`. Additionally, single quote and double quotes can be used to indicate strings.
  - H. "3" - undefined -> `NaN` because there is no `-` operation for strings. Thus, `"3"` is converted to a numeric. `undefined` is also converted to a numeric. `undefined` has a numeric value of `NaN`. A number minus `NaN` is `NaN`.

15.
  - A. '2' > 1 -> `true` because we are comparing 2 different types. So `'2'` becomes a numeric and numeric 2 is greater than 1.
  - B. '2' < '12' -> `false` because `'2'` and `'12'` are both strings, so we can compare them lexicographically. Since `'2'` is lexicographically greater than 
  - B. '2' < '12' -> `false` because `'2'` and `'12'` are both strings, so we can compare them lexicographically character by character. Since `'2'` is lexicographically greater than `'1'`, `'2'` is lexicographically greater than `'12'`.
  - C. 2 == '2' -> `true` because we are comparing 2 different types, so `'2'` becomes a numeric and numeric 2 is equal to numeric 2.
  - D. 2 === '2' -> `false` because `===` is a string equality operator that checks the equality without type conversion. If the objects that are being compared are of different types, then it immediately returns `false`.
  - E. true == 2 -> `false` because we are comparing 2 different types. So `true` becomes a numeric 0 and numeric 0 is not equal to 1.
  - F. true === Boolean(2) -> `true` because even though the comparison uses a string equality operator, 2 is explictly casted to a boolean type. Thus, Boolean(2) is `true` because it is non-zero. `true` is equal to `true`.

16. The difference between the `==` and `===` operators is that `==` checks equality with type conversion (objects being compared do not have to be the same type for equality) while `===` checks equality without type conversion (types have to be the same for equality).

#### conditionals
17. The string, `'How are you?'`, will get printed because the first if-statement checks if `2` is equal to `true`. Since the objects being compared are of different types, `true` is converted to a numeric 0. `2` is not equal to `0`, so we go to the next conditional. The next conditional is `2`. Since the conditional looks for a boolean, `2` is converted to a boolean. `2` is a non-zero number, so `2` is converted to `true`. Thus, the block within the conditional is run and `'How are you?'` is printed.

#### loops
18. see part1-question18.js

#### functions
19. The result of `newArr` will be `[6, 8, 10]` with the following parameters `modifyArray([1,2,3], doSomething)`. This is because the `array` parameter is `[1,2,3]` while the `callback` parameter is `doSomething`. The for-loop within `modifyArray` iterates through `array`, applies `doSomething` to each element in the array, and pushes it to the new array being returned. `doSomething` calls another function, which multiplies the object + 2 by 2. Thus, 1, for example, will result in 6 because (1 + 2) * 2 = 6.

#### setInterval(), setTimeout(), clearTimeout()
20. see part1-question20.js

21. 
`
1
4
3
2
`