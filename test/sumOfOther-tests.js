/* global it, describe */

const assert = require('assert');
const sumOfOther = require('../task/sumOfOther.js');

describe('sumOfOther', () => {
  it('should return correct array when input is array of possitive numbers', () => {
    const initialArray = [2, 3, 4, 1];
    const expectedArray = [8, 7, 6, 9];
    const actualArray = sumOfOther(initialArray);
    assert.deepEqual(actualArray, expectedArray);
  });
  it('should return correct array when input is array of negative numbers', () => {
    const initialArray = [-2, -3, -4, -1];
    const expectedArray = [-8, -7, -6, -9];
    const actualArray = sumOfOther(initialArray);
    assert.deepEqual(actualArray, expectedArray);
  });
  it('should return correct array when input is array of numerable values', () => {
    const initialArray = [2, '3', 4, '1'];
    const expectedArray = [8, 7, 6, 9];
    const actualArray = sumOfOther(initialArray);
    assert.deepEqual(actualArray, expectedArray);
  });
  it('should return empty array when input is empty array', () => {
    const initialArray = [];
    const expectedArray = [];
    const actualArray = sumOfOther(initialArray);
    assert.deepEqual(actualArray, expectedArray);
  });
});
