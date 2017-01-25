function FP() {
	
	/**
	 * @param f - function to call on list elements
	 * @param z - accumulator
	 * @param list - list to process
	 * if the list is empty, returns accumulator
	 * if the list is not empty: calls f function on accumulator and the first element of the list 
	 * and the  result is the new accumulator for the next recursive call.
	*/
	this.foldl = function (f, z, list) {
		if (!list || list.length == 0)
			return z;

		return this.foldl(f, f(z, list[0]), list.slice(1));
	};

	/**
	 * @param f - function to call on list elements
	 * @param z - accumulator
	 * @param list - list to process
	 * if the list is empty, returns accumulator
	 * if the list is not empty: calls f function with the list’s first element and itself 
	*/
	this.foldr = function (f, z, list) {
		if (!list || list.length == 0)
			return z;

		return f(list[0], this.foldr(f, z, list.slice(1)));
	};

	/** 
	 * @param a - list to append
	 * @param b - list to append
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

	/** 
	 * @param list - list to process
	 *Returns elements that have even index 
	*/
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

	/** 
	 * @param f - function to apply on every elemnt of the list
	 * @param list - list to process
	 * Processes given f function for each element of the list 
	*/
	this.map = function(f, list) {
		var cons = function(list, x) {
			list.push(f(x));
			return list;
		}		
		return fp.foldl(cons, [], list);;
	};	
}
