---
layout: post
title: "Dynamic Array: Array구조의 기본"
categories:
  - linear-ds
image:
comments: true
excerpt: 가장 기본이 되는 Array 구조인 Dynamic-array 에 대해서 알아보자.
---
# Dynamic-Array의 기능
Dynamic Array는 아래의 기능들을 수행할 수 있어야 합니다.<br/>
1. Initialize
2. Insert
3. Read
4. Update
5. Delete
6. Resize

### Initialize
DynamicArray는 내부 attribute로 할당받은 Heap 주소와 capcity, size를 가집니다.<br/>
가장 처음에는 자료형*Capacity 만큼의 heap을 할당받아야 합니다.<br/>
이 때, 내부적으로는 요청하는 크기만큼 Heap의 **연속적인 배열**을 할당을 해줍니다.<br/>

### Insert
Dynamic array에서의 Insert는 두 가지 경우로 나눌 수 있습니다.<br/>
<1> Array의 끝 부분에 Inert하는 경우 <2> Array의 중간부분에 Insert 하는 경우<br/>

1번의 경우에는 size를 1만큼 늘리고, 끝 부분 값에 새로 넣는 값으로 Update를 하면 됩니다.<br/>
따라서, 시간효율성은 O(1)인 Constant하게 이루어 질 수 있습니다.<br/>

하지만, 2번 경우처럼 Array 중간에 Insert하는 경우 **배열 주소값의 연속성을 유지**하기 위해서는 <br/>
새로운 Array를 만들어야 합니다.<br/> 이는 heap을 새로 할당받고 Copy하는 과정을 거쳐야합니다.<br/>
따라서, O(n)의 시간 효율성을 요구받게 됩니다.<br/>

### Read
**Dynamic-array의 강점이 두드러지는 Action입니다.**<br/>
배열의 연속성을 이용하여 우리가 원하는 Index의 값으로 **Random Access**할 수 있습니다. <br/>
이 때 시간효율성은 O(1)로 Constant하게 접근할 수 있습니다.<br/>
※많은 언어에서는 "[]" 기호로 접근할 수 있게 Indexing을 구현해놓았습니다.<br/>

### Update
**Dynamic-array의 강점이 두드러지는 Action입니다.**<br/>
Update은 바로 위에서 언급한 Read의 action 후에 그 값을 수정하는 Action입니다.<br/>
시간 효율성은 O(1)로 수행할 수 있고, 구현도 Read 부분과 크게 다른 게 없습니다.<br/>

### Delete
Dyanamic array에서 delete를 하는 경우는 크게 두 가지로 나눌 수 있습니다.<br/>
<1> Array의 끝 부분을 Delete하는 경우 <2> Array의 중간 부분을 Delete 하는 경우<br/>

1번 경우에는 size를 1만큼 줄이고 마지막을 None 등의 값들로 다시 처리하면 됩니다.<br/>
따라서, 시간효율성을 O(1)로 구현이 가능합니다.<br/>

하지만, 2번처럼 Array의 중간을 Delete하는 경우 **배열 주소값의 연속성을 유지하기**위해서<br/>
우리는 새로운 Array를 만들고 heap을 할당받고 copy를 하는 과정을 거쳐야합니다.<br/>
따라서, O(n)의 시간 효율성을 요구받게 됩니다.<br/>

### Resize
Static array가 아닌 Dynamic array만의 특징입니다.<br/>
사실 내부 구조는 둘 다 같습니다. 다만, 후자는 Resize를 한다가 차이점입니다.<br/>
이렇게 Resize를 하는 경우는 아래와 같은 두 가지 경우 입니다.<br/>

**1. Insert로 인해, 현재의 Capacity보다 Array의 size가 커지려고 할 때**<br/>
기존의 Capacity보다 size가 커지면, 더 이상 input을 넣을 공간이 부족하게 됩니다.<br/>
이 때, 내부적으로 통상적으로 Capacity의 두 배정도의 새로운 Heap 공간을 요구합니다.<br/>
그런 다음, 새롭게 할당받은 heap 공간에 현재의 값들을 모두 Copy합니다.<br/>
기존에 있던 heap을 해제, 반환을 합니다.<br/>

**2. Delete로 인해, 현재의 Capcity보다 Array이 현재 Size가 턱없이 작을 때**<br/>
현재 쓰고 있는 10밖에 안되는데, 전체 메모리는 100을 할당받고 있으면 비효울적입니다.<br/>
따라서, Delete로 인해 size가 많이 작아지면 통상적으로 반을 다시 반환을 해야 합니다.<br/>

두 가지 모두 O(n)의 시간이 걸리지만, 실제로 Resize는 매번 요구받지는 않습니다.<br/>
따라서 전체 시간효율성에는 큰 변화가 없습니다.<br/>

# 실제 언어와 구현된 Library

※ Dynamic Array를 구현한 라이브러리 입니다.<br/>

**Python:** 기본 구조형 List[]가 내부적으로 Dynamic Array로 되어 있습니다.<br/>
**C++:** STL의 Vector가 내부적으로 Dynamic Array로 되어 있습니다.<br/>
**Java:** java.util.ArrayList가 내부적으로 Dynamic Array로 되어 있습니다.<br/>

# 직접 구현 코드
Python: [Github 코드 보러가기](https://github.com/Biewoom/ds/blob/master/LinearDs/DynamicArray.py)<br/>
