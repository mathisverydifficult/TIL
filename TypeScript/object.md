# Object
* 타입스크립트에서 Object는  
**primitive type이 아닌 것**을 나타내고 싶을 때 사용한다.
<br/><br/>

## 1. 사용
```typescript
// Create by object literal
const person = {
  name : 'mint',
  age : 21
}
```

```typescript
// Create by Object.create
const person = Object.create({
  name : 'mint',
  age : 21
})
```
<br/><br/>

## 2. 예제
```typescript
let obj: object = {}
obj = { name : 'mint' }
obj = [{ nmae : 'mint' }]
obj = 21                  // error
obj = 'mint'              // error  
obj = true                // error
obj = 100n                // error
obj = Symbol()            // error
obj = null                // error
obj = undefined           // error
```
