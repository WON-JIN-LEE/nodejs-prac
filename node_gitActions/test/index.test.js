const factorial = require('../src');

describe('factorial function', () => {
    it('correctly computes factorial of positive integer number', () => {
        expect(factorial(3)).toEqual(6);
    });


    it('throw an error if a negative input is provided', () => {
        expect(() => {
            factorial(-1);
        }).toThrow("Factorial is only defined for non-negative integers!");
    });
});