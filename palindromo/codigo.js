//
// palindromo v1
//
let reverseStringV1 = function(text) {
    let l = text.split('');
    l.reverse();
    return l.join('');
}

//
// palindromo v2
//
let reverseStringV2 = function(text) {
    return text.split('').reverse().join('');
}

//
// palindromo v3
//
let reverseStringV3 = function(text) {
    let backward = [];
    for (let i = text.length - 1, j = 0; i >= 0; i--, j++)
        backward[j] = text[i];
    return backward.join('');
}
