function solution(common) {
  //수도코드
  //만약 파라미터 배열의 0번째, 1번째 수의 차이와
  //마지막에서 2번째 마지막번째 수의 차이가 같다면
  //배열의 마지막 번째 수에 차이를 더해줍니다.
  //아니라면 마지막번째 수에 마지막에서 2번째 값을 나눈 수를 곱해줍니다.

  var answer = 0;

  common[1] - common[0] === common[common.length-1] - common[common.length-2] 
  ? answer = common[common.length-1] + common[1] - common[0]
  : answer = common[common.length-1] * common[common.length-1] / common[common.length-2];

  return answer;
}