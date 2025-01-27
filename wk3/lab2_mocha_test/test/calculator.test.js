import { expect } from 'chai';
import { addition, subtraction, multiplication, division} from '../app/calculator.js';

describe('Addition Tests', () => {
    it('add(5, 2) expected result 7', () => {
        expect(addition(5, 2)).to.equal(7);
    });

    it('add(5, 2) expected result 7', () => {
        expect(addition(5, 2)).to.equal(8);
    });
});

describe('Subtraction Tests', () => {
    it('sub(5, 2) expected result 3', () => {
        expect(subtraction(5, 2)).to.equal(3);
    });

    it('sub(5, 2) expected result 3', () => {
        expect(subtraction(5, 2)).to.equal(5);
    });
});

describe('Multiplication Tests', () => {
    it('mul(5, 2) expected result 10', () => {
        expect(multiplication(5, 2)).to.equal(10);
    });

    it('mul(5, 2) expected result 10', () => {
        expect(multiplication(5, 2)).to.equal(12);
    });
});

describe('Division Tests', () => {
    it('div(10, 2) expected result 5', () => {
        expect(division(10, 2)).to.equal(5);
    });

    it('div(10, 2) expected result 5', () => {
        expect(division(10, 2)).to.equal(2);
    });
});


