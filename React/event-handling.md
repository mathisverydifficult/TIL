# Event Handling
Html DOM을 클릭하면 이벤트가 발생하고, 발생하면 그에 맞는 변경이 일어나도록 한다.

* Event Name은 `camelCase`로만 사용할 수 있다.
  + `onClick`, `onMouseEnter`
* 이벤트에 연결된 자바스크립트 코드는 함수이다.
  + `EventName={Function}`
+ 실제 DOM 요소들에만 사용 가능하다.
  + React component에 사용하면 그냥 props로 전달한다.

<br/>

## 1. 함수형 컴포넌트
```javascript
function Component() {
  return (
    <div>
      <button onClick={() => {
        console.log('클릭했습니다.')
      }}>
        Click me!
      </button>
    </div>
  )
}
```

## 2. 클래스 컴포넌트
```javascript
class Component extends React.Component {
  render() {
    return (
      
    )
  }
}
```