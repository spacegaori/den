---
title: Two Sum
description: My attempt at a Leetcode problem, "Two Sum".
date: '2023-10-22'
categories:
    - Leetcode
published: true
---

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        int n{ static_cast<int>(nums.size()) };
    
        for (int i{ 0 }; i < n; ++i) {
            if (map.contains(nums[i]))
                return vector<int>{ i, map[nums[i]] };
                
            map.insert({target - nums[i], i});
        }

        return {};
    }
};
```