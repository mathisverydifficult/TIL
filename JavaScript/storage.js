// 크롬 개발자 창 -> Application -> Storage -> Local Storage -> Key : Value
//                                             Session Storage -> Key : Value

// Storage          : 하나의 사이트에 종속되는 데이터
// Local Storage    : 만료되지 않는 데이터
// Session Storage  : 세션이 끝날때, 즉 페이지를 닫을 때 만료되는 데이터

// ▶︎ 기본 사용예제 : Value는 문자데이터로 저장하는 것을 권장
// get
localStorage.setItem('myKey', 'myValue')
// set
const my = localStorage.getItem('myKey')
// remove
localStorage.removeItem('myKey')


// ▶︎ Lowdb : JSON 기반의 작은 데이터베이스 (Lodash 기반)
