# Storage

## 1. 사용
```
크롬 개발자 창 -> Application -> Storage -> Local Storage -> Key : Value
                                         Session Storage -> Key : Value
```

## 2. 종류
* Local Storage    : 만료되지 않는 데이터
* Session Storage  : 세션이 끝날때, 즉 페이지를 닫을 때 만료되는 데이터
<br/><br/>

## 3. 기본 사용예제
Value는 문자데이터로 저장하는 것을 권장

* get
```javascript
localStorage.setItem('myKey', 'myValue')
```
* set
```javascript
const my = localStorage.getItem('myKey')
```
* remove
```javascript
localStorage.removeItem('myKey')
```
<br/><br/>

## 3. Lowdb
JSON 기반의 작은 데이터베이스 (Lodash 기반)
