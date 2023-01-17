function solution(my_string) {
  //수도코드 
  //문자열을 소문자로 바꾼다. 
  //문자열을 알파벳 순서 대로 정렬한다.
  return my_string.toLowerCase().split('').sort().join('');
}