---
layout: post
title: "Array structure: RAM과 연속성의 마법!"
categories:
  - basic-ds
image:
  path: /assets/images/ds/basic/back.png
  thumbnail: /assets/images/ds/basic/back.png
comments: true
excerpt: 자료구조들의 어머니뻘인 Array구조란 무엇일까?
---
' **제목 그대로' RAM의 마법이자, 많은 자료 구조들의 어머니인 Array 구조** 입니다.<br/>
이 글에서는 RAM과 Array 그리고 Dynamic-array에 대해서 설명 하겠습니다.<br/>

# RAM이란?
![image](/assets/images/ds/basic/ram.png)

여기서 계속 말하는 RAM은 우리가 평소에 말하는 하드웨어 "RAM" 그거 맞습니다.<br/>
**이 RAM에 대해서 알아야, Array의 가치를 제대로 이해 할 수 있습니다.**<br/>

![image](/assets/images/ds/basic/cpu-ram.png)

※CacheMemory(SRAM), MainMemory(DRAM) 등 더 깊은 것은 여기서 다루지 않겠습니다.

RAM은 위 그림 처럼 CPU 옆에 붙어서 우리의 명령코드를 수행합니다.<br/>
CPU가 일련의 명령들을 수행하는 동안 값과 자료들을 읽고 기억하는 공간입니다.<br/>
ROM과는 다르게, 전원이 꺼지거나 하면 값이 사라지는 volatile 메모리입니다.<br/>
이까지의 내용은 많은 분들이 이미 아시는 내용 일 것이라고 생각합니다.<br/>

하지만 우리가 이 글에서 주목 해야할 것은 바로 아래의 내용입니다.<br/>

RAM은 **Random Access 방식**으로 데이터를 읽거나 기억하는 메모리입니다.<br/>
그럼 Random Access 방식은 멀까요?<br/>
결론부터 이야기하면, **램에 저장된 어느 데이터든 접근 시간이 거의 동일하다.**<br/>
더 이야기하자면, **데이터의 주소만 알면 RAM은 그 주소로 순간 이동 할 수 있다.** 입니다.<br/>

랩 안에는 공간이 허용하는 한 집을 짓고, 집을 지을 때마다 주소 값이 생깁니다.<br/>
**우리가 어떤 주소를 알고 그것을 RAM에게 준다면 그 주소로 순간 이동을 합니다**.<br/>
그림으로 표현하면 램(RAM)은 아래와 같다고 생각하면 됩니다.

![image](/assets/images/ds/basic/Ram-address.png)

이 Array는 배열의 연속성을 통해 RAM을 이용한 기본 자료 구조입니다.<br/>
>다른 방법으로는 Pointer를 통해 RAM을 이용한 [Nodes 구조]({% link _posts/datastructure/basic/2020-06-03-array-structure.md %})가 있습니다.<br/>

# Array와 연속성:
Array란 **데이터가 연속되어 저장된 배열**입니다.<br/>
메모리 기준에서 말하면, Array란 **데이터들이 연속되는 메모리 주소를 가지는 배열**입니다.<br/>

여기서 계속 강조되는 것은 **배열의 연속성**이라는 것입니다.<br/>
이것이 왜 중요한지는 아파트의 그림과 예를 들어 설명을 드리겠습니다.<br/>

![image](/assets/images/ds/basic/array.png)

일단 **Array란 눕힌 아파트와 같다고 생각할 수 있습니다.**<br/>
Array 안에는 아파트의 호실처럼 공간들이 순차적으로 줄지어 있습니다.<br/>

각 호실은 사실 제각각 고유의 주소(address)를 가지고 있습니다.<br/>
**각 호실은 연속되어 있기에 주소도 서로 연속되는 값을 가지게 됩니다.**<br/>
**아파트이기 때문에 아파트의 주소도 있고 주소는 맨 앞의 호실의 주소와 같습니다.**<br/>

![image](/assets/images/ds/basic/array-ram1.png)

자, 여기서 우리는 **RAM을 광속의 쿠팡맨이다**라고 상상해 보겠습니다.<br/>
쿠팡맨은 **마을아파트가 굉장히 많기 때문에 방 하나 하나 주소를 다 기억하지는 못합니다.**<br/>
대신 **마을에 있는 아파트의 주소는 본사에 전화를 하게 되면 다 알 수가 있죠.**<br/>

![image](/assets/images/ds/basic/array-ram2.png)

여기서 우리 쿠팡맨은 **FF101아파트의 4호실로 가라!**라는 미션을 받게됩니다.<br/>
쿠팡맨은 광속이기 때문에 **방의 주소만 안다면** 순식간에 갈 수 있습니다.<br/>
하지만 안타깝게도 **쿠팡맨은 방 하나 하나의 고유의 주소는 모른다는 것이죠.**<br/>
**쿠팡맨은 과연 어떻게 방 고유의 주소를 얻을 수 있을까요?**<br/>

![image](/assets/images/ds/basic/array-ram3.png)

해결 방법은 바로 **본사에 전화해서 아파트의 주소를 알아내고**<br/>
**아파트의 호실은 연속적이다** 라는 것을 이용하여 주소 값을 얻는 것입니다.<br/>
위 문제의 경우에는 **4호실은 0 호실에서 4만큼 떨어져 있으니, 아파트 주소 + 4 = 4호 주소**<br/>
라는 사실을 알 수 있고, 쿠팡맨은 성공적으로 4호실의 주소로 순간이동 할 수 있습니다.<br/>

위 이야기가 배열의 연속성을 통해 RAM을 이용하는 Array의 핵심입니다.<br/>

# Array와 관련된 자료구조들
Array와 관련된 자료구조들은 사실 너무도 많습니다.<br/>
사실 모든 구조가 계속 내려가면 Nodes 또는 Array로 되어 있기 떄문입니다.<br/>
그 중에서 대표적인 것을 뽑자면 **Unordered Map, binaryHeap**정도가 있습니다.<br/>

중요한 것은 **위 자료구조들은 연속성을 이용한 Index 접근이 필요한 구조들**이라는 것입니다.<br/>
즉, **Array 약점인 비효율적인 Insert, delete 등 보다 Index 접근이 중요한 구조들**입니다.<br/>

위를 이해하면 어떤 구조를 구현 할 때 Linked list로 구현해야 하나? Array로 구현해야 하나?<br/>
고민들은 이전에 구현했던 기억으로 구현하는 것이 아니라 자연스럽게 구현할 수 있게 됩니다.<br/>

가령 Map은 **Hashing을 통해 얻은 Index를 사용해 빠르게 data에 접근해야 한다**라는<br/>
특성 때문에 "slots을 DynamicArray로 구현하는 것이 좋다". 라는 통찰을 얻을 수 있습니다.<br/>
