var maths = {
  fibonacci: function fib(number){
    if(number <= 2) return 1;
    else return fib(number-1) + fib(number-2);
  },
  factorial: function fac(number){
    if(number <= 1) return 1;
    else return fac(number-1)*number;
  }
};
