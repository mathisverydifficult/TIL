# React
React는 **사용자 인터페이스**를 만들기 위한 `JavaScript Library`이다.  
<br/>

## 1. 리액트의 특징
* **Component** 
  + Component Based Development
  + 스스로 상태를 관리하는 캡슐화된 컴포넌트
  + 다양한 형식의 데이터를 앱 안에서 손쉽게 전달
  + DOM과는 별개로 상태를 관리

```html
<!-- HTML Element -->
<img src="이미지 주소" />
<button class="클래스 이름">Click me</button>

<!-- My Component -->
<myComponent name="Mark" />
<myPet prop={false}>Content</myPet>
```

* **Virtual Dom**
  + 사용자 인터페이스를 나타내는 객체
  + html, css 등을 트리 구조로 인식하고 데이터를 객체로 간주
  + DOM을 직접 제어하는 경우 `= jquery`
    - 바뀐 부분만 정확히 바꿔야 한다.
  + DOM을 직접 제어하지 않는 경우
    - 가상 돔 트리를 사용해서
    - 이전 상태와 이후 상태를 비교하여
    - 바뀐 부분을 찾아내어 자동으로 바꾼다.

* **CSR & SSR**
  + React Client Side Rendering & React Server Side Rendering
  + **CSR**
    - JS가 전부 다운로드 되어 리액트 앱이 정상 실행되기 전까지 화면이 보이지 않는다.
    - JS가 전부 다운로드 되어 리액트 앱이 정상 실행된 후, 화면이 보이면서 유저가 인터랙션이 가능해진다.

  + **SSR**
    - JS가 전부 다운로드 되지 않아도 일단 화면은 보이지만 유저가 사용할 수 없다.
    - JS가 전부 다운로드 되어 리액트 앱이 정상 실행된 후 유저가 사용 가능하다.

* **JSX**
  + `JavaScript + xml`
  +  JavaScript를 확장한 문법
<br/><br/>

```javascript
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element
}
```
<br/>

## 2. Element
`Element`는 React app의 **가장 작은 단위**이다.
* Element는 Compenent의 **구성요소**


<br/>

## 3. Component & Props
`Component`를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있다.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
<br/>

## 4. State
### 4-1. 올바른 State 사용법
> 직접 State를 수정하지 않고 `setState()`를 사용한다.  
> `this.state`를 지정할 수 있는 유일한 공간은 `constructor`이다.
```javascript
// Wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'Hello'});
```

## 5. Life Cycle
모든 Component는 여러 종류의 생명주기(life-cycle)을 가지며,  
이 메서드를 오버라이딩 하여 특정 시점에 코드가 실행될 수 있도록 설정할 수 있다.  

> **마운트**

메서드 | 설명
|---|---|
**`constructor`**               | 컴포넌트 생성자 메서드. 컴포넌트가 만들어지면 가장 먼저 실행된다.
`getDerivedStateFromProps`  |
**`render`**                    | 컴포넌트를 랜더링
**`componentDidMount`**         | 컴포넌트의 첫번째 렌더링이 마치고 나면 호출되는 메서드. 이 메서드가 호출되는 시점에는 우리가 만든 컴포넌트가 화면에 나타난 상태이다.

<br/>

> **업데이트**

메서드 | 설명
|---|---|
`getDerivedStateFromProps`  |
`shouldComponentUpdate`     |
**`render`**                    |
`getSnapshotBeforeUpdate`   |
`componentDidUpdate`        | 리렌더링이 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출되는 메서드이다.

<br/>

> **언마운트** : 컴포넌트가 화면에서 사라지는것

메서드 | 설명
|---|---|
**`componentWillUnmount`**      | 컴포넌트가 화면에서 사라지기 직전에 호출된다.

<br/>

# Link
[React Doc](https://ko.reactjs.org/)