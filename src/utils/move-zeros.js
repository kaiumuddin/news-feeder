export function zeroMover(arr) {
    let nonZeroIndex = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is non-zero
        if (
            arr[i].title !== null &&
            arr[i].urlToImage !== null &&
            arr[i].author !== null &&
            arr[i].description !== null &&
            arr[i].content !== null
        ) {
            // Swap it with the element at nonZeroIndex
            [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
            // Increment nonZeroIndex
            nonZeroIndex++;
        }
    }

    return arr;
}
