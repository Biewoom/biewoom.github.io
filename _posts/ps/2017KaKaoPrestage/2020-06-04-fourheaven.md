---
layout: post
title: "카카오 페스티벌: 사천성"
categories:
  - coding test
  - kakao 2017
image:
  path: assets/images/PS/2017-kakao-festival/newback.png
  thumbnail: /assets/images/PS/2017-kakao-festival/fourheaven.png
comments: true
excerpt: 2017-카카오 페스티벌-100% 풀이
actions:
  - label: "문제 풀러가기"
    icon: arrow-right
    url: https://programmers.co.kr/learn/courses/30/lessons/1836
---
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges<br/>

# 핵심개념
<1> Find 함수 구현<br/>
<2> BackTracking<br/>
<3> String -> char Array<br/>

# 팁
String은 Type은 replace가 있긴 하지만 본래가 immutable한 자료구조입니다.<br/>
Logic 수행 과정에서 잦은 변화가 있기 때문에 미리 char Array로 바꾸는 게 좋습니다.<br/>
HashSet으로 우리가 계산해야 할 전체 tile 수를 먼저 구해놓는 것도 좋은 거 같습니다.<br/>

전체적으로 BackTracking을 이용해 문제를 풀 수 있습니다. 그 과정은 아래와 같습니다.
1. **제거할 수 있는 타일이 있는 지 검사한다.**
2. 제거할 수 있는 게 있다면 타일을 제거한다.
3. 제거했다면, 변환 후의 board로 다시 BackTracking을 수행한다.
4. 제거하지 못했다면, 수행을 멈춘다.

우리는 매번 제거할 수 있는 Tile이 있는 지를 검사를 해야합니다.<br/>
여기서 주목해야할 점은 모든 제거하는 경우는 두 가지로 압축을 할 수 있다는 것입니다.<br/>

1. 자신이 Tile 중 하나이고 나랑 같은 Tile을 수직 또는 수평에서 찾는다.
2. 자신은 두 가지 Tile들을 이어주는 Bridge이고 수평에서 하나, 수직에서 하나 찾는다.<br>

> 제거하는 Logic의 자세한 내용은 밑에서 설명하겠습니다.

# 그림 설명
Matrix의 모든 원소를 돌아가며 제거하는 타일이 있는 지를 체크해야합니다.<br/>
이 때 Matrix의 원소는 3가지 경우가 있습니다.<br/>
1. 자신이 타일인 경우(Capital alphabet)
2. 자신이 빈 공간인 경우
3. 자신이 Wall 인 경우

### 1번 경우
![image](/assets/images/PS/2017-kakao-festival/find1.png){: height="50%" width="80%"}

자신은 Bridge 역할은 할 수 없고 직접 같은 타일이 있는지 검사해야합니다.<br/>

### 2번 경우
![image](/assets/images/PS/2017-kakao-festival/find2.png){: height="50%" width="80%"}

![image](/assets/images/PS/2017-kakao-festival/find3.png){: height="50%" width="80%"}

자신은 타일의 역할을 할 수 없고 Bridge의 역할만 가능합니다.<br/>

### 3번 경우
그냥 continue로 넘어가면 됩니다.<br/>

### 시간효율성
Initialize 과정: O(m * n)<br/>
BackTracking 과정: O(m * n * k) 단, k = 전체 타일의 종류 수<br/>
Total: O(m * n * k)<br/>

