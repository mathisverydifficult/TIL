# Basic Types
기본 타입
<br/><br/>

## 1. JavaScript와 TypeScript
### 1-1. Static Types
* Type Script는 Static Types
* Set during development
* 개발하는 중간에 타입을 확인

### 1-2. Dynamic Types
* Java Scrip는 Dynamic Types
* resolved at runtime
* 실제 런타임 시 오류 확인 가능
<br/><br/>

### 1-3. 예제
```javascript
const add = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Incorrect input!')
  }
  return x + y
}
```
자바스크립트는 런타임상에서 타입을 확인하여 에러를 처리한다.
<br/><br/>

```typescript
const add = (x: number, y: number) {
  return x + y
}

// error
add('Hello', 10)
```
타입스크립트는 개발중에 에러를 처리한다.
<br/><br/>

## 2. Type
### 2-1. ECMAScript 표준에 따른 기본 자료형 6가지
* **Primitive Type** (원시타입)
* 오브젝트와 래퍼런스 형태가 아닌 **실제 값**을 저장하는 자료형
* 리터럴 값으로 Primitive Type의 서브타입을 나타낼 수 있다.
* 래퍼 객체로 만들 수 있다. `new Boolean(false)`
<br/><br/>

타입 | 설명 | 링크
|---|---|---|
Boolean           | True or False
Number            | 부동소수점 형식                                   | [number](./number.md)
String            | 16비트 유니코드 문자셋(UTF-16)으로 구성된 문자열
Null              | 의도적으로 값이 없음을 명시하기 위해 할당하는 값  | [undefined & null](./undefined-null.md)
Undefined         | 선언 후 값이 할당되지 않았을 때                   | [undefined & null](./undefined-null.md)
Symbol            | 변경불가한 유일한 값, 값 확인 불가 (외부노출 X)   | [symbol](./symbol.md)

<br/><br/>

### 2-2. Object
타입 | 설명 | 링크
|---|---|---|
Array             | 배열을 생성할 때 사용하는 리스트 형태의 객체      | [array & tuple](./array-tuple.md)

<br/><br/>

### 2-3. 프로그래밍을 도울 몇 가지 타입
타입 | 설명 | 링크
|---|---|---|
Any               | 타입 추론할 수 없거나 타입 체크가 필요없는 변수에 사용
Void              |
Never             |
Unknown           |
Enum              |
Tuple             | 고정된 요소 수 만큼의 타입을 미리 선언후 배열을 표현    | [array & tuple](./array-tuple.md)

<br/><br/>

## 3. Type Casing
Type Script의 핵심 primitive types는 모두 **소문자**이다.
```typescript
const a: String                         // 잘못된 사용
const b: boolean = new Boolean(true)    // 잘못된 사용
const c: string                         // 올바른 사용
```