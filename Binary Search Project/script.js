document.getElementById("searchBtn").addEventListener("click", function() {
    const numbersInput = document.getElementById("numbers").value;
    const targetInput = parseInt(document.getElementById("target").value);
    const numbers = numbersInput.split(" ").map(num => parseInt(num));
    
    const index = binarySearch(numbers, targetInput);
    
    const result = document.getElementById("result");
    if (index !== -1) {
      result.textContent = `Found ${targetInput} at index ${index}.`;
    } else {
      result.textContent = `${targetInput} not found.`;
    }
  });
  
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  