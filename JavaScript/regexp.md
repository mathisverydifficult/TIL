# 정규표현식
* 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)
* 간단한 문자 검색부터 이메일, 패스워드 검사 등 복잡한 문자 일치 기능 등을 정규식 패턴으로 빠르게 수행 가능
<br/><br/>

## 1. 역할
* 문자 검색(search)
* 문자 대체(replace)
* 문자 추출(extract)
<br/><br/>

## 2. 테스트 사이트
https://regexr.com/
<br/><br/>

## 3. 생성
* 생성자 함수 방식
* 리터럴 방식
<br/><br/>

### 3-1. 생성자 함수 방식
```javascript
const regexp = new RegExp('^abc')           // new RegExp(표현식)
const regexp = new RegExp('^abc', 'gi')     // new RegExp(표현식, 옵션)
```

### 3-2. 리터럴 방식 : 훨씬 더 간편하고 많이 쓰임
```javascript
const regexp = /^abc/                       // /표현식/
const regexp = /^abc/gi                     // /표현식/옵션
```
<br/><br/>

## 4. 실습
```javascript
const str = `
            The quick brown fox jumps over the lazy dog.
            abcdd
            `
const regexp = /the/gi
console.log(str.match(regexp))
```
<br/><br/>

## 5. 정규표현식을 다루는 다양한 메소드 : test / match / replace
메소드|설명|사용|
|---|---|---|
**exec**        | 일치하는 하나의 정보(array) 반환                            | `정규식.exec(문자열)`
**test**        | 일치 여부 (boolean) 반환                                    | `정규식.test(문자열)`
**match**       | 일치하는 문자열의 배열(array) 반환                          | `문자열.match(정규식)`
**search**      | 일치하는 문자열의 인덱스 반환                               | `문자열.search(정규식)`
**replace**     | 일치하는 문자열을 대체하고 대체된 문자열을 반환             | `문자열.replace(정규식, 대체문자)`
**split**       | 일치하는 문자열을 분할하여 배열로 반환                      | `문자열.split(정규식)`
**toString**    | 생성자 함수 방식의 정규식을 리터럴 방식의 문자열로 반환     | `생성자_정규식.toString()`

<br/><br/>

## 6. 옵션 (플래그)
옵션 | 설명 | 설명
|---|---|---|
g | global         | 모든 문자 일치
i | ignore case    | 영어 대소문자를 구분하지 않고 일치
m | multi line     | 여러 줄 일치

<br/><br/>

### 6-1. 예제
문장이 끝나는 부분($)에 마침표(.)가 있는지 확인하라
```javascript
console.log(str.match(/\.$/gi))
```

멀티라인(m)은 줄바꿈이 되어있는 부분을 시작과 끝으로 인식.  
시작과 끝을 줄마다 인식하겠다.
```javascript
console.log(str.match(/\.$/gim))
```
<br/><br/>

## 7. 표현 (패턴)
표현 | 설명
|---|---|
^ab      | 줄(line) 시작에 있는 ab와 일치
ab$      | 줄(line) 끝에 있는 ab와 일치
.        | 임의의 한 문자와 일치
a|b      | a 또는 bdhk dlfcl
ab?      | b가 없거나 b와 일치
{3}      | 3개 연속 일치
{3, }    | 3개 이상 연속 일치
{3, 5}   | 3개 이상 5개 이하(3~5개) 연속 일치
[abc]    | a 또는 b 또는 c
[a-z]    | a 부터 z 사이의 문자 구간에 일치 (영어 소문자)
[A-Z]    | A 부터 Z 사이의 문자 구간에 일치 (영어 대문자)
[0-9]    | 0 부터 9 사이의 문자 구간에 일치 (숫자)
[가-힣]  | 가 부터 힣 사이의 문자 구간에 일치 (한글)
\w       | 63개의 문자와 일치 (Word, 대소영문52개 + 숫자 10개 + _)
\b       | 63개의 문자에 일치하지 않는 문자 경계 (Boundary)
\d       | 숫자(Digit)에 일치
\s       | 공백(Space, Tab 등)에 일치
(?=)     | 앞쪽 일치 (Lookahead)
(?<=)    | 뒤쪽 일치 (Lookbehind)

<br/><br/>

### 7-1. 예제
```javascript
console.log(str.match(/f.x/g))
console.log(str.match(/fox|dog/g))
console.log(str.match(/https?/g))     // http 혹은 https
console.log(str.match(/d{2}/g))
console.log(str.match(/[0-9]{1, }/g))
```
