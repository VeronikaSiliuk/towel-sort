
module.exports = function towelSort (matrix) {
    let a=[];
    if(matrix === undefined){return a}
    a = matrix.map((item,index)=> index % 2==0 ? item.sort((a,b)=> a-b) : item.sort((a,b)=> b-a));
    return a.flat();
   
}


