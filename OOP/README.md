# OOP (Object-oriented Programming)

관련된 데이터와 기능을 한 곳에 묶어 처리하는
프로그래밍 패러다임으로,
하나의 모델이 되는 청사진을 만들고
그 청사진을 바탕으로 하는 객체(object)를 만드는
프로그래밍 방법을 말한다.

## 명령 & 절차 지향 프로그래밍(Imperative and Procedural Programming)의 특징 및 단점

- 데이터와 기능이 복잡하게 얽혀있다.
- side effect가 발생할 확률이 높다.
- 한눈에 이해하기 어렵다.
- 코드를 유지보수하기 어렵다.
- 기능을 확장하기 어렵다.

## 객체 지향 프로그래밍의 특징 및 장점

- 데이터와 기능이 관련된 것끼리 묶여있다.
- side effect가 발생할 확률이 낮다.
- 한눈에 이해하기 쉽다.
- 코드를 유지보수하기 쉽고 재사용할 수 있다.
- 새로운 객체를 만들어 기능을 확장하기 쉽다.

## 객체 지향 프로그래밍의 구조

```
object(객체) {
  data(데이터;fields;properties): {
    data1: {},
    data2: {},
    .
    .
    .
  },
  function(함수;기능;methods): {
    function1: {},
    function2: {},
    .
    .
    .
  }
}
```

## 객체 지향 프로그래밍의 4가지 원칙 Principles

- 캡슐화 Encapsulation
- 추상화 Abstraction
- 상속 Inheritance
- 다형성 Polymorphism

### Encapsulation

캡슐화는 서로 관련있는 데이터와 기능을 하나의 단위로 묶어 ```object``` 안에 담아두고 내부 데이터나 구현이 외부로 노출되지 않도록 **은닉화** 한다.

내부에 있는 ```state(데이터의 상태)```는 외부에서 설정할 수 없지만
```외부 기능(function)```을 통해서 내부의 ```state```를 변형할 수 있다.

느슨한 결합에 유리하고 수정에 용이하다.

### Abstraction

추상화는 내부의 복잡한 기능을 외부에서 간단한 인터페이스를 통해 사용할 수 있는 것을 말한다.

### Inheritance

```부모 클래스(parent class)```의 특징을 ```자식 클래스(child class)```가 물려받는 것 또는 ```기본 클래스(base class)```의 특징을 ```파생 클래스(derived class)```가 상속받는다고 말하며 때문에 한번 정의한 클래스를 재사용할 수 있다.

```super class```와 ```sub class```라고도 한다.

```IS-A``` 관계라고도 하며 인스턴스가 클래스이기도 한 것을 말한다.

### Polymorphism

다양한 형태를 가질 수 있다는 의미로 공통된 데이터나 기능을 객체의 특성에 따라 다른 형태로 수행하는 방법을 제공한다.

# 객체 Review

## Singletone 패턴으로 구현한 Unicorn

```javascript
let createUnicorn = {
  creature: '🦄',

  run: function () {
    return 'running ' + this.creature;
  },
  fly: function () {
    return 'flying ' + this.creature;
  },
  carry: function (something) {
    return this.creature + ' with ' + something;
  }
}
```

singletone 패턴은 단 하나의 객체를 만든다.

```javascript
createUnicorn.run(); // 'running 🦄'
createUnicorn.fly(); // 'flying 🦄'
createUnicorn.carry('rainbow'); // '🦄 with rainbow'
```

## 클로저 모듈 패턴으로 구현한 Unicorn

```javascript
function createUnicorn() {
  return {
    creature: '🦄',

    run: function () {
      return 'running ' + this.creature;
    },
    fly: function () {
      return 'flying ' + this.creature;
    },
    carry: function (something) {
      return this.creature + ' with ' + something;
    },
    hide: function (color) {
      return color + ' ' + this.creature;
    }
  }
}
```

클로저 모듈 패턴을 사용하면 매번 새로운 객체를 생성한다.

```javascript
let unicorn1 = createUnicorn();
unicorn1.run(); // 'running 🦄'
unicorn1.hide('pink'); // 'pink 🦄'

let unicorn2 = createUnicorn();
unicorn2.fly(); // 'flying 🦄'
unicorn2.hide('violet'); // 'violet 🦄'
```