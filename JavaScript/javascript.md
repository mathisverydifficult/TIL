# JavaScript
객체 기반 스크립트 프로그래밍 언어
<br/><br/>

## 1. Basic
### 1-1. 변수 유효범위
유효범위 | 영문 | 설명
|---|---|---|
지역변수 | local variable   | 함수 **내부**에서 선언된 변수
전역변수 | global variable  | 함수의 **외부**에서 선언된 변수

<br/>

### 1-2. 형변환
함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환
<br/><br/>

## 2. Function
### 2-1. 화살표 함수
> ES6에 새롭게 도입된 함수 표현식
```javascript
const arrowFunction = () => {

}
```
```javascript
// 인자가 하나 일 경우 괄호를 생략할 수 있고,
// 표현식이 하나 일 경우에도 중괄호를 생략할 수 있다.
const arrowFunction = x => return x
```
<br/>

### 2-2. IIFE
> 정의와 동시에 즉시 실행되는 함수
```javascript
(() => {
    
})();
```
<br/>

### 2-3. 호이스팅
> 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
```javascript
const a = 2

// 4가 정상적으로 출력
double()

function double () {
  console.log(a * 2)
}
```

<br/>

### 2-4. 타이머 함수
`setTimeout(함수, 시간)` : 일정 시간 후 함수 실행  
`setInterval(함수, 시간)` : 시간 간격마다 함수 실행  
`clearTimeout()` : 설정된 Timeout 함수를 종료  
`clearInterval()` : 설정된 Interval 함수를 종료  
<br/>

### 2-5. 콜백
> 함수의 인수로서 사용되는 함수  
> ex) setTimeout(함수, 시간)의 함수는 콜백함수
```javascript
function timeout(callback) {
  setTimeout(() => {
    console.log('World')
    callback()
  }, 4000)
}
```
```javascript
timeout(() => {
  console.log('done')
})
```
* timeout의 인수로서 done을 출력하는 함수를 넣는다.
* 거슬러 올라가보면 timeout 함수의 매개변수 callback에 넣은 셈
* timeout함수의 내부에서 콜백을 호출했기 때문에 world -> done 순으로 출력한다.
<br/><br/>

## 3. Class
### 3-1. 생성자 함수
> 객체를 생성하기 위한 템플릿 함수
* 함수 이름의 첫 글자는 **대문자**로 시작
* 반드시 `new` 연산자를 붙여 실행
```javascript
function User {
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// my : Instance
const my = new User('mint', 'park')
console.log(my.getFullName())
```
<br/>

### 3-2. this
> **일반 함수**는 ***호출 위치***에 따라 this 정의  
> **화살표 함수**는 자신이 선언된 ***함수 범위***에서 this 정의
```javascript 
const user = {
  name: 'Mint',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

user.normal()   // Mint
user.arrow()    // undefined
```
화살표 함수는 호출된 위치에 전혀 관계없이 **선언**된 범위 안에서 this가 정의된다.  
<br/>

### 3-3. 클래스 내부에서의 this
```javascript
function User(name) {
  this.name = name
}

User.prototype.normal = function () {
  console.log(this.name)
}

User.prototype.arrow = () => {
  console.log(this.name)
}

const mint = new User('Mint')
mint.normal()   // Mint
mint.arrow()    // undefined
```

```javascript
const timer = {
  name: 'Mint',
  timeout: function () {      // 여기까지가 함수 범위
    setTimeout( () => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()     // Mint
```
<br/>

### 3-4. ES6 Classes
> ES6에서 처음 등장한 자바스크립트 클래스 패턴
```javascript
class User {
  // 아래 표현식은 constructor: function (first, last) { } 와 같다.
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

onst my = new User('mint', 'park')
console.log(my.getFullName())
```
<br/>

## 4. 구조분해할당
> 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JS 표현식

<br/>

> 기본 할당
```javascript
const {a, b, c} = {a: 'hello', b: 'world', c: 'baby'}
```
> 선언 없는 할당
```javascript
let a, b
({a, b} = {a: 1, b: 2})
```
> 새로운 변수 이름으로 할당
```javascript
let pet = {cat: 'coco', dog: 'tommy'}
let {cat: myCat, dog: myDog} = pet

console.log(myCat, myDog)
```
> 기본값 : 객체로부터 해체된 값이 `undefined`인 경우, 변수에 기본 값을 할당
```javascript
let {city = 'seoul', code = 0} = {city: 'busan'}
console.log(city, code)   // busan, 0
```
> 기본값을 갖는 새로운 이름의 변수에 할당
```javascript
let {a: aa = 10, b: bb = 20} = {a: 30}
console.log(aa, bb)
```

<br/>

[참고문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)