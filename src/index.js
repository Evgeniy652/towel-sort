
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(!matrix){
		return [];}
	else{
 const newArr=[];	
 let arr = matrix.forEach((el,ind)=>{
	 if(ind%2==0) {
		 newArr.push(el);
	 }
	 else{
		newArr.push(el.reverse());
	 }

 })	
  return [].concat(...newArr);
}
}
