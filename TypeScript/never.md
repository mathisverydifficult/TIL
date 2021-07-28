# Never
일반적으로 함수의 리턴 타입으로 사용된다.
함수의 리턴 타입으로 `never`가 사용될 경우, 항상 **오류를 출력하거나 리턴 값을 절대로 내보내지 않음**을 의미한다. (=무한루프)

* never 타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있다.
* 하지만 never에는 그 어떤 것도 할당할 수 없다.
* any 조차도 never에 할당할 수 없다.
* 잘못된 타입을 넣는 실수를 막고자 할 때 사용되기도 한다.
<br/><br/>

## 1. 사용
```typescript
const error = (msg: string): never => {
  throw new Error(msg)
}
```
<br/><br/>

## 2. 잘못된 타입막기
```typescript
let a: string = 'hello'

if (typeof a !== 'string') {
  // string이 아닌 순간 a는 never
  let b: never = a
}
```
```typescript
declare const a: string | number

if (typeof a !== 'string') {
  // string이 아닌 a는 number
  // 따라서 아래 코드는 error를 발생시킴
  let b: never = a
}
```