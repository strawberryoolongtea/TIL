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