let M = parseInt(gets());
let A = parseInt(gets());
let B = parseInt(gets());

let C = M - A - B;
	
let res = A;
if ( res < B ) res = B;   
if ( res < C ) res = C;
	
print(res)