describe("task2", function () {

    it("проверка на нечетность", function () {
        function perebor2(arr) {
            return arr.some(num => num % 2 !== 0);
        }

        const arr3 = [2, 4, 6, 8];
        const arr4 = [1, 2, 3, 4];
        console.log('Задача 2 из Массивов:')
        console.log(perebor2(arr3));
        console.log(perebor2(arr4));
    });
});

describe("task2", function () {

    it("проверка на умножение", function () {
        function mult(a, b) { 
            let answer = a * b;
            return answer;
         }
        console.log('Задача 1:')
        console.log(mult(1, 5));
        
    });
});