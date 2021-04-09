export const mergeSort = (array, typeParam) => {
  const merge = (left, right) => {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;

    if (typeParam === 'yearsOld') {
      while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft].yearsOld < right[indexRight].yearsOld) {
          result.push(left[indexLeft++]);
        } else {
          result.push(right[indexRight++]);
        }
      }
    } else if (typeParam === 'value') {
      while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft].value < right[indexRight].value) {
          result.push(left[indexLeft++]);
        } else {
          result.push(right[indexRight++]);
        }
      }
    } else if (typeParam === 'space') {
      while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft].space < right[indexRight].space) {
          result.push(left[indexLeft++]);
        } else {
          result.push(right[indexRight++]);
        }
      }
    } else if (typeParam === 'popularity') {
      while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft].popularity < right[indexRight].popularity) {
          result.push(left[indexLeft++]);
        } else {
          result.push(right[indexRight++]);
        }
      }
    }

    while (indexLeft < left.length) {
      result.push(left[indexLeft++]);
    }

    while (indexRight < right.length) {
      result.push(right[indexRight++]);
    }

    return result;
  };

  const mergeSortRec = (array) => {
    var length = array.length;

    if (length === 1) {
      return array;
    }

    var mid = Math.floor(length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  return mergeSortRec(array);
};
