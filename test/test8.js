function solution(ineq, eq, n, m) {
    if ( eq.charAt(0) =='='){
        console.log("=");
        return eval(n+ineq+eq+m)?1:0;
    }else{
        console.log("x");
        return eval(n+ineq+m)?1:0;
    }
}