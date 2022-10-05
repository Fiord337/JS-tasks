// Написать функцию для определения является ли поданный на вход год високосным:
// Год является високосным если он соответствует хотя бы одному из нижеперечисленных условий:
// кратен 400;
// кратен 4, но не кратен 100.
// Входные данные
// Вводится единственное число - номер года (целое, положительное, не превышает 10000).
// Выходные данные
// Требуется вывести слово YES, если год является високосным и NO - в противном случае.
// Sample Input: 2000 / Sample Output: YES
// то есть остаток от деления на 400 = 0 или остаток от деления на 4 = 0 и остаток от деления на 100 = 0

CheckIfTheYearIsLeap (10000)
CheckIfTheYearIsLeap (2000)
CheckIfTheYearIsLeap (13)

function CheckIfTheYearIsLeap(number) { 
    a = (number%400)
    b = (number%4)
    c = (number % 100)
    if (number < 10000) {
        if (a == 0) {
            console.log("YES")
        } else if ( b == 0 && c != 0) {
            console.log("YES")
        } else {
            console.log("NO")
        }}
    else (
        console.log("humanity won't stand for so long")
    )
}