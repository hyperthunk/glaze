//
// Sourced from http://recurser.com/articles/2007/07/25/useful-javascript-array-functions/
//

/**
 *   Array convenience method to clear membership.
 *
 *   @param object element
 *   @returns void
 */
Array.prototype.clear = function () {
    this.length = 0;
};
 
 
/*
 * Return true if the given object is in the array
 *
 *   @param object element
 *   @returns boolean
 */
Array.prototype.inArray = function (obj) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === obj) {
			return true;
		}
	}
	return false;
};
 
/**
 *   Array convenience method to remove element.
 *
 *   @param object element
 *   @returns boolean
 */
Array.prototype.remove = function (element) {
	var result = false;
	var array = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] == element) {
			result = true;
		} else {
			array.push(this[i]);
		}
	}
	this.clear();
	for (var i = 0; i < array.length; i++) {
		this.push(array[i]);
	}
	array = null;
	return result;
};