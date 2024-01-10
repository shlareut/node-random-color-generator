// Step 1: Import library to generate random HEX code
// Step 2: Figure out how to dye console message
// Step 3: Import package to process command line arguments
// Step 4: Allow user to enter hue and luminosity
// Step 5: Incorporate hue and luminosity in randomColor
// Step 6: Generate boxes in console

import { argv } from 'node:process'; // import process argv
import chalk from 'chalk'; // import chalk package to dye console messages
import randomColor from 'randomcolor'; // import random color package

const hue = argv[2];
const luminosity = argv[3];
const randomHex = randomColor({
  hue: `${hue}`,
  luminosity: `${luminosity}`,
});
const coloredString = chalk.hex(randomHex);

if (hue === 'ask') {
  console.log('Please provide hue and/or luminosity!');
} else {
  console.log(
    coloredString(`
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####      ${randomHex}        #####
  #####                     #####
  ###############################
  ###############################
  ###############################
  `),
  );
}

// Below are stretch goal attempts

// const col = 31;
// const row = 9;

// let chars = '#';
// let result;

// let outline = function () {
//   for (let i = 0; i < (row - 3) / 2; i++) {
//     result = '';
//     for (let j = 0; j < col; j++) {
//       result += chars;
//     }
//     console.log(result);
//   }
// };

// let inline = function () {
//   let result = '';
//   for (let i = 0; i < col / 3; i++) {
//     result += chars;
//   }
//   console.log(result);
// };

// let box = function () {
//   outline();
//   inline();
//   console.log('TEST');
//   outline();
// };

// box();
