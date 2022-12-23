function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    return function myNamedFunction() {
      console.log(returnsANamedFunction);
    }
  }

  function returnsAnAnonymousFunction() {
    return function() {
      console.log(returnsAnAnonymousFunction);
    }
  }
  