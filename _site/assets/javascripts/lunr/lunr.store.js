var store = [{
        "title": "자물쇠와 열쇠",
        "excerpt":"핵심개념 및 팁: 첫 번쨰: 효율적인 Time-complexity를 크게 고민하시지는 않아도 될 거 같습니다.원체, N과 M의 최대 범위값이 크지 않아서 여러 번의 Nested-loop하셔도 통과가 가능합니다.저 같은 경우, O( (n+m)2 * (m2 + n2 ) ) 이었는데, 통과가 되었습니다. 두 번째: 회전과 이동의 개념을 정확하게 이해하셔야 합니다.회전들은 서로 배반적으로 작용합니다. i.e 경우의 수에서 말하는 합의 법칙(or)이 성립합니다.저도 수학적인 증명까지는 못했으나, 종이에, 3*3 정도 grid를 그리셔서 회전과 이동을 해보시면 아시게 될겁니다. 세 번째: Virtual Matrix를 이용하라.문제에서 제시한 조건을 충족하면서 Lock과 keys의 값을 효율적으로 비교하기 위해 크기가(n + 2m)(n + 2*m)인 큰 Virtual Matrix를 새로 그려서 값을 비교했습니다.Space complexity가 약간 커지지만, 코드가 이해하기 쉬워집니다. 마지막: XOR을 이용해서 홈과 돌기를 서로 비교하시면 더욱 깔끔한 코드가 될거같습니다. Code: import osimport sysdef Counterclockwise(matrix):    new_matrix = [[0]*len(matrix) for i in range(len(matrix))]    for i in range(len(matrix)):        for j in range(len(matrix)):            new_matrix[len(matrix)- 1 - j][i] = matrix[i][j]    return new_matrixdef solution(keys, locks):    m = len(keys); n = len(locks); lock_x = lock_y = m-1    options = [0, 90, 180, 270]    for op in options:        if op != 0: keys = Counterclockwise(keys)        for i in range(0, m+n):            for j in range(0, m+n):                VirtualMatrix = [[None]*(n+2*m) for i in range((n+2*m))]                key_x = i; key_y = j                for x in range(0, m):                    for y in range(0, m):                        VirtualMatrix[key_x+x][key_y+y] = keys[x][y]                Unlock = True                for z in range(0, n):                    for k in range(0, n):                        if VirtualMatrix[lock_x+z][lock_y+k] is None:                            if locks[z][k] == 0: Unlock = False                            else: continue                        else:                            if VirtualMatrix[lock_x+z][lock_y+k]^locks[z][k] != 1: Unlock = False                            else: continue                if Unlock: return True    return FalseCode-review:   논리구조가 간단명료한가?          VirtualMatrix를 사용하니 논리구조 자체는 논리정연했다.        코드를 Readible 하게 적었는가?          x,y,z,k 등의 변수 이름은 친절하지 않게 적었다.        최적화는 하였는가?          전체적인 Complete-search를 해야해서 좋은 time-complexity라고 할 수는 없다.      논리구조는 명료했지만 space-complexity가 좀 더 비효율적이 되었다.      ","categories": ["coding test","kakao 2020 blind"],
        "tags": [],
        "url": "http://localhost:4000/coding%20test/kakao%202020%20blind/2020/04/13/Lock.html"
      },{
        "title": "가사 검색",
        "excerpt":"핵심 개념:   Trie  [Hash]팁: Code: 풀이는 위의 설명을 참조해서 코드를 직접 보시면서 이해하면 좋겠습니다. ","categories": ["coding test","kakao 2020 blind"],
        "tags": [],
        "url": "http://localhost:4000/coding%20test/kakao%202020%20blind/2020/04/13/search_lyrics.html"
      },{
        "title": "Trie: 검색어의 비밀!",
        "excerpt":"test ","categories": ["non-linear-ds","advanced"],
        "tags": [],
        "url": "http://localhost:4000/non-linear-ds/advanced/2020/04/14/Trie.html"
      }]
