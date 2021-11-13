# MySQL 시작하기

MySQL을 시작할 때 활용할 수 있는 명령어 모음

## 비밀번호 바꾸기

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
```

## 비밀번호 확인하기

```
SELECT Host,User,plugin,authentication_string FROM mysql.user;
```
## 서버 실행하기

```brew``` 를 사용하거나 ```mysql.server``` 를 사용할 수 있습니다.

```
brew services start mysql
```
```
mysql.server start
```

## 로그인 하기

```
mysql -u root -p
```

## 서버 멈추기

```brew``` 를 사용하거나 ```mysql.server``` 를 사용할 수 있습니다.

```
brew services stop mysql
```
```
mysql.server stop
```

## 안전모드 실행하기

```
mysqld_safe --skip-grant-tables &
```

## 안전모드 실행 시 비밀번호 설정하기 전에 권한 주기

```
flush privileges;
```

## 안전모드 멈추기

```
killall mysqld mysqld_safe
```

# SQL 학습하기

[w3schools.com](https://www.w3schools.com/sql/exercise.asp?filename=exercise_select1) 에서 학습할 수 있다.

> SELECT

To get all the columns from the customers table

_student_ 테이블의 모든 칼럼을 가져온다.

```sql
SELECT * FROM Customers;
```