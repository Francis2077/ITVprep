function myFunc(digit){
  if (digit % 3 == 0){
    if (digit % 9 == 0){
      digit = ((digit * 5) / 10) - 3.9)
    }
    else{
      digit = digit * 0.5 
    }
  }
  else if (digit % 3 == 1){
    digit = (1/3)*(digit) * (digit * 3.1)
  }
  else {
    digit = digit - (2/3*(digit+3.2))
  }
    
