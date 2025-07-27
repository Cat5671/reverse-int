module.exports = function reverse(n) {
  const positiveNumber = Math.abs(n);
  const reversedNumber = positiveNumber.toString().split('').reverse().join('');
  return reversedNumber;
};
