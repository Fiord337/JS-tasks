// Задание 5.
// По данному трехзначному числу определить, все ли его цифры различны.
// На вход функции подается одно натуральное трехзначное число.
// Формат выходных данных
// Выведите "YES", если все цифры числа различны, в противном случае - "NO".
// Sample Input 1: 237 / Sample Output 1: YES
// Sample Input 2: 117 / Sample Output 2: NO
// Для себя:
// Первое число (a) получаем поделив на 100
// Второе число (b) поделить на 100, взять остаток, а потом поделить его на десять
// Третье число (с) это просто остаток от деления на 10

CheckIfPartsOfNumberDiffer (555)
CheckIfPartsOfNumberDiffer (123)

function CheckIfPartsOfNumberDiffer(number) { 
    a = Math.floor(number/100)
    b = Math.floor((number%100)/10)
    c = (number % 10)
    console.log(a, b, c)
    if (a === b || a === c || b === c) {
        console.log("NO")
    } else {
        console.log("YES")
    }
}
    