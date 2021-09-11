# Life Cycle
리액트 컴포넌트는 **탄생부터 죽음**까지 여러 지점에서 개발자가 작업이 가능하도록 메서드를 오버라이딩 할 수 있게 해준다.

> 모든 컴포넌트는 여러 종류의 “생명주기 메서드”를 가지며, 이 메서드를 오버라이딩하여 특정 시점에 코드가 실행되도록 설정할 수 있다. 

<br/>

## Declarative 선언적 유저 인터페이스
탄생부터 죽음까지 선언적으로 표현.  
이것을 오버라이딩하여 사용 가능하다.  

* Initialization
* Mounting
* Updation
* Unmounting

<br/>

## V16.3 이전
> 마운트 : component 생성 및 마운트
* `constructor`
* `componentWillMount`
* `render`               : 최초 랜더
* `componentDidMount`

<br/>

> 업데이트 : props, state 변경
* `componentWillReceiveProps`
  + props를 새로 지정했을 때 바로 호출된다.
  + 여기는 state의 변경에 반응하지 않는다.
    - 여기서 props의 값에 따라 state를 변경해야한다면,
      +  setState를 통해 state를 변경한다.
* `shouldComponentUpdate`
  + props 만 변경되어도
  + state 만 변경되어도
  + props + state 둘 다 변경되어도
  + newProps와 newState를 인자로 해서 호출한다.
  + return type이 boolean
    - true면 render / false면 render 호출 X
    - 이 함수를 구현하지 않으면 default = true
* `componentWillUpdate`
  + 컴포넌트가 재 랜더링 되기 직전에 불린다.
  + 여기서는 `setState` 쓰지 않는다.
* `render`
* `componentDidUpdate` 
  + 컴포넌트가 재 랜더링을 마치면 불린다.

<br/>

> 마운트 해제 : component UnMount  

실제로 언마운트 이후에는 무언가를 처리할 수 없기 때문에 언마운트 직전이라는 Hook이 있다. `(=componentWillUnmount)`
* componentWillUnmount

<br/>

## V16.3 이후
> 마운트

v16.3 이전 | v16.3 이후
|----------|-----------|
constructor | constructor
~~componentWillMount~~ | getDerivedStateFromProps
render | render
componentDidMount | componentDidMount

> 업데이트

v16.3 이전 | v16.3 이후
|----------|-----------|
~~componentWillReceiveProps~~ | getDrivedStateFromProps
shouldComponentUpdate | shouldComponentUpdate
render | render
~~componentWillUpdate~~ | getSnapshotBeforeUpdate
componentDidUpdate | componentDidUpdate

> 마운트 해제

v16.3 이전 | v16.3 이후
|----------|-----------|
componentWillUnmount | componentWillUnmount

<br/>

## ComponentDidCatch 에러 캐치

```jsx
state = {
  hasError: false
}

render() {
  if (this.state.hasError) {
    return <div>예상하지 못한 에러가 발생했습니다.</div>
  }

  return <MySite />
}

// MySite에서 에러가 발생했다!
componentDidCatch(error, info) {
  // hasError -> true 
  // reRender
  this.setState({hasError: true})
}
```

`componentDidCatch`의 단점은 자기 자신에게 문제가 있을 때는 캐치가 되지 않는다. 그래서 `Error Boundaries`를 가장 부모로 만들고, 그 자식으로 우리의 서비스 최상위 컴포넌트를 설정하고 에러를 캐치한다.
(보통은 라이브러리를 사용한다.)

<br/>

## Error Boundaries
https://ko.reactjs.org/docs/error-boundaries.html

<br/>

## 참고
[React Lifecycle](https://ko.reactjs.org/docs/react-component.html)