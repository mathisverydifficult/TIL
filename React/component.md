# Component & Props & State

## 1. Component
* Hooks 이전
  + 컴포넌트 내부에 상태가 있다면?
    - `class`
  + 컴포넌트 내부에 상태가 없다면?
    - 라이프 사이클을 사용해야 한다면?
      + `class`
    - 라이프 사이클에 관계 없다면?
      + `function`

* Hooks 이후
  + `class`
  + `function`

<br/>

### 1-1. Class Component
```javascript
import React from 'react';

// 정의
class ClassComponent extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

// 사용
<ClassComponent />
```

<br/>

### 1-2. Function Component
```javascript
import React from 'react';

// 정의1
function FunctionComponent () {
  return <div>Hello World</div>
}

// 정의2
const FunctionComponent = () => <div>Hello World</div>

// 사용
<FunctionComponent />
```
<br/>

## 2. Props와 State
> Props는 컴포넌트 **외부에서** 컴포넌트에게 주는 데이터이다.  
> State는 컴포넌트 **내부에서** 변경할 수 있는 데이터이다.  
> ***둘 다 변경이 발생하면 랜더가 다시 일어날 수 있다.***

<br/>

### 2-1. Props 사용
```javascript
// function
function Component (props) {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  )
}
```

```javascript
// class
class Component extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    )
  }
  // 기본값 설정 방법1 
  static defaultProps = {
    message: '기본값'
  }
}

// 기본값 설정 방법2 (class & function)
Component.defaultProps = {
  message: '기본값'
}
```

### 2-2. State 사용
```javascript
class Component extends React.Component {
  // object
  state = {
    count: 0
  }
}
```