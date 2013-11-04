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

SimpleMath.prototype.getSignum = function(number){
	if(number>0){
		return 1;
	}else if(number == 0){
		return 0;
	}else{
		return -1;
	}
};

SimpleMath.prototype.getAverage = function(number1,number2){
	var result = (number1+number2)*0.5;
	return result;
};

