# 콜백 Callback

## 동기 콜백과 비동기 콜백 Synchronous Callback vs Asynchronous Callback

```javascript
function printImmediately(print) {
  print();
}

printImmediately(() => {console.log('💎')});
```

```print``` 콜백함수가 바로 실행되고 ```💎``` 가 출력된다.

```javascript
function printWithDelay(print, time) {
  setTimeout(print, time);
}

printWithDelay(() => {console.log('💎')}, 3000);
```

```print``` 콜백함수가 3초 뒤 실행되고 ```💎``` 가 출력된다.