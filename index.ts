// 변수에 타입 지정
let 이름 :string = 'kim';
이름 = '1';

let 이름1 :string[] = ['kim', 'park'];
이름1 = ['123', 'kang']

let 이름2 :{ name? : string } = { name : 'kim'}
이름2 = { name : 'park'}
// name?은 name이라는 속성은 옵션
이름2 = {};

//union type
let 이름3 :string | number = 123;
이름3 = 123;
이름3 = 'kim';

// type alias
type Name = string | number;
let 이름4 :Name = 123;
이름4 = 123;
이름4 = 'kim'

// 함수 타입 지정
// 파라미터의 타입 함수() :number는 return 값의 타입
function 함수(x :number) :number{
    return x * 2;
}

// array의 tuple 타입
// 첫 번째 값은 숫자, 두 번째 값은 boolean
type Member = [number, boolean];
let john :Member = [123, true]

// object 타입
type Member1 = {
    name :string
}
let john1 :Member1 = { name : 'kim'}
// let john1 :Member1 = { age : 1}; <- 오류

// object에 타입 지정해야 할 속성이 많을 때
type Member2 = {
    [key : string] :string | number;
}
let john2 :Member2 = { name : 'kim'}
let john3 :Member2 = { age : 12}

// class 타입
class User {
    name :string;
    constructor(name :string){
        this.name =name;
    }
}


