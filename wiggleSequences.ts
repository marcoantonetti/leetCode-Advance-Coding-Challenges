/*A wiggle sequence is a sequence where the differences between successive numbers strictly
 alternate between positive and negative. The first difference (if one exists) may be either positive or negative. 
A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences. */

/*For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) 
alternate between positive and negative. */

// This functions looks for the longest wiggle sequence and returns its length



function getWiggleSequenceLength(nums: number[]): number {

    if (nums.length < 2) return nums.length;
        
    let alternator : boolean = nums[0] - nums[1] < 0 ? true : false
    let wiggleSequence : number[] = [nums.shift()!]

    nums.forEach( ( num ) => {

        let sum = - wiggleSequence[wiggleSequence.length-1] + num

    if(alternator) {

        sum > 0 ? wiggleSequence.push(num) :  wiggleSequence = [num]
        

    } else {

        sum < 0 ? wiggleSequence.push(num) :  wiggleSequence = [num]
        
    }

    alternator = !alternator
    })  

    return wiggleSequence.length

};

console.log(getWiggleSequenceLength([1, 7, 4, 9, 2, 5]))
console.log(getWiggleSequenceLength([1,17,5,10,13,15,10,5,16,8]));
console.log(getWiggleSequenceLength([1,2,3,4,5,6,7,8,9]));

