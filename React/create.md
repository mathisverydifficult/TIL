# Create React Project
실제로 리액트 프로젝트를 만들어보자

<br/>

## CRA (Create-React-App)
* 리액트 플젝을 만드는데 필요한 여러가지 패키지들을 전부 설치하게 된다.
* 기본적으로 노드 기반

```
npx create-react-app 프로젝트 이름
```

`npx` : npm5.2.0 이상부터 함께 설치된 커맨드라인 명령어  

### `package.json` 파일을 살펴보자
```json
(...)

"dependencies" : {
  "@testing-lobrary/jest-dom": "버전",    // 테스팅을 돕는다.
  "@testing-lobrary/react" : "버전",
  "@testing-lobrary/user-event": "버전",
   // 리액트와 리액트돔 라이브러리 사용 (핵심적 라이브러리! 필수!)
  "react": "버전",      
  "react-dom": "버전",
  "react-scripts": "버전" // CRA 버전과 같다. (이것이 CRA라고 보면 됨)
}
```

```json
(...)
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "reaxt-scripts test",
  "eject": "react-scripts eject"
}
```
* `start` :  개발모드로 로컬에 띄울 수 있음
* `build` :  배포모드로 컴파일해서 -> build라는 폴더에서 접근 `npx serve -s build`
  + 개발모드 vs 배포모드(프로덕션모드) 차이점?
    - 프로덕션모드는 작고 못생긴 코드로 최적화되어짐  
    - 개발모드에서 소스코드 수정 -> 서버 죽지 않고 자동으로 변경사항 반영

* `test`  : jest 기반 테스트 (테스트코드 작성 -> 실행)
* `eject` : `Are you sure you want t eject? this action is permanent (y/n)`
  + CRA의 관리를 더 이상 받지 않겠다. 이걸 더 이상 사용하지 않곘다.
    - 그렇게 되면 `react-scripts`를 사용하지 못하게 된다는 뜻 🕳
  + 현업에서 이것을 잘 쓰려고 하지는 않는다.
  + CRA 관리를 벗어나게 되면 관리하기가 어려워진다.