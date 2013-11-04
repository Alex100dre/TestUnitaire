/*=======================factorial==============================*/
module("Factorial",{
	setup:function(){
		this.simpleMath = new SimpleMath();
	}, teardown: function(){
		delete this.simpleMath;
	}
});

test("calculating factorial for a positive number", function(){
	equal(this.simpleMath.getFactorial(3), 6, "Factorial of three must equal six")
});
test("calculating factorial for zero", function(){
	equal(this.simpleMath.getFactorial(0), 1, "Factorial of zero must equal one")
});
test("throwing an error when calculating the factorial for a negative number", function(){
	raises(function(){
		this.simpleMath.getFactorial(-10);
	}, "bla bla bla")
});

/*=================signum====================*/
module("signum",{
	setup:function(){
		this.simpleMath = new SimpleMath();
	}, teardown: function(){
		delete this.simpleMath;
	}
});

test("calculating factorial for a positive number", function(){
	equal(this.simpleMath.getSignum(10), 1,  " result 1")
});
test("calculating factorial for zero", function(){
	equal(this.simpleMath.getSignum(0), 0,"result 0")
});
test("throwing an error when calculating the factorial for a negative number", function(){
	equal(this.simpleMath.getSignum(-10), -1,"result -1")
});

/*=================average====================*/
module("average",{
	setup:function(){
		this.simpleMath = new SimpleMath();
	}, teardown: function(){
		delete this.simpleMath;
	}
});

test("calculating factorial for a positive number", function(){
	equal(this.simpleMath.getAverage(15,3), 9,  " result 9")
});
test("calculating factorial for zero", function(){
	equal(this.simpleMath.getAverage(0,0), 0,"result 0")
});
test("throwing an error when calculating the factorial for a negative number", function(){
	equal(this.simpleMath.getAverage(-10,25), 7.5,"result 7")
});

/*=================isPrime====================*/
module("assertions",{
	setup:function(){
		assertion = new Assertion();
		isPrime = assertion.isPrime;

	}, teardown: function(){
		delete this.simpleMath;
	}
});

test('isPrime positive number', function(){
	isPrime(7, "7 is prime?");
});