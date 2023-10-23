---
title: Valid Anagram
description: My attempt at a Leetcode problem, "Valid Anagram".
date: '2023-10-22'
categories:
    - Leetcode
published: true
---

```c++
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;

        int n{ static_cast<int>(s.length()) };
        unordered_map<char, int> counts;

        for (int i{ 0 }; i < n; ++i) {
            counts[s[i]]++;
            counts[t[i]]--;
        }

        for (auto count : counts)
            if(count.second) return false;

        return true;
    }
};
```