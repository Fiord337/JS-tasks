// Задание 7:
// Написать функцию которая выводит квадраты натуральных чисел от 1 до 10. 
// Квадрат каждого числа должен выводится в новой строке.
// Sample Output:
// 1
// 4
// 9
// 16 etc

findSquaresOfNaturalNumbers(1)

function findSquaresOfNaturalNumbers(a){
    for (newFunc = a; a <= 10; a++) 
        {
            console.log(Math.pow(a, 2))
        }
}