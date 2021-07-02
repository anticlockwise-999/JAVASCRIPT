function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
  console.log(findGreater(2, 3))


  //the Conditional (Ternary) Operator

  //The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
  function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
  }
  console.log(findGreater(4, 3))


  //Multiple Conditional (Ternary) Operators

  function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
  console.log(findGreaterOrEqual(5, 5))

  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are same" : (a > b) ? "a is greater" : "b is greater";
  }
  console.log(findGreaterOrEqual(7, 6))
