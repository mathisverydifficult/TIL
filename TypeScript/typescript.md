# TypeScript
자바스크립트에 있는 기능을 강화 + 타입을 설정
<br/><br/>

## 1. 자바스크립트 실행환경
* **Node JS**   
chrome의 v8 js engine을 사용하여 자바스크립트를 해석하고 os 레벨에서의 api를 제공하는 서버 사이드용 자바스크립트 런타임 환경

* **Browser**   
html을 동적으로 만들기 위해 브라우저에서 자바스크립트를 해석하고, DOM을 제어할 수 있도록 하는 자바스크립트 런타임 환경
<br/><br/>

## 2. 타입스크립트 설치
```node
  npm i typescript -g
```
<br/>

## 3. VSCODE와 타입스크립트
* VSCode에 컴파일러가 내장되어 있다.
* 내장된 컴파일러 버전은 VSCode가 업데이트 되면서 올라간다.  
  (그래서 컴파일러 버전과 VSCode의 버전은 상관관계가 있다.)
* 내장된 컴파일러를 선택할 수 있고, 직접 설치한 컴파일러를 선택할 수도 있다.
<br/><br/>

## 4. 사용
```
// 현재 폴더를 npm 프로젝트로 선언
npm init -y

// 실제 런타임에 필요하지 않기 때문에 devDependencies 로 추가
npm i typescript -D

```
<br/>

## 5. 타입스크립트의 타입 시스템
* 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
* 컴파일러가 자동으로 타입을 **추론**하는 시스템
<br/><br/>

### 5-1. 옵션
옵션 | 설명
|---|---|
strictNullChecks  | 모든 타입에 자동으로 포함되어 있는 `null`과 `undefined`를 제거
nolmplicitReturns | 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생 

<br/>

```typescript
const test = (a: number) => {
  if (a > 0) {
    return a * 10
  }
}
// if가 아닌 경우 return을 직접 하지 않고 코드가 종료
```
nolmplicitReturns 예시  
<br/>

### 5-2. Structural Type System
> 구조가 같으면, 같은 타입이다.
```typescript
interface IPerson {
  name: string
  age: number
  speak(): string
}

type PersonType = {
  name: string
  age: number
  speak(): string
}

let personInteface = Iperson = {} as any
let personType = PersonType = {} as any

personInteface = personType;
personType = personInteface;
```

<br/>

### 5-3. 타입 호환성
1. **서브타입**
```typescript
let a: 1 = 1
let b: number = a       // number는 1보다 넓은 개념이기 때문에 에러가 발생하지 않는다.
a = b                   // error
```

2. **공변** : 같거나 서브타입인 경우 할당이 가능
```typescript
let a: string = 'hello'
let b: string | number = a
```

3. **반병** : 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능  
<br/>

### 5-4. 타입 별칭 (Type Alias)
* Interface와 유사해보이지만 다르다.
* `primitive`, `union`, `tuple`, `function` 등의 타입에 다른 이름을 지정할 수 있다.
* 만들어진 타입의 `refer`로 사용하는 것일뿐, **타입을 만드는 것이 아니다.**

```typescript
// primitive
type MyStringType = string
const str: MyStringType = 'Mint'

// union
type StringOrNumer = string | number
const user: StringOrNumber = 'Mint'

// tuple
type CustomTuple = [string, number]
const user: CustomTuple = ['Mint', 17]

// function
type EatType = (food: string) => void
```

> Alias와 Interface 구분?  

* type으로서 목적과 존재가치가 분명하면 interface를 사용
* 대상을 가르킬 뿐일 경우 type alias를 사용

<br/>