module.exports = function reverse (n) {
    let final = Math.abs(n).toString().split("").reverse();
    return final.join("");
}
