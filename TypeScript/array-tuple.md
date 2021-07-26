# Array와 Tuple

<br/><br/>

## 1. 사용
```typescript
// Array
let list : number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]
let list : (number | string) [] = [1, 2, 3, '4']
```

```typescript
// Tuple : 순서와 타입, 길이가 일치해야함
let x: [string, number]
x = ['hello', 10]

x = [10, 'hello']      // 타입 순서가 일치하지 않아 error
x[2] = 'world'         // 길이를 벗어나서 error
```