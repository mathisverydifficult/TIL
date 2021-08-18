# React Modal

> 리액트 모달창 만들기

<br/>

## 1. Modal.js

함수형 Modal 컴포넌트를 만들었다.

***`open`*** 은 모달창의 상태를 알리며  `true` 는 모달창이 열리고, `false` 는 닫히는 스타일을 적용할 수 있도록 클래스네임을 정의한다.  
***`close`*** 는 `app.js` 에서 `this.closeModal` 함수를 호출시켜, 모달창의 상태를 `false` 로 만들어 모달창이 닫히게 만든다.

```javascript
import React from 'react'

function Modal({ open, close }) {
  return (
    <div className={ open ? 'openModal' : 'closeModal'} onClick={close}>
      { open? (
        <section onClick={(e) => e.stopPropagation()}>
          <button className="close" onClick={close}>close</button>
        </section>
      ) : null }
    </div>
  )
}
```
<br/>

### 1-1. Style code
`modal(openModal & closeModal)` 자체가 body를 모두 가리는 불투명한 배경 레이어가되고,  
`section` 영역이 모달창 영역이 된다.

```css
.closeModal {
  display: none;
}

.openModal {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, .8);
  overflow: hidden;
}

.openModal section {
  position: relative;
  width: 70%;
  min-height: 400px;
  margin: 0 auto;
  padding: 12px;
  z-index: 9;
  background: #ffffff;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.openModal section button {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 200px;
  height: 20px;
  padding: 12px;
  border: unset;
  border-radius: 8px;
  box-sizing: content-box;
  background: #ededed;
  cursor: pointer;
}

.openModal section button:hover {
  background: #dfdfdf;
}
```
<br/>

### 1-2. 영역 밖 클릭 시 모달창 닫기
모달창 밖의 영역인 배경 레이어 `div` 에 `onClick={close}` 이벤트를 주어 닫히게 만들었다.  
하지만 자식노드인 `section` 을 클릭했을 땐 여전히 모달창이 유지되어야 하기 때문에 `e.stopPropagation()` 을 이용해 부모로 이벤트가 전파되는 것을 막아주었다.  
**= 이벤트 버블링(Event Bubbling) 방지**

```javascript
<div className={ open ? 'openModal' : 'closeModal'} onClick={close}>
  { open? (
    <section onClick={(e) => e.stopPropagation()}>
      <button className="close" onClick={close}>close</button>
    </section>
  ) : null }
</div>
```
<br/>

## 2. App.js
모달창을 호출할 위치에서는 `modal` 이라는 모달창의 상태를 관리하는 `state` 를 만들어준다.  
각각 `open` 과 `close` 를 담당하는 함수로 `modal state` 를 관리한다.

```javascript
import React from 'react'
import Modal from './utils/Modal'

class App extends React.Component {
  state = {
    modal: true
  }

  openModal = () => {
    this.setState({ modal: true })
  }
  
  closeModal = () => {
    this.setState({ modal: false })
  }
  
  render() {
    return (
      <section>
        <button onClick={this.openModal}>click me!</button>
        <Modal open={this.modal} close={this.closeModal} />
      </section>
    )
  }
}
```





 
