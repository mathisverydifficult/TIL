// CallBack : 함수의 인수로 사용되는 함수
// ex) setTimeout(함수, 시간) 의 함수는 콜백함수

function timeout(callback) {
  setTimeout(() => {
    console.log('World')
    callback()
  }, 4000)
}

// timeout의 인수로서 done을 출력하는 함수를 넣음
// 거슬러 올라가보면 timeout 함수의 매개변수 callback에 넣은 셈
// timeout함수의 내부에서 콜백을 호출했기 때문에 world -> done 순으로 출력
timeout(() => {
  console.log('done')
})