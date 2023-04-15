const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(alphabet) {
    this.alphabet = alphabet;
    this.square = [];
}

generateSq() {
    for (let i = 0; i < this.alphabet.length; i++) {
        let row = this.alphabet.slice(i);
        row += this.alphabet.slice(0, i);
        this.square.push(row);
    }
}
getSq() {
    return this.square;
}
  
  
  encrypt(message, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
     if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let encryptMessage = "";
    let newKey = repeatString(key, message);
    this.generateSq();
    for (let it = 0; it < message.length; it++) {
        let i = this.alphabet.indexOf(message[it]);
        let j = this.alphabet.indexOf(newKey[it]);
        encryptMessage += this.square[i][j];
    }
    return encryptMessage.toLocaleUpperCase();
  }
  decrypt(message, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
     if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let decryptMessage = "";
    let newKey = repeatString(key, message);
    this.generateSq();
    for (let it = 0; it < message.length; it++) {
        
        let i = this.alphabet.indexOf(newKey[it]);
        let j = this.square[i].indexOf(message[it]);
        decryptMessage += this.alphabet[j];
    }
    return decryptMessage.toLocaleUpperCase();

  }
}

module.exports = {
  VigenereCipheringMachine
};
