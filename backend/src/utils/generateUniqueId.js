const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de letras como id
}

