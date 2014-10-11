/**
 * Retorna um número inteiro aleatório entre max e min
 * incluindo max e min.
 *
 * Fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}