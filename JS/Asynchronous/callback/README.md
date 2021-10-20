# 콜백 Callback

콜백 함수란 다른 함수의 인자로 전달된다.

콜백 함수를 인자로 받은 ```caller``` 함수는

조건에 따라 콜백 함수를 즉시 실행하거나 나중에 실행할 수 있다.

## 동기 콜백과 비동기 콜백 Synchronous Callback vs Asynchronous Callback

```javascript
function mineDiamond(mine) {
  mine();
}

mineDiamond(() => {console.log('💎')});
```

```mine``` 콜백함수가 바로 실행되고 ```💎``` 가 출력된다.

```javascript
function mineDiamondDelay(mine, time) {
  setTimeout(mine, time);
}

mineDiamondDelay(() => {console.log('💎')}, 3000);
```

```mine``` 콜백함수가 3초 뒤 실행되고 ```💎``` 가 출력된다.