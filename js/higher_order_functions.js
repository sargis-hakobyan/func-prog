function FP(){
	this.foldl = function(f, z, list) {
		if(!list || list.length == 0)
			return z;

		return this.foldl(f, f(z, list[0]), list.slice(1));
	};
	
	this.foldr = function(f, z, list) {		   
		if(!list || list.length == 0)
			return z;
		
		return f(list[0], this.foldr(f, z, list.slice(1)));
    };
	
	this.append = function(a, b) {
		return fp.foldr(fp.cons, b, a)
	};
    this.cons = function(x, list) {
		list.unshift(x);
		return list;
	};
	this.size = function(x, y) {
		return 1 + y;
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
		 
