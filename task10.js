// Задание 10:
// Количество нулей
// По данным числам, определите количество чисел, которые равны нулю.  
// Входные данные 
// На вход функции подается массив N натуральных чисел.
// Выходные данные 
// Выведите количество чисел, которые равны нулю.
// Sample Input:
// [ 5, 1, 8, 100, 0, 12 ]
// Sample Output:  1
let n = 20
let zeros = 0
let numbers = Array.from({length: n}, () => Math.floor(Math.random() * n))
console.log(numbers)
for (i = 0; i <= n; i ++) {
    if (numbers[i] == 0) {
        zeros = zeros + 1
    }
}
console.log(zeros)