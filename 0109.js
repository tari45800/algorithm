function solution(n, m, x, y, r, c, k) {



  //우선순위 거리를 먼저 간 다음 최단거리를 구한다. 
  //k = 우선순위 거리 x = 최단거리 y
  
  
  // 함수를 호출했을 때 판별
  //k만큼 반복한다. 
  // 우선순위 거리를 갈 때마다 이동한 거리를 저장한 변수a를 증가시키고 d1에 방향을 저장한다.
  // 최단거리를 구해 d2에 방향을 저장하고 이동한 거리를 저장한 숫자b를 리턴하는 함수를 호출한다.
  // a + b === k라면 answer = d1 + d2;
  
  var answer = '';
  
    //참조하는 배열은
    const arr = Array.from(Array(n), () => new Array(m).fill(0));
    
    n--
    m--
    x--
    y--
    r--
    c--
  
    let lODirection = '';
    let sTDirection = '';
    let lODistance = lODirection.length;
    let sTDistance = sTDirection.length;
  
    arr[x][y] = 's';
    arr[r][c] = 'e';
  
    // //최단거리 함수
    // function sTMove(x, y, r, c){
    //   let d = 0;
      
    //   while(d !== 'e'){
    //     console.log(sTDirection)
    //     console.log(x)
    //     console.log(y)
  
    //     if(arr[x][y] === 'e'){
    //       d = 'e';
    //     //아래
    //     } else if(x < r){
    //       x++
    //       sTDirection += 'd';
    //     //왼
    //     } else if(y > c){
    //       y--
    //       sTDirection += 'l';
    //     //오
    //     } else if(y < c){
    //       y++
    //       sTDirection += 'r';
    //     //위
    //     } else if(x > r){
    //       x--
    //       sTDirection += 'u';
    //     } 
    
    //   }
    // }
    
   alert(arr)
  
  
    // 이동 조건을 다시 생각해 봅시다.
    // n m 사이에서 이동하고요
    // 우선순위 방향으로 먼저 이동하고
  / 
  
    //우선거리 
    while(k !== lODistance + sTDistance){
      alert(lODirection)
      alert(lODistance)
      alert(`x는 ${x}입니다. n은 ${n}입니다.`)
      alert(`y는 ${y}입니다. m은 ${m}입니다.`)
      
      //아래
      if(x < n){
        x++
        lODirection += 'd';
  
      //왼
      } else if(y < m){
        y--
        lODirection += 'l';
  
      //오
      } else if(y > m){
        y++
        lODirection += 'r';
  
      //위
      } else if(x > n){
        x--
        lODirection += 'u';
      } else {
  
      }
  
      //최단거리 함수
      //sTMove(x, y, r, c)
    }
    
    return answer;
  }
  
  
  
  
  
  alert(solution(3, 4, 2, 3, 3, 1, 5))
  
  