function solution(str1, str2) {
  //수도코드
  //str1에 str2포함 여부 확인
  return str1.includes(str2) ? 1 : 2;
}