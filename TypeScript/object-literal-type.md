# Object Literal Type


## 1. Custom Type
```typescript
interface PersonInterface {
  name: string
  age: number
}
```

```typescript
type PersonTypeAlias = {
  name: string
  age: number
}
```

```typescript
// Before
const user = (a: { name: string, age: number }): string => {
  return `${a.name}, ${a.age}`
}

// Use Custom Type
const user = (a: PersonInteface): string => {
  return `${a.name}, ${a.age}`
}
```