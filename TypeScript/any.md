# Any
어떤 타입이어도 상관없는 타입

* 컴파일 시, 타입 체크가 정상적으로 이루어지지 않기 때문에 **최대한 쓰지 않는 것**이 좋다. (타입안정성 DOWN)
* 타입안정성은 typescript를 사용하는 주요 동기 중 하나기 때문에 필요하지 않은 경우에는 any를 사용하지 않는다.
* 컴파일 옵션 중에는 `any`를 써야하는데 쓰지 않으면 오류를 반환하도록 하는 옵션도 있다. `nolmplicitAny`
* Any는 계속해서 개체를 통해 **전파**된다.
<br/><br/>

## 1. 사용
```typescript
const returnAny(message): any {
  console.log(message)
}

returnAny('아무거나 리턴')
returnAny(123)
```
<br/><br/>

## 2. 개체를 통한 전파
```typescript
let looselyTyped: any = {}          // type : any
const typed = looselyTyped.a.b.c    // type : any
```
<br/><br/>

## 3. Any의 누수를 막아보자
```typescript
const leakingAny = (obj: any) => {
  const a = obj.num
  const b = a + 1

  return b
}
```
리턴되는 값 b는 any type

```typescript
const leakingAny = (obj: any) => {
  const a: number = obj.num
  const b = a + 1

  return b
}
```
a를 number로 지정해줌으로 a, b 모두 number type이 된다.