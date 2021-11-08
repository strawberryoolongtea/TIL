# CLI 명령어 모음

|command|full form|do|
|-|-|-|
|pwd|print working directory|현재 위치 확인하기|
|mkdir|make directory|새로운 폴더 생성하기|
|ls|list|특정 폴더에 포함된 파일이나 폴더 확인하기|
|open|open|폴더나 파일을 열기|
|cd|change directory|폴더에 진입하기|
|touch|touch|파일 생성하기|
|cat|concatenate / catenate|파일의 내용을 터미널에 출력하기|
|rm|remove|폴더나 파일 삭제하기|
|mv|move|폴더나 파일의 이름을 변경하거나 위치를 옮기기|
|cp|copy|폴더나 파일을 복사하기|
|clear|clear|터미널 창의 이전 명령들 삭제하기|
|sudo|superuser do / substitute user do|관리자 권한 부여하기|
|top|top|메모리, CPU 사용률 등 컴퓨터 프로세스 나열|
|q|quit|하위 화면을 종료하고 터미널로 돌아가기|
|ditto|?|폴더의 내용을 새 폴더로 복사하기|
|whatis|whatis|명령에 대한 한 줄 설명 얻기|
|man|manual|명령에 대한 매뉴얼 페이지 표시하기|
|chmod|change mode|사용 권한 변경하기|

# 사용 권한과 환경 변수

## 사용 권한

- 읽기(Read) => ```r```
- 쓰기(Write) => ```w```
- 실행(Execute) => ```x```

```
drwxrwxrwx
```

첫째자리의 ```d``` 는 ```directory``` 라는 의미이고

```-``` 로 대체하면 ```not directory``` 라는 의미이다.

반복되는 ```rwx``` 를 다음과 같이 사용자, 그룹, 나머지에 대한 권한으로 각각 나눌 수 있다.

```d / rwx / rwx / rwx```

### user 사용 권한

첫 번째 권한인 user(사용자)는 파일의 소유자이다.

기본적으로 파일을 만든 사람이 소유자가 된다.

따라서 user를 소유자(owner)라고 하기도 한다.

### group 사용 권한

group에는 여러 user가 포함될 수 있다.

group에 속한 모든 user는 파일에 대한 동일한 group 액세스 권한을 가진다.

많은 사람이 파일에 접근해야되는 프로젝트의 경우,

각 user에게 일일히 권한을 할당하는 대신 모든 user를 group에 추가하고 파일에 group 권한을 할당할 수 있다.

### other 사용 권한

파일에 대한 액세스 권한이 있는 다른 user를 말한다.

파일을 만들지 않은 다른 모든 user를 말한다.

따라서 other 권한을 설정하면 해당 권한을 global 권한 설정이라고 볼 수도 있다.

### 사용 권한 변경

OS에 로그인한 사용자와 폴더 및 파일의 소유자가 같을 경우

```chmod``` 명령어를 통해 권한을 변경할 수 있다.

소유자가 다를 경우에는 관리자 권한을 획득하는 명령어 ```sudo``` 를 이용해 권한을 변경할 수 있다.

### Symbolic method

```+``` ```-``` ```=``` 과 액세서 유형을 표기해서 변경하는 방법이다.

액세스 클래스, 연산자, 액세스 타입으로 구분한다.

|Access class||
|-|-|
|u|user|
|g|group|
|o|other|
|a|all: u, g, o|

|Operator||
|-|-|
|+|add access|
|-|remove access|
|=|set exact access|

|Access type||
|-|-|
|r|read|
|w|write|
|x|execute|

#### Example

```
chmod a=rw helloworld.js
```

```helloworld.js``` 의 파일 권한은 ```-rw-rw-rw-``` 로 변경되었다.

```
chmod o= helloworld.js
```

```helloworld.js``` 의 파일 권한은 ```-rw-rw----``` 로 변경되었다.

```
chmod u+x helloworld.js
```

```helloworld.js``` 의 파일 권한은 ```-rwxrw----``` 로 변경되었다.

### Absolute form

```rwx``` 를 3bit로 해석해 숫자 3자리로 권한을 표기해서 변경하는 방법이다.

숫자 7까지 나타내는 3 bits의 합으로 표기한다.

|Permission|Number|
|-|:-:|
|Read(r)|4|
|Write(w)|2|
|Execute(x)|1|

|#|Sum|rwx|Permission|
|-|-|-|-|
|7|4(r) + 2(w) + 1(x)|rwx|read, write and execute|
|6|4(r) + 2(w) + 0(-)|rw-|read and write|
|5|4(r) + 0(-) + 1(x)|r-x|read and execute|
|4|4(r) + 0(-) + 0(-)|r--|read only|
|3|0(-) + 2(w) + 1(x)|-wx|write and execute|
|2|0(-) + 2(w) + 0(-)|-w-|write only|
|1|0(-) + 0(-) + 1(x)|--x|execute only|
|0|0(-) + 0(-) + 0(-)|---|none|

#### Example

```
chmod 734 helloworld.js
```

```helloworld.js``` 의 파일 권한은 ```-rwx-wxr--``` 로 변경되었다.

## 환경 변수

### 환경 변수 임시 적용

Linux에는 이미 많은 환경 변수가 설정되어 있다.

```export``` 명령어를 통해 기록된 환경 변수를 확인하고 새로운 환경 변수를 추가할 수 있다.

```=``` 연산자 앞뒤에는 반드시 공백이 없어야 한다.

```
export strawberry="is delicious"
```

### javascript에서 환경 변수 사용하기

```
npm init # Enter를 여러번 입력해 init을 마친다.
npm i dotenv
```

```dotenv``` 모듈을 사용하면 자바스크립트에서 환경 변수를 사용할 수 있다.

```dotenv``` 는 환경 변수를 ```.env``` 파일에 저장하고 ```process.env``` 로 로드하는 의존성 모듈이다.

```.env``` 파일은 루트에 위치해야한다.

노드 내장 객체인 ```process.env``` 를 이용하면 ```export``` 로 확인한 내용과 동일한 내용을 객체로 출력한다.

환경 변수를 이용해 API key, DB password와 같은 민감한 정보를 저장하고 관리할 수 있다.

뿐만 아니라 서로 다른 PC 또는 여러 ```.env``` 파일에서, 같은 변수 이름에 다른 값을 할당할 수 있다.

즉, 환경에 따라 다른 값을 사용해 코드를 작성할 수 있다.

```
# 개발 환경(development)에서 접근할 데이터베이스
DATABASE_NAME=my_app_dev

# 테스트 환경(test)에서 접근할 데이터베이스
DATABASE_NAME=my_app_test

# 제품 환경(production)에서 접근할 데이터베이스
DATABASE_NAME=my_app_prod
```