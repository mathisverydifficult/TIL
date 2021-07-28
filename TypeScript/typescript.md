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

### 5-2. nolmplicitReturns 예시
```typescript
const test = (a: number) => {
  if (a > 0) {
    return a * 10
  }
}
// if가 아닌 경우 return을 직접 하지 않고 코드가 종료
```
<br/>

### 5-3. Structural Type System
구조가 같으면, 같은 타입이다.
```typescript
interface IPerson {
  name: string;
  age: number;
  speak(): string;
}

type PersonType = {
  name: string;
  age: number;
  speak(): string;
}

let personInteface = Iperson = {} as any;
let personType = PersonType = {} as any;

personInteface = personType;
personType = personInteface;
```

<br/>

### 5-4. Norminal Type System
