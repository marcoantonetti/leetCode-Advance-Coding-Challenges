/*Given an array, return a compact array. A compact array is the same as the original array,
 except with keys containing falsy values removed. This operation applies to the array and any nested array. 
 */

const obj = [null, 0, false, 1]
const obj1 = {"a": null, "b": [false, 1]}
const obj2 = [null, 0, 5, [0], [false, 16]]

function removeFalsy (obj : [] | object)  {

    let output : any[] = [];

    if(Array.isArray(obj)){

        obj.forEach((value)=>{

            if(Array.isArray(value)) {                

                output.push(value.filter((item) => Boolean(item)))

            } else if(Boolean(value)) output.push(value)
        })
        
    }       
     
     return output
}


console.log(removeFalsy(obj1));
