var variable_1 = NaN;
var variable_2 = NaN;
var variable_function = '';
var valueOnScreen = $('#number-display').text();
var valueString = '';
var objFunctions = {add:add,
					subtract:subtract,
					multiply:multiply,
					divide:divide};

function onClear(){

	variable_1 = NaN;
	variable_2 = NaN;
	variable_function = '';
	valueOnScreen = '0';
	$('#number-display').text("0");

}

function onNumberPress(e){

	if(isNaN(variable_1)){
		valueString = e.target.value;
		variable_1 = valueString;
	}else if(variable_function == '' && isNaN(variable_2)){
		valueString = variable_1+e.target.value;
		variable_1 = valueString;
	}else if(variable_function != '' && isNaN(variable_2)){
		valueString = e.target.value;
		variable_2 = valueString;
	}else{
		valueString = variable_2+e.target.value;
		variable_2 = valueString;
	}

	valueOnScreen = parseFloat(valueString);
	$('#number-display').text(valueOnScreen);
	
	return valueOnScreen;		
}

function onOperatorPress(e){
	

	if(!isNaN(variable_2)){
		onEquals();
	}
	variable_function = e.target.value;

}

function onEquals(){

	if(isNaN(variable_1) || isNaN(variable_2)){
		return
	}

	operator(objFunctions[variable_function], parseFloat(variable_1), parseFloat(variable_2));
}

function operator(function_test, a, b){

	value = function_test(a,b);
	$('#number-display').text(value);
	variable_1 = value;
	variable_2 = NaN;

	return value;
}


function add(a,b){

	return a+b;
}

function subtract(a,b){

	return a-b;
}

function multiply(a,b){

	return a*b;
}

function divide(a,b){

	if(b==0){
		return 'inf';
	}else{
		return a/b;
	}
}


$('.operator').on('click', function(e){
	onOperatorPress(e);
})
$('.number').on('click', function(e){
	onNumberPress(e);
})
$('#equals').on('click', function(e){
	onEquals();
})
$('#clear').on('click', function(){
	onClear();
})


console.log(objFunctions['add']);