function solution(arr){
    let idxArray = [];
    for ( let i=0; i<arr.length;i++){
        if (arr[i].indexOf('ad')>=0){
            idxArray.push(i);
        }
    }
    for ( let i=idxArray.length-1;i>=0;i--){
        arr.splice(idxArray[i],1);
    }
    return arr;
}