# Interface
일반적으로 타입 체크를 위해 사용되며 **변수**, **함수**, **클래스**에 사용할 수 있다. 인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다. 인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제하여 일관성을 유지할 수 있도록 하는 것이다. ES6는 인터페이스를 지원하지 않지만 TypeScript는 인터페이스를 지원한다.

인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수 없고 모든 메소드는 추상 메소드이다. 단, 추상 클래스의 추상 메소드와 달리 abstract 키워드를 사용하지 않는다.  
<br/><br/>

## 1. 사용
```typescript
function hello (person: { name: string, age: number }): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

const user: { name: string, age: number } = {
  name: 'Mint',
  age: 26
}

hello(user)
```
여기서 우리는, `{ name: string, age: number }` 이 반복되는 것을 알 수 있다.  
이를 `person` 이라는 데이터 구조로 만들어서 사용해보자.
<br/><br/>

```typescript
interface Person {
  name: string,
  age: number
}

function hello (person: Person): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

const user: Person = {
  name: 'Mint',
  age: 26
}

hello(user)
```
> 자바스크립트에는 인터페이스 개념이 없기 때문에 컴파일 시 인터페이스는 빠지게 된다.  
> 즉, 인터페이스는 컴파일 타임에 문제가 없는지 관계를 규명해서 체크해주는 역할을 한다. 

<br/>

## 2. Optional Property
> 방법 1
```typescript
interface Person {
  name: string,
  age?: number      // ? : 있어도 되고 없어도 되는 값
}

function hello(person: Person): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

hello({ name: 'Mint', age: 21 })
hello({ name: 'Michael' })
```
<br/>

> 방법 2
```typescript
interface Person {
  name: string,
  age?: number,
  [index: string]: any    // [?]이름의 ?값이 올 수 있다
}

function hello(person: Person): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

hello({ name: 'Mint', age: 21, addr: 'seoul' })
hello({ name: 'Michael', look: 'handsome' })
```
<br/>

## 3. Fuction In Inteface
