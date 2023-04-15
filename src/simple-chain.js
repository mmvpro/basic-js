const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength: function() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink: function(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    
    this.chain.splice(position - 1, 1);
    return this;

   },

  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },

  finishChain: function() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const res = this.chain.join("~~");
    this.chain = [];
    return res;

  }
};

module.exports = {
  chainMaker
};
