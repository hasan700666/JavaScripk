
                       //binery          4  2  1
                       // 2    -->       0  1  0
                       // 3    -->       0  1  1
                    //---------------------------------
                    //AND                0  1  0 = 2
                    //OR                 0  1  1 = 3              
                    //XOR                1  0  0 = 1
                    //NOT    0 = 1 and 1 = 0


//AND

console.log(2 & 3); 

//OR

console.log(2 | 3);

//XOR 

console.log(2 ^ 3);

//NOT

console.log(~2);
                                           //               16  8  4  2  1

//Left Shift                               //5 in binary    0   0  1  0  1
                                           //10 in binary   0   1  0  1  0
console.log(5 << 1);  //10                 //20 in binary   1   0  1  0  0
console.log(5 << 2);  //20

//Right Shift

console.log(20 >> 1);  //10
console.log(20 >> 2);  //5

//(Zero Fill) Right Shift (>>>)

//i don't understand🔴🔴🔴🔴


//Converting Decimal to Binary

function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

//i don't understand🔴🔴🔴🔴

//Converting Binary to Decimal

function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}

//i don't understand🔴🔴🔴🔴