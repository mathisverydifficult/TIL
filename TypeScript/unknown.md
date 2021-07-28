# Unknown
개발 시 모르는 변수의 타입을 묘사해야할 경우가 있다.
컴파일러에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입이 unknown이다.

* typescript 3.0 부터 지원한다.
* any와 짝으로 any보다 type-safe한 타입이다.
* any와 같이 아무거나 할당할 수 있다.
* 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당 및 사용이 불가하다.
* unknown 타입을 사용하면 runtime error를 줄일 수 있다.
<br/><br/>

## 1. 사용
타입가드(Type Guard)를 사용해서 할당과 호출이 가능하다.   
unknown은 **항상 타입가드를 통한 사용**만 가능하지만, any는 타입가드 없이 사용 가능하다.
```typescript
declare const maybe: unknown

// compile error 
// any였다면 컴파일 에러가 발생하지 않음
const aNumber: number = maybe   

// Use Type Guard
if (typeof maybe === 'string') {
  const aString: string = maybe
  const aNumber: number = number  // error
}
```
