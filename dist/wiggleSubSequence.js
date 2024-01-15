"use strict";
/*A wiggle sequence is a sequence where the differences between successive numbers strictly
 alternate between positive and negative. The first difference (if one exists) may be either positive or negative.
A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences. */
/*For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3)
alternate between positive and negative. */
/*A subsequence is obtained by deleting some elements (possibly zero)
from the original sequence, leaving the remaining elements in their original order. */
// This functions looks for the longest wiggle SUBSEQUENCE and returns its length
function getWiggleSubsequence(nums) {
    const [first, ...newArr] = nums;
    if (newArr[0] == first)
        newArr.shift();
    let alternator = newArr[0] > first ? true : false;
    let wiggleSequence = [first];
    newArr.forEach((num) => {
        const sum = num - wiggleSequence[wiggleSequence.length - 1];
        if (sum == 0)
            return;
        if (alternator) {
            if (sum > 0) {
                wiggleSequence.push(num);
                alternator = false;
            }
        }
        if (!alternator) {
            if (sum < 0) {
                wiggleSequence.push(num);
                alternator = true;
            }
        }
    });
    console.log(wiggleSequence);
    return wiggleSequence.length;
}
console.log(getWiggleSubsequence([102, 101, 20, 91, 156, 78, 75, 142, 69, 81, 46, 142, 113, 163, 190, 178, 13, 36, 134, 54])); // Output: 6
console.log(getWiggleSubsequence([1, 1, 7, 4, 9, 2, 5])); // Output: 6
console.log(getWiggleSubsequence([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])); // Output: 7
//# sourceMappingURL=wiggleSubSequence.js.map