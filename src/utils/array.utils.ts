function getAdjacentElements(array: any[], index: number) {
  const length = array.length;
  if (length === 0) {
      return {
        prev: undefined,
        next: undefined
      };
  }
  
  let prevIndex = index - 1;
  let nextIndex = index + 1;
  
  if (index === 0) {
      prevIndex = length - 1; // second to last element
  } else if (index === length - 1) {
      nextIndex = 0; // second element
  }
  
  return {
    prev: array[prevIndex],
    next: array[nextIndex]
  };
}

export { getAdjacentElements };