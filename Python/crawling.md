# Web Crawling
웹 페이지의 자료를 수집

<br/>

## Selenium
셀레니움은 크롬과 같은 브라우저를 컨트롤 할 수 있게 해주는 라이브러리

<br/>

### Install
```
pip install selenium
```

### Open Browser
```python
from selenium import webdriver

driver = webdriver.Chrome('웹 드라이버 경로.exe')
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
