function getMissingNo(a, n) {
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= a[i];
    return total;
}
let arr = [1, 5, 3, 6, 2];  //Can take n numbers.
let n = arr.length;
let miss = getMissingNo(arr, n);
console.log(miss);