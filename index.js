// 변수에 타입 지정
var 이름 = 'kim';
이름 = '1';
var 이름1 = ['kim', 'park'];
이름1 = ['123', 'kang'];
var 이름2 = { name: 'kim' };
이름2 = { name: 'park' };
// name?은 name이라는 속성은 옵션
이름2 = {};
//union type
var 이름3 = 123;
이름3 = 123;
이름3 = 'kim';
var 이름4 = 123;
이름4 = 123;
이름4 = 'kim';
// 함수 타입 지정
// 파라미터의 타입 함수() :number는 return 값의 타입
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var john1 = { name: 'kim' };
var john2 = { name: 'kim' };
var john3 = { age: 12 };
// class 타입
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
