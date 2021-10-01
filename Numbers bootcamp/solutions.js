function minimumOfTwo(num1, num2){
  let min;
  if(num1 < num2){
    min = num1;
  }else{
    min = num2;
  }
  return min;
}
function minimumOfThree(num1, num2, num3){
  let min;
  if(num1 < num2){
    min = num1;
  }else{
    min = num2;
  }
  if(num3 < min){
    min = num3;
  }
  return min;
}
function maximumOfFour(num1, num2, num3, num4){
  let max;
  if(num1 > num2){
    max = num1;
  }else{
    max = num2;
  }
  if(num3 > max){
    max = num3;
  }
  if(num4 > max){
    max = num3;
  }
  return max;
}

function ticketMachine(age){
  let price;
  if(age < 18){
    price = 10;
  }else if(age < 65){
    price = 20;
  }else{
    price = 15;
  }
  return price;
}

function sumTo(num){
  let sum = 0;
  for(let i = 0; i <= num; i+=1){
    sum += i;
  }
  return sum;
}
function factorial(num){
  let sum = 1;
  for(let i = 1; i <= num; i+=1){
    sum *= i;
  }
  return sum;
}

/*
* Factorial Bonus with helper function
*/
function multiply(factor1, factor2){
  let product = 0;
  for(let i = 0; i < factor1; i+=1){
    product += factor2;
  }
  return product;
}
function factorialBonus1(num){
  let sum = 1;
  for(let i = 1; i <= num; i+=1){
    sum = multiply(sum, i);
  }
  return sum;
}

/*
* Factorial Bonus with nested loop
*/
function factorialBonus2(num){
  let sum = 1;
  for(let i = 1; i <= num; i+=1){
    let product = 0;
    for(let j = 0; j < i; j+=1){
      product += sum;
    }
    sum = product;
  }
  return sum;
}


/*
* Fibonacci med mellanlagring
*/
function fibonacci(num){
  let current = 1, previous = 1;
  for(let i = 2; i < num; i += 1){
    let temp = current;
    current = current + previous;
    previous = temp;
  }
  return current;
}
/*
* Fibonacci med matematiktrolleri
*/
function fibonacci2(num){
  let current = 1, previous = 1;
  for(let i = 2; i < num; i += 1){ 
    current = current + previous;
    previous = current - previous;
  }
  return current;
}
/*
* Fibonacci med rekursion
*/
function fibonacciRecursive(num){
  if(num == 1 || num == 2){ return 1 }
  return fibonacciRecursive(num-2) + fibonacciRecursive(num-1)
}

function collatz(num){
  let iterations = 0;
  while(num != 1){
    if(num%2 == 0){
      num /= 2;
    }else{
      num = num * 3 + 1;
    }
    iterations += 1;
  }
  return iterations;
}