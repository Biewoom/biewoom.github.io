---
  layout: post
  title: "카카오 테스트:가사 검색"
  categories:
    - coding test
    - kakao 2020 blind
  image:
    path: /assets/images/PS/2020-kakao-blind/blind.png
    thumbnail: /assets/images/PS/2020-kakao-blind/lyrics.jpg
  comments: true
  excerpt: 2020 카카오-채용 100% 친절 풀이
  actions:
    - label: "문제 풀러가기"
      icon: arrow-right
      url: https://programmers.co.kr/learn/courses/30/lessons/60060
---
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges<br/>

# 핵심 개념:
1. [Trie]({% link _posts/datastructure/non-linear/2020-04-14-Trie.md %})
2. prefix and suffix
3. string 길이

# 팁:

 1) 문제의 조건을 보시면, query안에,  '?'가 있을 수 있는 경우는:  prefix 또는 suffix 또는 '?????' 이렇게 세 가지 경우가 있습니다.  그래서 트리 하나로 해결하시는 것보다, 이 경우들을 다 고려하시면서 한 개이상의 Trie를 만드시는 게 좋습니다.

2) 이 문제에서는 substring을 구하는 문제가 아니고 match하는 string을 구하는 것이기 때문에 아예 처음부터, string의 길이를 이용하시는 것도 좋습니다.

3) 다른 응용으로는, 단순한 Trie가 아니라, Trie 내부에, subtree의 노드 수를 계속 추적할 수 있는 값을 추가하시면 훨씬 효율적입니다.

**More Tip:**<br/>
문제에서 중복이 있을 수 있다라는 이야기가 나와서 중복을 없애고 시작하면, 좀 더 효율적이지 않나? 라고
생각이 들 수도 있습니다. 하지만 사실 이건 크게 의미가 없습니다.<br/>

우리는 이전에 같은 string이 있었는지 체크하기 위해 hash function을 적용 하는 과정에서 string 전체를 적어도 한 번을 다 돌아야 합니다.
그러므로, O(len(string))으로 Trie에서의 탐색하는 것과 같은 time complexity를 가집니다.<br/>

# Code
풀이는 위의 설명을 참조해서 코드를 직접 보시면서 이해하면 좋겠습니다.<br/>
```python
import os
import sys


from collections import defaultdict

class Trie:

    def __init__(self):
        self.root = {} # chr|visited

    def insert(self, s):
        cur = self.root
        while s:
            if s[0] not in cur: cur[s[0]] = [ {} , 0 ]
            cur[s[0]][1] += 1
            cur = cur[s[0]][0]
            s = s[1:]

    def find(self, s)->int:
        cur = self.root; pre_v = 0
        while s:
            if s[0] == '?': return pre_v
            else:
                if s[0] not in cur: return 0
                pre_v = cur[s[0]][1]; cur = cur[s[0]][0]
            s = s[1:]

        return pre_v

def solution(words, queries):
    prefix_dict = defaultdict(Trie)
    suffix_dict = defaultdict(Trie)
    len_dict = defaultdict(int)
    result = []

    for word in words:
        prefix_dict[len(word)].insert(word)
        suffix_dict[len(word)].insert(word[::-1])
        len_dict[len(word)] += 1

    for q in queries:
        if q[0] == '?' and q[-1] == '?':
            result.append(len_dict[len(q)])
        elif q[-1] == '?': #preffix_query
            result.append( prefix_dict[len(q)].find(q))
        elif q[0] == '?': #suffix_query
            result.append( suffix_dict[len(q)].find(q[::-1]) )
        else:
            print("IMPOSSIBLE", q)

    return result
```
