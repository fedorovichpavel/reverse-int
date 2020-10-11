module.exports = function reverse(n) {
    let number = n.toString().split('').reverse().join('');
    if (number[number.length - 1] == '-') {
        number = number.substring(0, number.length - 1);
    }
    return +number;
}