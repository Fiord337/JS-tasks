// Задание 9:
// Дано трехзначное число. Найдите сумму его цифр. 
// Формат входных данных:
// На вход дается трехзначное число.
// Формат выходных данных:
// Выведите одно целое число - сумму цифр введенного числа.
// Sample Input: - 745
// Sample Output: - 16
ToFindTheSumOfParts (745)

function ToFindTheSumOfParts(number) { 
    a = Math.floor(number/100)
    b = Math.floor((number%100)/10)
    c = (number % 10)
    console.log(a, b, c)
    console.log(a + b + c)
}