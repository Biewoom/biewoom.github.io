---
layout: post
title: "Dynamic-array: RAM과 연속성의 마법!"
# permalink: /datastructure/non_linear_ds/trie
categories:
  - linear-ds
  - basic-ds
image:
  path: /assets/images/ds/linear/dynamic-array/back.png
  thumbnail: /assets/images/ds/linear/dynamic-array/back.png
comments: true
excerpt: 가장 기본이 되는 Dynamic-array와 Array에 대해서 알아보자.
---
' **제목 그대로' RAM의 마법이자, 자료 구조들의 어머니인 Dynamic-array** 입니다.<br/>
이 글에서는 RAM과 Dynamic-array에 대해서 설명 하겠습니다.<br/>
※이 글은 Array의 내용을 통합해서 이야기 하고 있습니다.<br/>

# RAM이란?
![image](/assets/images/ds/linear/dynamic-array/ram.png)

여기서 계속 말하는 RAM은 우리가 평소에 말하는 하드웨어 "RAM" 그거 맞습니다.<br/>
**이 RAM에 대해서 알아야, Dynamic-array의 가치를 제대로 이해 할 수 있습니다.**<br/>

![image](/assets/images/ds/linear/dynamic-array/cpu-ram.png)

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

![image](/assets/images/ds/linear/dynamic-array/Ram-address.png)

이 Dynamic-array는 Array의 연속성을 통해 RAM의 특징을 구현한 자료구조입니다.<br/>
>다른 방법으로는 Pointer를 통해 RAM의 특징을 구현한 [Linked-list]({% link _posts/datastructure/linear/2020-04-25-linked-list.md %})가 있습니다.<br/>
