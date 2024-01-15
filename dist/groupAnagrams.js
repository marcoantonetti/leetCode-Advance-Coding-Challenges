"use strict";
// Solution without sorting the words
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
function groupAnagrams(arr) {
    let output = [];
    arr.forEach((str) => {
        let word = Array.from(str);
        let anagrams = [];
        if (!str)
            return;
        for (let i = 0; i < arr.length; i++) {
            // Anagrams must be of same length
            if (word.length != arr[i].length)
                continue;
            // If every letter is on the word 
            const isTrue = word.every((letter) => {
                return arr[i].includes(letter);
            });
            // Push to anagrams
            if (isTrue) {
                anagrams.push(arr[i]);
                // once the anagrams are pushed, I want them removed from the original array (maintaining its length)
                arr[i] = '';
            }
        }
        output.push(anagrams);
    });
    return output;
}
// Solution with sorting the words
const groupAnagrams2 = (strs) => {
    let obj = {};
    for (let str of strs) {
        // I sort the letters so eat/ate/tea = aet
        let letters = str.split("").sort().join("");
        // If aet is already in obj then push the word , if not create the property
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
};
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)
console.log('as', groupAnagrams2(strs));
//# sourceMappingURL=groupAnagrams.js.map