# Code:
```java
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int m = Integer.parseInt(sc.nextLine());
    int n = Integer.parseInt(sc.nextLine());

    String[] board = new String[m];
    String[] lines = sc.nextLine().split(", ");

    for (int i = 0; i < m; i++) {
      String input = lines[i].substring(1, n + 1);
      board[i] = input;
    }
    String result = new Solution().solution(m, n, board);
    System.out.println(result);
  }
}

class Solution {

  public int checkRemovability(int m, int n, char[][] charBoard) {
    char finalRemover = 'a';

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        // <First> I'm a wall, Skip myself!
        if (charBoard[i][j] == '*')
          continue;
        // <Second> I'm a point which help some tile to find his partener!
        else if (charBoard[i][j] == '.') {
          // there are four cases:
          char upperCh = userFind.findUpper(m, n, i - 1, j, charBoard);
          char lowerCh = userFind.findLower(m, n, i + 1, j, charBoard);
          char leftCh = userFind.findLeft(m, n, i, j - 1, charBoard);
          char rightCh = userFind.findRight(m, n, i, j + 1, charBoard);
          // 1: upper meet left
          if (upperCh != '*' && upperCh != '.' && upperCh == leftCh)
            finalRemover = userFind.findMin(finalRemover, upperCh);
          // 2: upper meet right
          if (upperCh != '*' && upperCh != '.' && upperCh == rightCh)
            finalRemover = userFind.findMin(finalRemover, upperCh);
          // 3: lower meet left
          if (lowerCh != '*' && lowerCh != '.' && lowerCh == leftCh)
            finalRemover = userFind.findMin(finalRemover, lowerCh);
          // 4: lower meet right
          if (lowerCh != '*' && lowerCh != '.' && lowerCh == rightCh)
            finalRemover = userFind.findMin(finalRemover, lowerCh);
        }
        // <Third> I'm a tile and find my partener!
        else {
          char curCh = charBoard[i][j];
          if (curCh == userFind.findRight(m, n, i, j + 1, charBoard))
            finalRemover = userFind.findMin(finalRemover, curCh);
          if (curCh == userFind.findLower(m, n, i + 1, j, charBoard))
            finalRemover = userFind.findMin(finalRemover, curCh);
        }
      }
    }
    return ((finalRemover == 'a') ? -1 : (int)finalRemover);
  }
  public void Remove(int m, int n, char[][] charBoard, char ch) {
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        if (charBoard[i][j] == ch)
          charBoard[i][j] = '.';
      }
    }
  }

  public void backTracking(int leftTiles, int m, int n, char[][] charBoard,
                           ArrayList<Character> answerList) {
    if (leftTiles <= 0)
      return;

    int toBeRemovedTile = checkRemovability(m, n, charBoard);
    if (toBeRemovedTile > 0) {
      Remove(m, n, charBoard, (char)toBeRemovedTile);
      answerList.add((char)toBeRemovedTile);
      backTracking(leftTiles - 1, m, n, charBoard, answerList);
    } else
      return;
  }

  public String solution(int m, int n, String[] board) {

    char[][] charBoard = new char[m][n];
    ArrayList<Character> answerList = new ArrayList<Character>();

    userUtil.initializeCharBoard(m, n, charBoard, board);
    int tilesNumber = userUtil.checkTiles(m, n, charBoard);

    backTracking(tilesNumber, m, n, charBoard, answerList);
    return ((answerList.size() == tilesNumber) ? userUtil.getString(answerList)
                                               : "IMPOSSIBLE");
  }
}

class userFind {
  public static char findRight(int m, int n, int x, int y, char[][] charBoard) {
    while (y < n && charBoard[x][y] == '.') {
      y++;
    }
    return ((y >= n) ? '*' : charBoard[x][y]);
  }
  public static char findLeft(int m, int n, int x, int y, char[][] charBoard) {
    while (y > 0 && charBoard[x][y] == '.') {
      y--;
    }
    return ((y < 0) ? '*' : charBoard[x][y]);
  }
  public static char findUpper(int m, int n, int x, int y, char[][] charBoard) {
    while (x > 0 && charBoard[x][y] == '.') {
      x--;
    }
    return ((x < 0) ? '*' : charBoard[x][y]);
  }
  public static char findLower(int m, int n, int x, int y, char[][] charBoard) {
    while (x < m && charBoard[x][y] == '.') {
      x++;
    }
    return ((x >= m) ? '*' : charBoard[x][y]);
  }
  public static char findMin(char a, char b) {
    if (a <= b)
      return a;
    else
      return b;
  }
}

class userUtil {
  public static String getString(ArrayList<Character> list) {
    StringBuilder builder = new StringBuilder(list.size());
    for (char ch : list) {
      builder.append(ch);
    }
    return builder.toString();
  }
  public static void initializeCharBoard(int m, int n, char[][] charBoard,
                                         String[] board) {
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        charBoard[i][j] = board[i].charAt(j);
      }
    }
  }
  public static int checkTiles(int m, int n, char[][] charBoard) {
    HashSet<Character> tempSet = new HashSet<Character>();
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        if (charBoard[i][j] != '.' && charBoard[i][j] != '*')
          tempSet.add(charBoard[i][j]);
      }
    }
    return tempSet.size();
  }
}
```
