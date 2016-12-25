function FP() {

	this.foldl = function (f, z, list) {
		if (!list || list.length == 0)
			return z;

		return this.foldl(f, f(z, list[0]), list.slice(1));
	};

	this.foldr = function (f, z, list) {
		if (!list || list.length == 0)
			return z;

		return f(list[0], this.foldr(f, z, list.slice(1)));
	};

	/** 
	 * Appends two lists
	 * a = [1,2,3], b = [a,b,c] -> result = [1,2,3,a,b,c] 
	 * uses foldr(fold right) and cons functions
	*/
	this.append = function (a, b) {

		/** Adds element to the list from left */
		var cons = function (x, list) {
			list.unshift(x);
			return list;
		};
		return fp.foldr(cons, b, a)
	};

	/** Returns elements that have even index */
	this.getOddElements = function (list) {

		/** Returns accumuliator which contains filtered list and boolean variable */
		var getOdd = function (accum, x) {
			if (accum.b) {
				accum.list.push(x);
			}
			return { b: !accum.b, list: accum.list };
		};
		var result = fp.foldl(getOdd, { b: false, list: [] }, list);
		return result.list;
	}

	/** Processes given f function for each element of list */
	this.map = function(f, list) {
		var cons = function(list, x) {
			list.push(f(x));
			return list;
		}		
		return fp.foldl(cons, [], list);;
	};

	/** Does (+1) for each element of list */
	this.plusOne = function(x) {
		return x + 1;
	};

	/**  Multypllies each element of list by 5 */
	this.multyplyBy5 = function(x) {
		return x * 5;
	};

	/** Counts list size */
	this.size = function (x, y) {
		return 1 + y;
	};

	/** Returns sum of all elements of the list */
	this.add = function (x, y) {
		return x + y;
	};

	/** Returns deducttion of all elements of the list */
	this.minus = function (x, y) {
		return x - y;
	};

	/** Multypllies all element of the list */
	this.multyply = function (x, y) {
		return x * y;
	};
}