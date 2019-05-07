'use strict';

/**
 * A simple database of words from a text file. Each word
 * in the file is separated by a newline.
 */

module.exports = exports = function textDb (file) {
  const fs = require('fs');
  const data = [];
  fs.readFileSync(file, 'utf-8')
    .split('\n')
    .reduce((accum, word) => {
      if (word && word.trim() !== '') data.push(word.trim());
    }, data);

  function get () {
    return data[Math.floor(Math.random() * data.length)];
  }

  return {
    get
  };
};
