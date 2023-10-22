---
title: Contains Duplicate
description: My attempt at a Leetcode problem, "Contains Duplicate".
date: '2023-10-22'
categories:
    - Leetcode
published: true
---

```c++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> found;

        for (auto num : nums) {
            auto result{ found.insert(num) };

            if(!result.second)
                return true;
        }

        return false;
    }
};
```