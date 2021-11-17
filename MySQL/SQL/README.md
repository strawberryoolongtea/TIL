# SQL의 종류

SQL이 처리하는 문장의 성격에 따라 분류한 것이다.

> DDL(Data Definition Language) 데이터 정의어

테이블, 뷰, 인덱스, 시퀀스 등의 데이터베이스 객체를 생성 및 삭제하거나 수정하는 데 사용된다.

- ```CREATE``` : 객체를 생성한다.
- ```DROP``` : 객체를 삭제한다.
- ```ALTER``` : 객체를 변경한다.
- ```TRUNCATE TABLE``` : 테이블에 있는 모든 데이터를 삭제한다.
- ```RENAME``` : 객체 이름을 변경한다.

> DML(Data Manipulation Language) 데이터 조작어

데이터베이스의 각 데이터들을 조작하는 데 사용된다.

```SELECT``` 는 정해진 스키마 내에서 쿼리할 수 있는 언어를 뜻하는

DQL(Data Query Language)로 분류하기도 한다.

```DELETE``` 와 ```TRUNCATE``` 의 차이점은

```TRUNCATE TABLE``` 문을 실행하면 테이블에 있는 모든 데이터가 삭제되고 이는 되돌릴 수 없다.

반면 ```DELETE``` 는 조건에 맞는 데이터만 선별해 삭제할 수 있으며

잘못 삭제했을 경우 이전 시점으로 되돌릴 수 있다.

- ```SELECT``` : 테이블이나 뷰에서 데이터를 조회한다.
- ```INSERT``` : 데이터를 입력한다.
- ```UPDATE``` : 기존에 저장된 데이터를 수정한다.
- ```DELETE``` : 테이블에 있는 데이터를 삭제한다.
- ```MERGE``` : 조건에 따라 ```INSERT``` 와 ```UPDATE``` 를 수행한다.

> TCL(Transaction Control Language) 트랜잭션 제어어

트랜잭션을 처리하는 SQL 문이다.

MySQL 에서 ```ROLLBACK``` 을 사용할 경우

기본 기능인 ```AUTOCOMMIT``` 기능을 [비활성화](./)해야 한다.

- ```COMMIT``` : DML로 변경된 데이터를 DB에 적용한다.
- ```ROLLBACK``` : DML로 변경된 데이터를 변경 이전 상태로 되돌린다.

> DCL(Data Control Language) 데이터 제어어

어떤 RDBMS라도 사용하기 위해서는 사용자(user)를 만들고 이 사용자로 로그인해야 한다.

데이터베이스 테이블과 객체를 사용할 때 권한이 있어야 하는데

사용자에게 권한을 할당하거나 회수하는 역할을 한다.

- ```GRANT``` : 객체에 대한 권한을 할당한다.
- ```REVOKE``` : 객체에 할당된 권한을 회수한다.

# SQL 학습하기

