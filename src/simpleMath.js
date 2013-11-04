SimpleMath = function(){

};

SimpleMath.prototype.getFactorial = function(number){
	if(number>0){
		return number * this.getFactorial(number-1);
	}else if(number == 0){
		return 1;
	}else{
		throw new Error("there is no factorial for a negative numbers");
	}
};

SimpleMath.prototype.signum = function(number){

};

SimpleMath.prototype.average = function(number1,number2){

};

