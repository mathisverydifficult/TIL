# Type Annotation
자바스크립트와 가장 차별화되는 부분
<br/><br/>

## 1. 사용
```typescript
let a = 'Mark'

a = 10              // 컴파일 에러 발생 (a = String)
```
최초 변수 생성 시 타입스크립트는 타입을 지정한다.
<br/><br/>

```typescript
let a: String

a = 'Mark'
```
변수 선언 시 타입을 지정할 수도 있다.
<br/><br/>

```typescript
function hello (b: number) {

}
hello(10)
hello('World')       // error
```
함수 작성 시에도 타입을 지정할 수 있다.