{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  function removeDuplicates(nums: number[]): number[] {
    return Array.from(new Set(nums))
  }

  // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


  //
}