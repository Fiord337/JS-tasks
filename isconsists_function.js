// Задание 3:
// Написать функцию которой на вход подается целое число. Если число положительное - вывести сообщение "Число положительное",
// если число отрицательное - "Число отрицательное". Если подается ноль - вывести сообщение "Ноль". Выводить сообщение без кавычек.

function isconsists(srcString, charsQuery) {
        if (srcString.startsWith(charsQuery)) {
            return true 
        } else {
            return false
        }
    }
console.log(isconsists("andrew", "an"))