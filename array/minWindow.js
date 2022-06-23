// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?

// 1. Use two pointers: start and end to represent a window.
// 2. Move end to find a valid window.
// 3. When a valid window is found, move start to find smaller window.
var minWindow = function (s,t) {
  
  // map to store the frequency of each window char
  const map = new Map();
  // set the count  
  for ( let i = 0; i < t.length; i++){
    if (map.has(t.charAt(i)))
    {
      map.set(t.charAt(i), map.get(t.charAt(i)) + 1)
    } else {
      map.set(t.charAt(i), 1)
    }
  }
  // declare start end count length and sum
  let start = 0,
      end = 0,
      counter = map.size,
      len = Number.MAX_VALUE, 
      sum = '';
  // check if end is smaller than the length of the string
  while(end < s.length) {
    const endChar = s. charAt(end);
    // if the map has the char, decrement the count by 1. if the count is 0, decrement the counter
    if (map.has(endChar)) {
      map.set(endChar, map.get(endChar) - 1);
      if (map.get(endChar) === 0) counter--;
    }
    // slide the last character to the right
    end++;
    // if all characters have been viewed in the substring as many times as needed, continue
    while (counter === 0) {
      // calculate new length, if smallef than previous, set new length and answer
      if ( end - start < len) {
        len = end - start;
        sum = s.substring(start, end);
      }
      // start char sliding to the right, for the first iteration will be str.charAt(0)
      let startChar = s.charAt(start);
      // if this char is part of the map, increment the count
      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1)
        // if the count of the element is greater than one, increment the count
        if (map.get(startChar) > 0) counter++;
      }
      // slide begin to the right
      start++;
    }
  }
  return sum;
};