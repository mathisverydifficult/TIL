# JavaScript
객체 기반 스크립트 프로그래밍 언어
<br/><br/>

## 1. Basic
### 1-1. 변수 유효범위
유효범위 | 영문 | 설명
|---|---|---|
지역변수 | local variable   | 함수 내에서 선언된 변수
전역변수 | global variable  | 함수의 외부에서 선언된 변수
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
// 표현식이 하나 일 경우 중괄호를 생략할 수 있다.
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
* timeout의 인수로서 done을 출력하는 함수를 넣음
* 거슬러 올라가보면 timeout 함수의 매개변수 callback에 넣은 셈
* timeout함수의 내부에서 콜백을 호출했기 때문에 world -> done 순으로 출력
<br/><br/>

## 3. Class
### 3-1. 생성자 함수

### 3-2. this

### 3-3. ES6 Classes
```javascript
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullname() {
    return `${this.firstName} ${this.lastName}`
  }
}
```

### 3-4. 상속