## wi21-cse1100-lab04
### part3.md
#### devtools - debugging
The bug was that `num1` and `num2` were of string types, so `+` concatenates the objects instead of adding the numeric values together. I fixed it by casting the numbers to numerics at the line where we fetch the values and assign it to the respective variables.

#### devtools - network tab
1. `citylots.json`
2. `past2.js`
3. 11.7 MB
4. 5.71s, 77 ms (cache)
5. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData
