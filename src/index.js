module.exports = function reverse(n) {
  const arrNumber = n.toString().split('');
  return +(arrNumber.reverse());
};
