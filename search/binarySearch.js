function binarySearch(arr, t){
    let leftIndex =  0;
    let rigthIndex = arr.length - 1;
    while(leftIndex <= rigthIndex){
        let middleIndex = Math.floor((leftIndex + rigthIndex) / 2)
        if(t == arr[middleIndex]){
            return middleIndex
        } 
        if(t < arr[middleIndex]){
            rigthIndex = middleIndex - 1
        } else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1