---
layout: post
title: "HashTable: 전화번호 찾기의 비밀!"
# permalink: /datastructure/non_linear_ds/trie
categories:
  - non-linear-ds
  - basic-ds
image:
  path: /assets/images/ds/non-linear/Hashtable/back.png
  thumbnail: /assets/images/ds/non-linear/Hashtable/back.png
comments: true
excerpt: 전화번호 검색, 아이디 검색 등 에 쓰이는 HashTable에 대해 알아보자
---
휴대폰에서 전화번호 검색을 위해 상대방의 이름을 쳐서 검색한 적이 있으신가요?<br/>
이 때, 내부에는 **효율적인 검색**을 위해 **HashTable** 를 이용하여 전화번호를 찾습니다.<br/>
이 글에선 과연 **HashTable는 무엇인지, 어떤 원리가 숨어있는 지**를 알아보겠습니다.<br/>
> 참조: HashTable은 기본적인 DS로 다른 알고리즘이나 DS에 정말 많이 쓰입니다.

# HashTable은 어떤 기능을 하나요?
어떤 값을 빠른 시간에 Search하거나 값을 Update를 할 수 있는 자료 구조입니다.<br/>
자세히 이야기하면, **키(key)를 통해 얻고자 하는 값에 접근 하는 자료구조**입니다.<br/>

# 문제 제시:
여러기능 중 Search의 기능을 예와 함께 설명을 드리겠습니다.<br/>

한 시골 학교에 6명의 학생이 있는 반과 그 반의 선생님이 있습니다.<br/>
어제 수학 시험을 쳤고 선생님은 각 학생의 수학 점수 기록을 가지고 있습니다.<br/>
이 중 '재석'이라는 학생이 자신의 수학점수가 궁금해서 선생님을 찾아 왔습니다.<br/>

![image](/assets/images/ds/non-linear/Hashtable/problem.png)

위는 수학점수 기록이고, **선생님은 어떻게 효율적으로 '재석'의 수학 점수를 알 수 있을까요?**<br/>
※스스로 한 번 방법을 생각해봅시다!

# Brute-force하게 해봅시다.
단순하게 **위에서부터 학생의 이름을 한 명씩 비교해서 찾을 수 있습니다.**<br/>
그 과정은 아래와 같습니다.<br/>

![image](/assets/images/ds/non-linear/Hashtable/brute-force-1.png)

우리가 찾는 건 '재석'의 학생이지만 데이터의 첫 번째 칸은 '동훈' 학생입니다.<br/>
따라서 다음으로 넘어갑니다.<br/>

![image](/assets/images/ds/non-linear/Hashtable/brute-force-2.png)

위의 경우에도 '재석' 학생의 데이터가 아닙니다.<br/>
이처럼 이름이 찾는 이름이 아닐 경우에는 계속 다음 데이터로 넘어갑니다.<br/>

![image](/assets/images/ds/non-linear/Hashtable/brute-force-3.png)

마지막에 비로소 재석의 이름에 해당하는 데이터를 찾았습니다.<br/>

하지만 위 방법으로 진행했을 경우, **최악의 경우 처음부터 모든 데이터를 검사해야 합니다.**<br/>
![image](/assets/images/ds/non-linear/Hashtable/string-compare.png){: height='20%' width='20%'}
심지어 왼쪽처럼 **이름을 비교하는 상황에도 시간 cost가 발생합니다.**<br/>

Time-complexity를 보았을 때, 최악의 경우는 O(N*M)입니다.<br/>
(이 때 N = 학생 수, M = 학생 이름의 길이)

**하나하나 비교하는 건 비효율적이고, 학생이 많으면 소모되는 시간은 기하급수적으로 커집니다.**<br/>
이 비효율성을 줄이고자, 다음과 같은 HashTable이라는 자료구조가 고안되었습니다.<br/>

# HashTable:
이 문제를 해결하는 아이디어는 **Hashing와 Dynamic-array의 마법을 이용하는 것**입니다.<br/>
사실, 이 두 가지의 비밀 뒤에는 통계이론, lookUpTable 등 여러가지 고려할 것이 많습니다.<br/>
하지만, 이 글에서는 **HashTable의 전체적인 구조에 관해서만 간단히 알아보겠습니다.** <br/>
> 참조 Dynamic-array의 마법을 알고 싶으면 [Dynamic-array]()<br/>
> 참조 Hashing의 마법을 알고 싶으면 [Hashing]()<br/>

**전체적인 구조:**<br/>
※ 쉬운 이해를 위해, 몇 개의 전제 조건을 설정하겠습니다.
1. 10개 slots의 slots-list로 시작
2. 사용자 임의의 한글-lookupTable
3. 사용자 임의의 String-Hash 함수
3. Birthday-Paradox는 신경 쓰지 않음
4. Hashing 함수로 인한 Duplicate-key는 신경 쓰지 않음



> 실제론, Birthday-paradox 같은 문제로 Collision이 생길 수 밖에 없습니다.<br/>
> 이를 완화할 수 있는 전략은 몇 가지가 있습니다. [더 알아보기](https://en.wikipedia.org/wiki/Hash_table)<br/>

# HashTable과 관련된 용어:
구현 언어에 따라 또는 구현 방법에 따라 또는 바로 위에서 언급한 완화할 수 있는 전략에 따라<br/>
이 HashTable의 이름은 조금씩 다릅니다. 그 중에는  HashMap, Map, Dictionary 있습니다.<br/>
하지만 **핵심은 Key-Value로 pair이 된 Collection이라는 것에서 같습니다.**<br/>

참고로, Python에서는 Dictionary, Set이 대표적인 HashTable로 구현된 DataType입니다.<br/>
> Python에서는 Set이 Value가 Binary인 HashTable로 되어있습니다.

# 실제 구현 by Python

**구현 아이디어:**<br/>
1. Dynamic-array
2. Hash

**Code:**<br/>
