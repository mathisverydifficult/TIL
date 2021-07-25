# Symbol
* ECMAScript 2015의 Symbol
* `new Symbol`을 사용할 수 없다.
* **Symbol을 함수**로 사용해서 **symbol 타입**을 만들어낼 수 있다.
* Primitive Type의 값을 담아서 사용한다.
* 고유하고 수정 불가능한 값으로 만들어준다.
* 그래서 주로 접근을 제어하는데 쓰는 경우가 많다.
<br/><br/>

## 1. 사용
```typescript
console.log(Symbol('foo') === Symbol('foo'))

// false
```
<br/><br/>

## 2. 예제
```typescript
const sym = Symbol()

let obj = {
  [sym]: 'value'
}

console.log(obj[sym])
// value
```
접근을 제어할 때 사용할 수 있다.