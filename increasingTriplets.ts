/* Given an integer array nums, return true if there exists a triple of indices (i, j, k) 
  such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false. */

function increasingTriplet ( arr : number[]) : boolean {

    if(arr.length < 3) return false

    let bool : boolean = false
    let triplets : number[] = []

    arr.forEach( ( number, index ) => {

        if(triplets.length == 3) {
            return true
        }

        if(index == 0) {
            triplets.push(number)
            return
        }
  
        triplets[triplets.length - 1] < number ? triplets.push(number) : reset(number)

        function reset(number:number) {
            triplets = []
            triplets.push(number)
        }


    })

    console.log('finall',triplets);

    if (triplets.length == 3) bool = true

    return bool
}

console.log(increasingTriplet([2,1,5,0,4,6]))
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([1,2,3,4,5]))