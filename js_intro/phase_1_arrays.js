

Array.prototype.uniq = function() {
	let new_arr = [];
	
	for(i=0; i<this.length; i++) {
		if(!new_arr.includes(this[i])){
			new_arr.push(this[i])
		}
	}
	return new_arr
} 

Array.prototype.twoSum = function() {
	let new_arr = [];
	
	for(i=0; i<this.length-1; i++) {
		for(j=i; j<this.length; j++) {
			if((i != j) && (this[i] + this[j] === 0)){
				new_arr.push([i,j])
			}
		}
	}
	return new_arr
}


Array.prototype.transpose = function() {
	let new_arr = makeArray(this.length, this[0].length)
	for(i=0; i<this.length; i++) {
		for(j=0; j<this[0].length; j++) {
			new_arr[j][i] = this[i][j]
		}
	}
	return new_arr
}

function makeArray(d1, d2) {
    var arr = [];
    for(let i = 0; i < d2; i++) {
        arr.push(new Array(d1));
    }
    return arr;
}



console.log([[1,2],[3,4],[5,6]].transpose())

// 1,2
// 3,4
// 5,6
//width = 2 (length of inside array)
//height = 3 this.length

// 1, 3, 5
// 2, 4, 6
