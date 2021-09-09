# Life Cycle
리액트 컴포넌트는 **탄생부터 죽음**까지 여러 지점에서 개발자가 작업이 가능하도록 메서드를 오버라이딩 할 수 있게 해준다.

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
* `constructor`
* `componentWillMount`
* `render`               : 최초 랜더
* `componentDidMount`

<br/>

> props, state 변경
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
* `render`
* `componentDidUpdate` 

## V16.3 이후
*
*
*
*