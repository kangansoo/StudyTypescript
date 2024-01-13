// index.html의 h4 글자 바꾸기
// narrowing
//에러 <- 제목의 속성이 null | element, null일 수도 있어서 안 됨
// let 제목 = document.querySelector('#title');
// 제목.innerHTML = '반가워요'
// title이라는 id 찾기
var 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
//instanceof 연산자
var 제목1 = document.querySelector('#title');
if (제목1 instanceof Element) {
    제목1.innerHTML = '반가워요';
}
// as
// 찾은 요소를 element로 간주
// null이 들어와도 element로 간주 (비상시 혹은 100% 확신 시에만 사용)
var 제목2 = document.querySelector('#title');
제목2.innerHTML = '반가워요';
// 오브젝트에 ?와 함께(옵셔널 체이닝)
// querySelector로 찾은 것도 일종의 object => 제목에 innerHTML이 있으면 출력, 없으면 undefined
var 제목3 = document.querySelector('#title');
if ((제목3 === null || 제목3 === void 0 ? void 0 : 제목3.innerHTML) != undefined) {
    제목3.innerHTML = '반가워요';
}
//tsconfig.json 파일 수정
// "strictNullChecks"을 false로 수정
// <a> 태그의 href 속성 내용 변경
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
// a태그는 Anchor, button태그는 Button, h태그는 Heading으로 Element 작성
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
