//defining the function
function factorial(n){
  //initilize the variable
  let result=1;
  for(let i=2;i<=n;i++){
    result=result*i;
  }
  return result;
}
console.log(factorial(5));
console.log(factorial(0));