let min = 168630;
let max = 718098;
let validCodeCount = 0;

let i = min;

function hasAdjacentDuplicate(code){
	return code.toString().match(/([0-9])\1{0,}/g).filter(group => {return group.length===2}).length > 0;
}	

function digitsDontDecrease(code){
	return code.toString().split("").filter((digit, index) => { return index<code.toString().length-1 && digit <= code.toString()[index+1]}).length === code.toString().length-1;
}

function codeIsValid(code) {
	return digitsDontDecrease(code) && hasAdjacentDuplicate(code);	
}

while (i <= max){
	if(codeIsValid(i)){
		validCodeCount++;
	}

	i++;
}

document.querySelector("#app").innerHTML = validCodeCount;