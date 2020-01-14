function foo(){
	var bar;
	quux = 9;
	function zip(){
		var quux = 7;
		bar = true;
	}
	return zip;
}

//module.exports = foo;