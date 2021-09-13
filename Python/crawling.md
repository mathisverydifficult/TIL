# Web Crawling
웹 페이지의 자료를 수집

<br/>

## Selenium
셀레니움은 크롬과 같은 브라우저를 컨트롤 할 수 있게 해주는 라이브러리

<br/>

### Install
> Install Package
```
pip install selenium
```

> Download Web Driver

[Chrome Web Driver](https://sites.google.com/a/chromium.org/chromedriver/downloads)  
본인의 브라우저 버전에 맞는 `webdriver`를 다운로드  
주로 크롬을 많이 사용한다.  

<br/>

### Import
```python
import selenium
from selenium import webdriver
```

### Open Browser
```python
driver = webdriver.Chrome('웹 드라이버 경로.exe')
driver.get('브라우저에 띄울 URL')
```

### Close Browser
> 현재 탭 닫기
```python
driver.close()
```

> 브라우저 닫기
```python
driver.quit()
```

### Move Tab
```python
driver.switch_to.window(driver.window_handles[0])
driver.switch_to.window(driver.window_handles[1])
```

### Prev | Next
> 뒤로가기
```python
driver.back()
```

> 앞으로 가기
```python
driver.forward()
```

### Wait
> driver.implicitly_wait
```python
driver.implicitly_wait(10)
```
> time.sleep
```python
time.sleep(10)
```

> 둘의 차이점?

* driver.implicitly_wait
  + selenium에서만 사용가능
  + n초가 지나기 전에 브라우저 파싱이 완료되면 기다리지 않고 다음 코드 실행

* time.sleep
  + 무조건 n초를 기다림 (무조건 지연)


### Select Element
```python
driver.find_element_by_id('')
driver.find_element_by_class_name('')
driver.find_element_by_name('')
driver.find_element_by_xpath('')
driver.find_element_by_css_seletor('')
driver.find_element_by_tag_name('')
driver.find_element_by_link_text('')
driver.find_element_by_partial_link_text('')
```

### Click Element
```python
driver.find_element_by_xpath('').click()
```

### Input Text
```python
driver.find_element_by_xpath('').send_keys('입력 텍스트')
```

### Clear Text
```python
driver.find_element_by_xpath('').clear()
```
