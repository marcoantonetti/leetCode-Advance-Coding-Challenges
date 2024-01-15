
/**
 * @param {number[]} height
 * @return {number}
 */

// Solution
const getMaxStorage = (heights: number[]): number => {
    // Global variable
    let maxStorage : number = 0;
  
    // First loop is to get the endpoint1 at the beginning of the Array
    for (let i = 0; i < heights.length; i++) {
      let endPoint1 : number = heights[i];
  
      // Second loop is to get the endpoint2 at the end of the Array
      for (let k = heights.length - 1; k >= 0; k--) {
        let endPoint2 : number = heights[k];
  
        // Distance is the length between both endpoints
        let distance : number = k - i;
  
        // Storage area is length (distance) * height (endpoint) --> but it needs to be the lesser height / endpoint. Since water would spill out if I do it with the bigger endpoint
        let storage : number = endPoint1 < endPoint2 ? distance * endPoint1 : distance * endPoint2;
  
        // If the storage of this iteration is bigger than maxStorage global variable, then update it
        if (storage > maxStorage) maxStorage = storage;
      }
    }
  
    console.log(maxStorage);
    return maxStorage;
  };
  
  const heightsArr: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  
  getMaxStorage(heightsArr);
  