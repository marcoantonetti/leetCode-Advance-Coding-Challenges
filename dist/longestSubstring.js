"use strict";
// Given a string s, find the length of the longest substring without repeating characters.
const longestSubstring = (string) => {
    const strArray = Array.from(string);
    let subString = '';
    let possibleSubStrings = [];
    strArray.forEach((letter) => {
        if (subString.includes(letter)) {
            possibleSubStrings.push(subString);
            subString = '';
            subString += letter;
            return;
        }
        subString += letter;
    });
    possibleSubStrings.push(subString);
    const lengthOfSubstrings = possibleSubStrings.map((subString) => subString.length);
    console.log('posibles: ', possibleSubStrings);
    return Math.max(...lengthOfSubstrings);
};
longestSubstring('auu');
longestSubstring('f');
longestSubstring('');
longestSubstring('abcabcbb');
longestSubstring("pwwkew");
//# sourceMappingURL=longestSubstring.js.map