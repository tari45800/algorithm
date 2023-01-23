function solution(n, t) {
    
    //t만큼 반복한다.
    //n은 n*2이다.

    for(let i = 1; i <= t; i++){
        n = n * 2;
    }
    return n;
}