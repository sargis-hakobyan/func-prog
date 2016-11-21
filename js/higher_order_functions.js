function FP(){
	this.reduce = function(f, z, list) {
		if(!list || list.length == 0)
		 return z;

		return this.reduce(f, f(z, list[0]), list.slice(1));
	};
	
	this.add = function(x, y) {
		return x + y;
	};
	this.minus = function(x, y) {
		return x - y;
	};
	this.multyply = function(x, y) {
		return x * y;
	};
}
		 
