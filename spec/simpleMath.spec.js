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
