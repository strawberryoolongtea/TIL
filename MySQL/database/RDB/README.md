# 관계형 데이터베이스

구조화된 데이터를 테이블에 저장하고 테이블 간에 관계를 맺어 필요한 데이터를 효율적으로 추출할 수 있다.

테이블을 곧 관계(relation)라고도 할 수 있기 때문에

테이블을 사용하는 데이터베이스를 관계형 데이터베이스(Relational database)라고 한다.

> 레코드와 로우는 같은가?

테이블은 가로와 세로, 즉 열(칼럼)과 행(로우)로 구성되어 있다.

테이블의 한 행에 저장된 데이터를 레코드라고도 할 수 있는데,

로우라는 용어와 레코드라는 용어의 차이는 뭘까?

어디서 사용하느냐의 관점에 따라 다음 표와 같이 나눌 수 있다.

|파일 시스템|데이터베이스 모델링|관계형 데이터베이스|
|-|-|-|
|파일(File)|엔터티(Entity)|테이블(Table)|
|레코드(Record)|튜플(Tuple)|행(Row)|
|키(Key)|유일값(Identifier)|기본 키(Primary Key), 고유값(Unique)|
|필드(Field)|속성(Attribute)|칼럼(Column)|

> 데이터베이스 모델링?

데이터 성격에 맞게 테이블 간의 관계를 결정하는 것을 말한다.

모델링의 방법은 주어진 상황이나 시스템의 성격에 따라 달라지는 것이기 때문에 정답은 없지만

조건에 따라 더 적합한 방법을 찾을 수는 있을 것이기 때문에 별도의 이론을 학습하는 것도 좋을 것이다.

> 키 컬럼(Key Column)

데이터 무결성(Integrity)을 확보하기 위해

테이블의 특정 로우 데이터를 식별할 수 있는 값을 가지는 컬럼을 말한다.

> 기본 키(Primary Key)

**중복값을 가질 수 없는,** 한 테이블에서 유일한 식별자 역할을 하는 키

> 참조 키(Foreign Kye)

**중복값을 가질 수 있는,** 다른 테이블의 기본 키와 연결고리가 되는 키

> 트랜잭션(Transaction) 처리

트랜잭션은 여러 작업을 하나로 묶은 실행 유닛을 말하며

트랜잭션의 안전성을 보장하기 위해 필요한 4가지 성질이 있다.

- 원자성(Atomicity): 전부 성공하거나 전부 실패하거나 해서 결과를 예측할 수 있어야 한다.
- 일관성(Consistency): 트랜잭션 이전과 이후에도 데이터베이스의 상태는 일관되어야 한다.
- 고립성(Isolation): 모든 트랜잭션은 다른 트랜잭션으로부터 독립되어야 한다.
- 지속성(Durability): 트랜잭션이 성공하면 해당 트랜잭션에 대한 기록은 영구적이어야 한다.