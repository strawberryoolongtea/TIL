# Algorithm 알고리즘

알고리즘은 문제를 해결하기 위한 절차를 구체적인 순서에 따라 표현한 아이디어나 생각을 말한다.

알고리즘은 비단 프로그래밍에만 국한되는 것이 아니다.

요리의 알고리즘(절차)을 문장화하면 레시피가 되고

연주의 알고리즘(절차)을 도면화하면 악보가 되듯이

컴퓨터가 할 일의 알고리즘을 프로그래밍 언어로 작성하면 컴퓨터 프로그램이 된다.

이 때 작성하는 프로그래밍 언어에 따라 프로그램이 달라진다.

C 언어나 JAVA 언어를 사용하면 C 프로그램, JAVA 프로그램이 되는 것이고

Javascript 언어를 사용하면 Javascript 프로그램이 된다.

## 프로그램 작성의 흐름

프로그램은 크게 ```기획```, ```설계```, ```프로그래밍```, ```디버깅```, ```문서 작성``` 이라는 단계를 거쳐 진행된다.

알고리즘은 설계 단계에서 필요하다.



## Greedy Algorithm 탐욕 알고리즘

선택의 순간마다 가장 최적의 상황을 먼저 선택해 해답에 도달하는 방법이다.

1번 현재 상태에서 가장 최적의 답을 선택한다. (선택 절차(Selection Procedure))

2번 선택된 답이 문제의 조건을 만족하는지 검사한다. (적절성 검사(Feasibility Check))

3번 문제가 해결되었는지 검사하고 해결되지 않았다면 1번으로 돌아가 과정을 반복한다. (해답 검사(Solution Check))

### 탐욕 알고리즘을 사용하기 전에 체크할 2가지

- 앞의 선택이 이후의 선택에 영향을 주지 않는다.
- 부분 문제의 해결 방법으로 최종 문제 해결 방법까지 도달해야 한다.
- 즉, 최종 문제 해결 방법은 부분 문제 해결 방법들로 구성된다.

## Dynamic Programming (DP) 동적 계획법

주어진 문제를 하위 문제로 나누고 하위 문제들의 해결 방법을 결합해 최종적으로 문제를 해결하는 방법이다.

하위 문제를 해결한 값을 저장하고 동일한 하위 문제에서 저장된 값을 적용하는 방식으로 계산 횟수를 줄일 수 있다.

### n번 째 피보나치 수열 구하기

> Recursion

```javascript
function fibonacci(n) {
  if (n <= 2) return 1;

  return fibonacci(n - 2) + fibonacci(n - 1);
}
```

> Dynamic Programming 1 (Recursion + Memoization)

큰 문제를 해결하기 위해 작은 문제를 호출하기 때문에 **Top-down** 방식이라고 할 수 있다.

```javascript
function fibonacci(n, memo=[]) {
  if (n <= 2) return 1;
  if (memo[n] !== undefined) return memo[n];

  let result = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);

  memo[n] = result;

  return result;
}
```

> Dynamic Programming 2 (Iteration + Tabulation)

작은 문제에서 큰 문제로 해결해 나가기 때문에 **Bottom-up** 방식이라고 할 수 있다.

```javascript
function fibonacci(n) {
  if (n <= 2) return 1;

  let fiboNum = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fiboNum[i] = fiboNum[i - 2] + fiboNum[i - 1];
  }

  return fiboNum[n];
}
```

Top-down 방식과 Bottom-up 방식의 소요 시간을 비교하면

Bottom-up 시간과 메모리를 절약할 수 있다.

## 순열과 조합