# 해시
* 출제빈도 **높음**
* 평균점수 *보통*

<br/>

## 완주하지 못한 선수
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

* **제한사항**  
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

<br/>

```js
const solution = (participant, completion) => {
    const total = participant.length
    let answer = ''
    
    participant.sort()
    completion.sort()
    
    for (let i = 0; i < total; i++){
        if (participant[i] !== completion[i]){
            answer = participant[i]
            return answer
        }
    }
}
```

> 두 배열을 정렬한 뒤, 비교한다. 참가자 명단에는 있지만 완주자 명단에는 없는 사람 리턴

<br/>

### `sort()` 함수 짚고 넘어가기 ~~
`sort()` 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.  
*원 배열이 정렬되는 것! (복사 X)*

* 문자정렬
  + 숫자정렬 예시 `[1, 11, 2, 20, 21, 3]`
* 아스키코드 문자 순서대로 정렬
* 오름차순 정렬
```js
const arr = [1, 10, 3, 13, 15]
arr.sort((a, b) => {
  return b-a
})
// [15, 13, 10, 3, 1]
```

* 내림차순 정렬
```js
const arr = [1, 10, 3, 13, 15]
arr.sort((a, b) => {
  return a-b
})
// [1, 3, 10, 13, 15]
```

* Object 정렬
```js
// 이름 오름차순
const person = [
  { name: "Park Ha", age: 20 },
  { name: "Joy Park", age: 17 },
  { name: "Any", age: 26 },
  { name: "Andrew", age: 22 }
]

person.sort((a, b)=> {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
})

// 이름 내림차순
const person = [
  { name: "Park Ha", age: 20 },
  { name: "Joy Park", age: 17 },
  { name: "Any", age: 26 },
  { name: "Andrew", age: 22 }
]

person.sort((a, b)=> {
  return a.name > b.name ? -1 : a.name < b.name ? 1 : 0
})
```