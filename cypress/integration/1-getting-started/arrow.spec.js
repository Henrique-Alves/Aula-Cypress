/* const { it } = require("mocha");

it('nada agora', function () { }) */


/* function soma(a, b) {
  return a + b;
} */

/* const soma = function(a, b){
    return a + b;
} */

const soma = (a, b) =>{
    return a + b;
};

/* const soma = () => 5 + 5 */

console.log(soma(1, 4));

/* it('a function test...', function(){
   console.log('function', this);
}); */

it('an arrow test...', () => {
    console.log('arrow', this);
 });
