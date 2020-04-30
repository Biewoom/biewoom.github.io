---
layout: post
title: Matrix-roatation:PPT에서의 그림 90도 회전의 비밀!
categories:
  - misc
  - basic-algo
image:
  path: /assets/images/algo/misc/matrix-rotation/back.png
  thumbnail: /assets/images/algo/misc/matrix-rotation/back.png
comments: true
excerpt: 그림 90도 회전에 쓰는 matrix-rotation에 대해서 알아보자.
---
PPT를 만들거나 포토샵을 수정할 때, 그림을 시계방향 또는 반시계방향으로<br/>
90도, 180도, 270도 회전을 하신 적이 있으신가요? <br/> 우리는 마우스를 이용해 돌리지만,
컴퓨터 안에서는 어떤 일이 벌어지고 있을까요?<br/>
답부터 말하자면, 컴퓨터는 **Matrix-rotation**을 이용해 그림을 90도 회전합니다.<br/>
이 **Matrix-rotation**에 대해서 간단히 알아보도록 하겠습니다.<br/>
> 참조- 여기서는 Inplace가 아닌 Extra memory를 쓴 matrix-rotation에 대한 설명입니다.

# 그림파일은 무엇인가?
주제에 들어가기 앞서서, **그림파일** 이란 무엇인지 아셔야합니다.<br/>

정말 간단하게 컴퓨터는 그림파일을 어떻게 인식하고 있는지 설명하겠습니다.<br/>

![image]({% link assets/images/algo/misc/matrix-rotation/pixel.png %})

정말 간단하게 설명하면, 위 그림처럼 **각 그림은 작은 Pixel들로 이루어져 있고**<br/>
**각 Pixel들은 숫자의 행렬(Maxtrix) 형태로 구성되어 있습니다!**<br/>
이 말은 결국 **모든 그림은 큰 숫자의 행렬(Matrix)모양으로 존재하고 있다는 것입니다.**<br/>

# 그럼, 그림을 회전 시킨다는 건?

![image]({% link assets/images/algo/misc/matrix-rotation/overview.png %})

결국 그림을 회전시킨다는 것은 다시 그림을 만드는 데<br/>
그 그림은 **본래 그림의 행렬 원소를 적당한 패턴으로 재배열하여 만든 행렬**입니다.<br/>

# 시계방향으로 90도로 회전

![image]({% link assets/images/algo/misc/matrix-rotation/clockwise.png %})

위와 같이 시계방향일 때, 행렬도 똑같이 90도를 회전시킨다고 상상하고 돌리면<br/>
행렬로 생각했을 때는 **행렬의 좌표는 아래와 같은 패턴을 따른다는 것을 알 수 있습니다.**<br/>

![image]({% link assets/images/algo/misc/matrix-rotation/clockwise-matrix.png %})

패턴에 따르면, 행렬 좌표로 생각했을 때 **새로운 행렬의 x좌표 = 기존의 y좌표이고**<br/>
**새로운 행렬의 y좌표 = 행렬의 크기 - 기존의 x좌표 - 1** 입니다.

## 구현 by Python
```python
def Clockwise(matrix):
    new_matrix = [[0]*len(matrix) for i in range(len(matrix))]
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            new_matrix[j][len(matrix) - i - 1] = matrix[i][j]
    return new_matrix
```

# 반시계방향으로 90도로 회전

![image]({% link assets/images/algo/misc/matrix-rotation/counterclockwise.png %})

위와 같이 반시계방향일 때, 행렬도 똑같이 90도를 회전시킨다고 상상하고 돌리면<br/>
행렬로 생각했을 때는 **행렬의 좌표는 아래와 같은 패턴을 따른다는 것을 알 수 있습니다.**<br/>

![image]({% link assets/images/algo/misc/matrix-rotation/counterclockwise-matrix.png %})

패턴에 따르면, **새로운 행렬의 x좌표 = 행렬의 크기 - 기존의 y좌표 - 1 이고**<br/>
**새로운 행렬의 y좌표 = 기존의 x좌표** 입니다.

## 구현 by Python
```python
def Counterclockwise(matrix):
    new_matrix = [[0]*len(matrix) for i in range(len(matrix))]
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            new_matrix[len(matrix)- 1 - j][i] = matrix[i][j]
    return new_matrix
```
> **돌리고자 하는 각도가 180, 270일 떄는?**<br/>
이미 아시겠지만, 위의 과정들을 연속해서 하면 됩니다.
