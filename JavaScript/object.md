# Object
ES6 문법으로 객체 생성
<br/><br/>

## 1. 사용
```javascript
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullname() {
    return `${this.firstName} ${this.lastName}`
  }
}
```