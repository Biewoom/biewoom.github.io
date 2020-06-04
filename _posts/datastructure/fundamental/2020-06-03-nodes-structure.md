---
layout: post
title: "Nodes structure: RAM과 포인터의 마법!"
categories:
  - fundamental ds
image:
  path: /assets/images/ds/basic/linked-back.png
  thumbnail: /assets/images/ds/basic/linked-back.png
comments: true
excerpt: 자료구조들의 아버지뻘인 Nodes 구조란 무엇일까?
---
' **제목 그대로' RAM의 마법이자, 자료 구조들의 아버지인 Nodes 구조** 입니다.<br/>
이 글에서는 RAM과 Node structure 그리고 Linked-list에 대해서 설명 하겠습니다.<br/>

# RAM이란?
![image](/assets/images/ds/basic/ram.png)

여기서 계속 말하는 RAM은 우리가 평소에 말하는 하드웨어 "RAM" 그거 맞습니다.<br/>
**이 RAM에 대해서 알아야, Nodes structure의 가치를 제대로 이해 할 수 있습니다.**<br/>

![image](/assets/images/ds/basic/cpu-ram.png)

RAM은 위 그림 처럼 CPU 옆에 붙어서 우리의 명령코드를 수행합니다.<br/>
CPU가 일련의 명령들을 수행하는 동안 값과 자료들을 읽고 기억하는 공간입니다.<br/>
ROM과는 다르게, 전원이 꺼지거나 하면 값이 사라지는 volatile 메모리입니다.<br/>
이 까지의 내용은 많은 분들이 이미 아시는 내용일 거 라고 생각합니다.<br/>

하지만 우리가 이 글에서 주목 해야할 것은 바로 아래의 내용입니다.<br/>

RAM은 **Random Access 방식**으로 데이터를 읽거나 기억하는 메모리입니다.<br/>
그럼 Random Access 방식은 멀까요?<br/>
결론부터 이야기하면, **램에 저장된 어느 데이터든 접근 시간이 거의 동일하다.**<br/>
비유을 들자면, **주소만 알면 그 주소로 순간 이동 할 수 있다.** 입니다.<br/>

랩 안에는 공간이 허용하는 한 집을 짓고, 집을 지을 때마다 주소 값이 생깁니다.<br/>
**우리가 어떤 주소를 알고 그것을 RAM에게 준다면 그 주소로 순간이동 하는 거죠**.<br/>
그림으로 표현하면 램(RAM)은 아래와 같다고 생각하면 됩니다.

![image](/assets/images/ds/basic/Ram-address.png)

이 Nodes 구조는 Pointer 라는 것을 통해 RAM의 특징을 구현한 자료구조입니다.<br/>
>다른 방법으로는 연속성을 통해 RAM의 특징을 구현한 [Array 구조]({% link _posts/datastructure/fundamental/2020-06-03-array-structure.md %})가 있습니다.<br/>

# Node 구조와 Pointer(포인터)란?
Node란 **어떤 주소의 포인터와 고유의 값을 Attribute**로 가진 객체입니다.<br/>
메모리 기준에선, 다른 메모리 주소를 알고 있는 하나의 객체입니다.<br/>

### 잠깐, 포인터에 대한 설명을 쉽게 해보겠습니다.<br/>
컴퓨터상의 모든 값은 메모리의 주소를 가집니다.

# Nodes와 관련된 구조들
Nodes와 관련된 자료구조들은 사실 너무도 많습니다.<br/>
사실 모든 구조가 계속 내려가면 Nodes 또는 Array로 되어 있기 떄문입니다.<br/>
그 중에서 대표적인 것을 뽑자면 **Binary search tree, Trie**정도가 있습니다.<br/>

중요한 건 Nodes 구조들은 **포인터를 이용한 접근과 자료구조 변형이 잦은 구조들**이라는 것입니다.<br/>
즉, **연속적인 주소 접근은 보다는 비규칙적인 주소 접근과 잦은 Insert, Delete가 이루어 지는 구조들**입니다.

이를 이해하면, 왜 많은 비선형 구조들(예: Tree, Trie)들이 Node로 이루어 질 수 밖에 없는지<br/>
그냥 배웠기에 받아들이는 것이 아니라 자연스럽게 이해하실 수 있고 구현도 쉽게 할 수 있습니다.<br/>