[w3schools.com](https://www.w3schools.com/sql/exercise.asp?filename=exercise_select1) 에서 학습할 수 있다.

> SELECT

To get all the columns from the customers table

_student_ 테이블의 모든 칼럼(에 해당하는 정보)을 가져온다.

```sql
SELECT * FROM student;
```
```
+-----------+-----------+-----------+------+-------+---------+
| studentID | lastName  | firstName | age  | city  | country |
+-----------+-----------+-----------+------+-------+---------+
|         7 | hashibira | inosuke   |   15 | tokyo | japan   |
|         8 | rengoku   | kyojuro   |   20 | tokyo | japan   |
|         9 | agatsuma  | zenitsu   |   16 | tokyo | japan   |
|        10 | uzui      | tengen    |   23 | tokyo | japan   |
|        11 | gojo      | satoru    |   28 | tokyo | japan   |
|        12 | fushiguro | megumi    |   15 | tokyo | japan   |
|        13 | nanami    | kento     |   27 | tokyo | japan   |
|        14 | todo      | aoi       |   18 | kyoto | japan   |
+-----------+-----------+-----------+------+-------+---------+
```

_student_ 테이블의 _city_ 칼럼을 가져온다.

```sql
SELECT city FROM student;
```
```
+-------+
| city  |
+-------+
| tokyo |
| tokyo |
| tokyo |
| tokyo |
| tokyo |
| tokyo |
| tokyo |
| kyoto |
| tokyo |
+-------+
```

> DISTINCT

_student_ 테이블의 중복된 값을 제외한 _city_ 칼럼을 가져온다.

**출력되는 값은 정렬되지 않는다.**

```sql
SELECT DISTINCT city FROM student;
```
```
+-------+
| city  |
+-------+
| tokyo |
| kyoto |
+-------+
```

> WHERE

_student_ 테이블의 WHERE 문(city = 'kyoto')을 **충족하는** 모든 칼럼을 가져온다.

```sql
SELECT * FROM student WHERE city = 'kyoto';
```
```
+-----------+----------+-----------+------+-------+---------+
| studentID | lastName | firstName | age  | city  | country |
+-----------+----------+-----------+------+-------+---------+
|        14 | todo     | aoi       |   18 | kyoto | japan   |
+-----------+----------+-----------+------+-------+---------+
```

> WHERE NOT

_student_ 테이블의 WHERE 문(city = 'kyoto')을 **충족하지 않는** 모든 칼럼을 가져온다.

```sql
SELECT * FROM student WHERE NOT city = 'kyoto';
```
```
+-----------+------------+-----------+------+-------+---------+
| studentID | lastName   | firstName | age  | city  | country |
+-----------+------------+-----------+------+-------+---------+
|         7 | hashibira  | inosuke   |   15 | tokyo | japan   |
|         8 | rengoku    | kyojuro   |   20 | tokyo | japan   |
|         9 | agatsuma   | zenitsu   |   16 | tokyo | japan   |
|        10 | uzui       | tengen    |   23 | tokyo | japan   |
|        11 | gojo       | satoru    |   28 | tokyo | japan   |
|        12 | fushiguro  | megumi    |   15 | tokyo | japan   |
|        13 | nanami     | kento     |   27 | tokyo | japan   |
|        15 | kannonzaka | doppo     |   29 | tokyo | japan   |
+-----------+------------+-----------+------+-------+---------+
```

> AND

_student_ 테이블의 WHERE 문 조건을 충족하고 AND 문 조건을 충족하는 **둘 다 해당하는** 모든 칼럼을 가져온다.

```sql
SELECT * FROM student WHERE city = 'tokyo' AND age = 23;
```
```
+-----------+----------+-----------+------+-------+---------+
| studentID | lastName | firstName | age  | city  | country |
+-----------+----------+-----------+------+-------+---------+
|        10 | uzui     | tengen    |   23 | tokyo | japan   |
+-----------+----------+-----------+------+-------+---------+
```

> OR

_student_ 테이블의 WHERE 문 조건을 충족하거나 OR 문 조건을 충족하거나 **둘 중 하나에 해당하는** 모든 칼럼을 가져온다.

```sql
SELECT * FROM student WHERE age = 15 OR age = 16;
```
```
+-----------+-----------+-----------+------+-------+---------+
| studentID | lastName  | firstName | age  | city  | country |
+-----------+-----------+-----------+------+-------+---------+
|         7 | hashibira | inosuke   |   15 | tokyo | japan   |
|         9 | agatsuma  | zenitsu   |   16 | tokyo | japan   |
|        12 | fushiguro | megumi    |   15 | tokyo | japan   |
+-----------+-----------+-----------+------+-------+---------+
```

> ORDER BY

_student_ 테이블의 모든 칼럼을 _age_ 의 **오름차순**으로 정렬한다.

```sql
SELECT * FROM student ORDER BY age;
```
```
+-----------+------------+------------+------+----------+----------+
| studentID | lastName   | firstName  | age  | city     | country  |
+-----------+------------+------------+------+----------+----------+
|         7 | hashibira  | inosuke    |   15 | tokyo    | japan    |
|        12 | fushiguro  | megumi     |   15 | tokyo    | japan    |
|         9 | agatsuma   | zenitsu    |   16 | tokyo    | japan    |
|        14 | todo       | aoi        |   18 | kyoto    | japan    |
|         8 | rengoku    | kyojuro    |   20 | tokyo    | japan    |
|        10 | uzui       | tengen     |   23 | tokyo    | japan    |
|        13 | nanami     | kento      |   27 | tokyo    | japan    |
|        11 | gojo       | satoru     |   28 | tokyo    | japan    |
|        15 | kannonzaka | doppo      |   29 | tokyo    | japan    |
|        16 | albus      | dumbledore |  116 | hogwarts | scotland |
+-----------+------------+------------+------+----------+----------+
```

_student_ 테이블의 모든 칼럼을 _firstName_ 의 **알파벳순**으로 정렬한다.

```sql
SELECT * FROM student ORDER BY firstName;
```
```
+-----------+------------+------------+------+----------+----------+
| studentID | lastName   | firstName  | age  | city     | country  |
+-----------+------------+------------+------+----------+----------+
|        14 | todo       | aoi        |   18 | kyoto    | japan    |
|        15 | kannonzaka | doppo      |   29 | tokyo    | japan    |
|        16 | albus      | dumbledore |  116 | hogwarts | scotland |
|         7 | hashibira  | inosuke    |   15 | tokyo    | japan    |
|        13 | nanami     | kento      |   27 | tokyo    | japan    |
|         8 | rengoku    | kyojuro    |   20 | tokyo    | japan    |
|        12 | fushiguro  | megumi     |   15 | tokyo    | japan    |
|        11 | gojo       | satoru     |   28 | tokyo    | japan    |
|        10 | uzui       | tengen     |   23 | tokyo    | japan    |
|         9 | agatsuma   | zenitsu    |   16 | tokyo    | japan    |
+-----------+------------+------------+------+----------+----------+
```

> DESC

```ORDER BY``` 의 결과와 정반대로 **내림차순**으로 정렬한다.

> INSERT INTO

```sql
INSERT INTO student (lastName, firstName, age, city, country)
VALUES ('kannonzaka', 'doppo', 29, 'tokyo', 'japan');
```
```
+-----------+------------+-----------+------+-------+---------+
| studentID | lastName   | firstName | age  | city  | country |
+-----------+------------+-----------+------+-------+---------+
|         7 | hashibira  | inosuke   |   15 | tokyo | japan   |
|         8 | rengoku    | kyojuro   |   20 | tokyo | japan   |
|         9 | agatsuma   | zenitsu   |   16 | tokyo | japan   |
|        10 | uzui       | tengen    |   23 | tokyo | japan   |
|        11 | gojo       | satoru    |   28 | tokyo | japan   |
|        12 | fushiguro  | megumi    |   15 | tokyo | japan   |
|        13 | nanami     | kento     |   27 | tokyo | japan   |
|        14 | todo       | aoi       |   18 | kyoto | japan   |
|        15 | kannonzaka | doppo     |   29 | tokyo | japan   |
+-----------+------------+-----------+------+-------+---------+
```

> IS NULL / IS NOT NULL

```null``` 값을 다룰 때에는 비교 연산자를 사용하는 대신 ```IS NULL``` 과 ```IS NOT NULL``` 을 사용해야 한다.

아래 쿼리문은 _column_name_ 이 **```NULL``` 값을 가지는** _table_name_ 의 모든 _column_names_ 를 가져온다.

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NULL;
```

아래 쿼리문은 _column_name_ 이 **```NULL``` 값을 가지지 않는** _table_name_ 의 모든 _column_names_ 를 가져온다.

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;
```

> UPDATE

> DELETE

_student_ 테이블에서 ```WHERE``` 문의 조건에 맞는 데이터를 삭제한다.

```sql
DELETE FROM student WHERE firstName = 'dumbledore';
```
```
+-----------+------------+-----------+------+-------+---------+
| studentID | lastName   | firstName | age  | city  | country |
+-----------+------------+-----------+------+-------+---------+
|         7 | hashibira  | inosuke   |   15 | tokyo | japan   |
|         8 | rengoku    | kyojuro   |   20 | tokyo | japan   |
|         9 | agatsuma   | zenitsu   |   16 | tokyo | japan   |
|        10 | uzui       | tengen    |   23 | tokyo | japan   |
|        11 | gojo       | satoru    |   28 | tokyo | japan   |
|        12 | fushiguro  | megumi    |   15 | tokyo | japan   |
|        13 | nanami     | kento     |   27 | tokyo | japan   |
|        14 | todo       | aoi       |   18 | kyoto | japan   |
|        15 | kannonzaka | doppo     |   29 | tokyo | japan   |
+-----------+------------+-----------+------+-------+---------+
```

# 커밋(COMMIT)과 롤백(ROLLBACK)

> ROLLBACK