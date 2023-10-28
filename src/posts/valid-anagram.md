---
title: Valid Anagram
description: My attempt at a Leetcode problem, "Valid Anagram".
date: '2023-10-27'
categories:
    - Leetcode
published: true
---

```c++
class Solution {
public:
    bool isAnagram(string s, string t) {
        auto n{ s.length() };

        if (n != t.length()) return false;

        array<int, 26> arr{ 0 };
        for (auto i{ 0 }; i < n; ++i) {
            arr[s[i] - 'a']++;
            arr[t[i] - 'a']--;
        }

        if (auto it = find_if_not(begin(arr), end(arr), [](int i) { return i == 0; }); it != end(arr))
            return false;

        return true;
    }
};
```