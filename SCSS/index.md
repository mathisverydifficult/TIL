# Sass (SCSS)
* CSS 전처리도구
* `Sass`와 `SCSS` 두 가지 문법을 제공하지만,  `SCSS`를 사용하는 것을 더 권장한다.

<br/>

## 1. Install
> Sass는 웹에서 직접 동작할 수 없다.  
전처리기로 작성 후 CSS로 컴파일을 해야한다. 다양한 컴파일 방식이 있다.

<br/>

### 1-1. `Parcel` 을 이용하기
```
npm install -g parcel-bundler
```

## 2. 사용
### 2-1. 기본
```scss
$color: red;

.container {
  h1 {
    color: $color;
  }
}
```
<br/>

### 2-2. 주석
```scss
.container {
  h1 {
    color: red;
    // font-size: 18px;
    /* background-color: tomato; */
  }
}
```
`//`와 `/* */`을 주석으로 사용할 수 있다.  
`//`의 경우 `SCSS->CSS`로 컴파일 시에 나타나지 않고, `/* */`을 주석으로 사용했을 경우에는 컴파일 후에도 보여진다.

<br/>

### 2-3. 중첩
```scss
.container {
  /* > : 자식선택자 */
  > ul {
    li {
      .title {

      }
      .content {

      }
    }
  }
}
```

<br/>

### 2-4. 상위선택자 참조
```scss
.btn {
  position: absolute;
  &.active {
    color: blue;
  }
}

.list {
  li {
    &:last-child {
      margin: 5px;
    }
  }
}
```

<br/>

[참고문서](https://sass-lang.com/guide)