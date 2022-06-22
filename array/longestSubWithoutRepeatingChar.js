// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // input string
    // output  num
    let map = {}; 
    let maxLength = 0;
    let start = 0;
    for( var i = 0; i < s.length; i++){ // iterate through input array
        var lastChar = s[i];  // 
        if(map[lastChar] == undefined) { // check if input array element exist in new array
            map[lastChar] = 0;
        }
        map[lastChar] += 1; // next element
        while (map[lastChar] > 1) { // 
            var firstChar = s[start]; //
            map[firstChar] -= 1;
            start += 1;
        }
        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength;
};