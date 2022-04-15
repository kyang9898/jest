exports.reverseNumber = function (num) {
    const reverse = Array.from(String(num)).reverse().join("");
    return Number(reverse);
}
exports.organizeLetters = function (letter) {
    return Array.from(letter).sort().join("");
}
exports.primeNumber = function (pnumber) {
    for (let i = 2; i < pnumber; i++) {
        if (pnumber % i == 0) {
            return false;
        }
    }
    return pnumber >= 2;
}
exports.uniqueChar = function (letter) {
    letter = Array.from(letter);
    let result = [];
    while (letter.length) {
        result.push(letter[0]);
        letter = letter.filter(c => c != letter[0]);
    }
    return result.join("");
}
exports.second = function (num) {
    if (num.length < 2) {
        return undefined;
    }
    num = num.sort();
    return [num[1], num.at(-2)];
}
exports.sort = function (num) {
    for (let end = num.length - 1; end > 0; end--) {
        for (let i = 0; i < end; i++) {
            if (num[i] < num[i + 1]) {
                let n = num[i];
                num[i] = num[i + 1];
                num[i + 1] = n;
            }
        }
    }
    return num;
}
exports.callBack = function (keng) {
    return keng();
}
