---
layout: page
title: "카카오 테스트:블록 이동"
categories:
  - coding test
  - kakao 2020 blind
image:
  path: /assets/images/PS/2020-kakao-blind/blind.png
  thumbnail: /assets/images/PS/2020-kakao-blind/move.png
comments: true
excerpt: 2020 카카오-채용 100% 친절 풀이
actions:
  - label: "문제 풀러가기"
    icon: arrow-right
    url: https://programmers.co.kr/learn/courses/30/lessons/60063
---

**PS에서는 나오기 힘든 코딩을 요구합니다.**<br/>
카카오 Tech 측에서도, '상당한 난이도의 코딩을 요구한다.' 라고 언급할 정도로<br/>
보통 ProblemSolving 문제 이상의 상당한 구현력을 요구합니다.<br/>
# 핵심 개념:
1. [BFS]( {% link _posts/Algorithm/graph_theory/2020-04-16-bfs.md %} )
2. HashMap
3. Memoization - visited

# 풀이법:
1. 최소 시간을 구하기 위해서 BFS을 이용한 Outer-loop에서 최소 시간인 time을 추적합니다.<br/> 마지막 칸을 만나게 되면 time을 Return 합니다.
2. 경우의 수 가지치기를 위해, HashMap을 이용한 memoization을 활용해 이미 지났던 경로를 다시 지날 경우는 Queue에서 제외합니다.
3. 이 때, HashMap 안에는 (좌표1, 좌표2) 가 하나의 키의 역할을 하며  <언제나 좌표2는 좌표1보다 크다.> - 조건1
4. rotate할 때, 문제 조건에 따르면, 축 (axis) 대각측 칸이 0임을 계속 추적해야 하는데, 이 점에서 저는 어떤 패턴도 발견하지 못해서 모든 경우에 맞게 하드코딩을 하였습니다.

**조건1이 필요한 이유:**<br/>
i.e; ((0,0), (0,1)) 와 ((0,1), (0,0)) 같은 건 같은 하나의 key로 취급을 해야하기 때문입니다.

**HardCoding 참고:**<br/>
 style: 가로모양 or 세로모양, axis: 좌표1가 축 or 좌표2가 축, direction: 시계방향 or 반시계 방향

```python
import os
import sys
from collections import defaultdict

# style|axis|direciton
ValueArray = [[[None]*2 for i in range(2)] for i in range(2)]
CheckArray = [[[None]*2 for i in range(2)] for i in range(2)]

def check(coord1, coord2, board):
    x1, y1 = coord1; x2, y2 = coord2
    if min(x1, y1, x2, y2) < 0: return False
    elif max(x1, y1, x2, y2) >= len(board): return False
    elif board[x1][y1] == 1 or board[x2][y2] == 1: return False
    else: return True

def goNEWS(coord1, coord2, i):
    move = [(-1,0), (0, 1), (0, -1), (1,0)]
    new_coord1 = (coord1[0]+move[i][0], coord1[1]+move[i][1]); new_coord2 = (coord2[0]+move[i][0], coord2[1]+move[i][1])
    return sorted((new_coord1, new_coord2))

def rotate(coord1, coord2, board, axis, direction):
    global ValueArray, CheckArray

    axis_coord = coord1 if axis == 0 else coord2
    style = 0 if coord2[1] > coord1[1] else 1

    Check = CheckArray[style][axis][direction]
    Value = ValueArray[style][axis][direction]
    Check_coord = (axis_coord[0] + Check[0], axis_coord[1]+Check[1])

    if 0 <= Check_coord[0] < len(board) and 0 <= Check_coord[1] < len(board) and board[Check_coord[0]][Check_coord[1]] == 0:
        return sorted( ( (axis_coord[0]+Value[0], axis_coord[1]+Value[1]), axis_coord) )
    else:
        return ((-1,-1), (-1,-1))

def initialize(ValueArray, CheckArray):
    CheckArray[0][0][0] = (-1,1);   ValueArray[0][0][0] = (-1,0)
    CheckArray[0][0][1] = (1,1);    ValueArray[0][0][1] = (1,0)
    CheckArray[0][1][0] = (-1,-1);  ValueArray[0][1][0] = (-1,0)
    CheckArray[0][1][1] = (1,-1);   ValueArray[0][1][1] = (1,0)
    CheckArray[1][0][0] = (1,1);    ValueArray[1][0][0] = (0,1)
    CheckArray[1][0][1] = (1,-1);   ValueArray[1][0][1] = (0,-1)
    CheckArray[1][1][0] = (-1,1);   ValueArray[1][1][0] = (0,1)
    CheckArray[1][1][1] = (-1,-1);  ValueArray[1][1][1] = (0,-1)

def solution(board):
    global ValueArray, CheckArray
    initialize(ValueArray, CheckArray)
    HashMap = defaultdict(int)
    Q = [( (0, 0), (0, 1) )]
    time = 0

    while True:
        next_Q = []
        while Q:
            coord1, coord2 = Q.pop(0)
            if not check(coord1, coord2, board): continue
            if (coord1, coord2) in HashMap and HashMap[(coord1, coord2)] <= time: continue
            if coord2[0] == len(board)-1 and coord2[1] == len(board)-1: return time
            HashMap[(coord1, coord2)] = time

            for i in range(4):
                next_Q.append(tuple(goNEWS(coord1, coord2, i)))

            for axis in range(2):
                for direction in range(2):
                    next_Q.append(tuple(rotate(coord1, coord2, board, axis, direction)))

        time += 1
        Q = next_Q
```
