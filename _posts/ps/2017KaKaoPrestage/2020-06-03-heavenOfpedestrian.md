---
layout: post
title: "카카오 페스티벌: 보행자 천국"
categories:
  - coding test
  - kakao 2017
image:
  path: assets/images/PS/2017-kakao-festival/back.png
  thumbnail: /assets/images/PS/2017-kakao-festival/heavenOfpedestrian.png
comments: true
excerpt: 2017-카카오 페스티벌-100% 풀이
actions:
  - label: "문제 풀러가기"
    icon: arrow-right
    url: https://programmers.co.kr/learn/courses/30/lessons/1832
---

# 핵심개념
1.기본적인 modular arithmetic<br/>
2.DP(dynamic programming)<br/>

# 팁

# 그림 설명

### 시간 효율성
**O(m * n * 2)**

# Code:
```java
import java.util.*;

class Solution {
  static final int MOD = 20170805;
  public static int solution(int m, int n, int[][] cityMap) {
    int[][][] dp = new int[2][m + 1][n + 1];
    dp[0][0][0] = 1;

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        if (cityMap[i][j] == 0) {
          dp[0][i + 1][j] = (dp[0][i + 1][j] + dp[0][i][j] + dp[1][i][j]) % MOD;
          dp[1][i][j + 1] = (dp[1][i][j + 1] + dp[0][i][j] + dp[1][i][j]) % MOD;
        } else if (cityMap[i][j] == 2) {
          dp[0][i + 1][j] = (dp[0][i + 1][j] + dp[0][i][j]) % MOD;
          dp[1][i][j + 1] = (dp[1][i][j + 1] + dp[1][i][j]) % MOD;
        } else {
          ;
        }
      }
    }

    return (dp[0][m - 1][n - 1] + dp[1][m - 1][n - 1]) % MOD;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int m = Integer.parseInt(sc.nextLine());
    int n = Integer.parseInt(sc.nextLine());

    int[][] cityMap = new int[m][n];
    String line = sc.nextLine();
    String[] lines = line.substring(1, line.length() - 1).split("\\],\\[");

    for (int i = 0; i < m; i++) {
      String[] newLine = lines[i].split(", ");
      for (int j = 0; j < n; j++) {
        cityMap[i][j] = Integer.parseInt(newLine[j]);
      }
    }
    System.out.println(solution(m, n, cityMap));
  }
}
```
