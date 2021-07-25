# Undefined와 Null
* 각각 undefined와 null이라는 타입만 가질 수 있다.
* 소문자로만 쓴다.
<br/><br/>

## 1. 사용
```typescript
let x: undefined = undefined
let y: null = null
```
<br/><br/>

## 2. 설정
* 따로 설정을 하지 않으면 undefined와 null은 모든 타입의 sub type으로 존재한다.
* **컴파일 옵션**에서 `--strictNullChecks`를 사용하면 undefined와 null은 **void 혹은 자기 자신들**에게만 할당할 수 있다.
* 설정 후 null과 undefined를 할당할 수 있게 하려면 `union type`을 이용해야 한다.
```typescript
// 설정을 하지 않으면 number에 null 할당이 가능하다.
const a: number = null

// --strictNullChecks = true 옵션 설정 후 에러발생
const a: number = null
```
<br/><br/>

* Union (유니온)
```typescript
let union: string | null = null

union = 'Hello'
```