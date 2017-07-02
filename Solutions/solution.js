// [ ] Fill an array with a value, or zero if none provided.  Return original array.
//
// (function() {
//   var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   function fillArray(array, value) {
//     // fill it
//      if(!value){
//         for (var i = 0; i < array.length; i++) {
//            array[i] = 0;
//         }
//         return data;
//      } else {
//         for (var i = 0; i < array.length; i++) {
//            array[i] = value;
//         }
//         return data;
//
//      }
//   }
// // console.log(fillArray(data, 5));
//   console.log("fillArray...");
//   console.log("  fillArray(data) should return all zeroes: " + (fillArray(data).equals([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])));
//   console.log("  fillArray(data, 5) should return all 5's: " + (fillArray(data, 5).equals([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])));
// })();



// [ ] Return the value of the sum of all values in any array
//
// (function() {
//   var data = [1, 2, 3, 4, 5, 6, 7, 8];
//
//   function sum(a) {
//     // Return sum
//     console.log("inside");
//     let sum = 0;
//     for (var i = 0; i < a.length; i++) {
//        sum += a[i];
//     }
//     return sum;
//   }
// console.log(sum(data));
  // console.log("sum...");
  // console.log("  sum(data) should be 36: " + (sum(data) === 36));
// })();



// [ ] Return the average value of any array
//
// var average;
// (function() {
//   var data = [23, 17, 23, 42, 8, 2, 73, 101, 83, 92];
//
//   function sum(a) {
//     // Return sum
//     let sum = 0;
//     for (var i = 0; i < a.length; i++) {
//        sum += a[i];
//     }
//     return sum;
//   }
//
//   average = function(a) {
//     // return average
//     avg = sum(a) / a.length;
//     return avg;
//
//   };
//   // console.log(average(data));
//   console.log("average...");
//   console.log("  average(data) should be 46.4: " + (average(data) === 46.4));
// })();



//  [ ] Return the median of any array that has both an odd and even number of values
//
// **************************************
// **************************************
// **************************************
// I think your data3 solution is incorrect. my answer is 10.045...(9.99+10.1)/2 --because for median, the array needs to be in order, no?
// **************************************
// **************************************
// **************************************

(function() {
   var data1 = [1, 2, 4, 4, 6, 7, 8, 9, 12];
   var data2 = [4, 5, 9, 10, 11, 15, 22, 20, 21, 21];
   var data3 = [10.1, 9.99, 12.32, 17.86, 9.1, 0];

   function median(a) {
      // return median
      var low = a[0];
      var high = a[0];
      var even = false;
      var odd = false;

      for (var i = 0; i < a.length; i++) {
         //determin if odd and even are present
         if( (Math.trunc(a[i])) % 2 == 1){
            odd = true;
         } else if( (Math.trunc(a[i])) % 2 == 0){
            even = true;
         };
         //sort array
         for (var j = 0; j < (a.length - i - 1); j++) {
            if (a[j] > a[j+1]) {
               var temp = a[j];
               a[j] = a[j+1];
               a[j+1] = temp;
            };
         };
      };
      if(even && odd){
         var m;
         if(a.length % 2 == 1){
            m = a[(a.length - 1)/2]
         } else {
            m = (a[((a.length/2)-1)] + a[(a.length/2)])/2;
         }
         return m
      } else {
         return "Even and odd not present";
      };
   };
   // console.log(median(data1));
   // console.log(median(data2));
   // console.log(median(data3));
  console.log("median...");
  console.log("  median(data1) should be 6: " + (median(data1) === 6));
  console.log("  median(data2) should be 13: " + (median(data2) === 13));
  console.log("  median(data3) should be 15.09: " + (median(data3) === 15.09));
})();



// Return the index the value specified, or null if not found
//
// (function() {
//   var data = ["zero", "one", "two", "three", "four", "five"];
//
//   function findIndex(a, value) {
//     // return index or null
//   }
//
//   console.log("findIndex...");
//   console.log("  findIndex(data, 'three') should be 3: " + (findIndex(data, "three") === 3));
//   console.log("  findIndex(data, 'nine') should be null: " + (findIndex(data, "nine") === null));
// })();



// [ ] Return index of nth last odd in any array, 1 being the fist, etc., null = not found
// [ ] Use only a single iteration
//
// (function() {
//   var data = [4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2];
//
//   function findNthLastOdd(a, n) {
//     // return nth last add
//   }
//
//   console.log("findNthLastOdd...");
//   console.log("  findNthLastOdd(data, 1) should be 11: " + (findNthLastOdd(data, 1) === 11));
//   console.log("  findNthLastOdd(data, 2) should be 9: " + (findNthLastOdd(data, 2) === 9));
//   console.log("  findNthLastOdd(data, 4) should be 1: " + (findNthLastOdd(data, 4) === 1));
//   console.log("  findNthLastOdd(data, 18) should be null: " + (findNthLastOdd(data, 18) === null));
// })();



// [ ] Select a range of values in any array, return the average of the values of the range
//
// (function() {
//   var data = [0, 1, 2, 3, 4, 5, 10, 15, 23, 54, 22, 1, 8, 4, 2, 2, 2, 0, 1];
//
//   function getAverageOfRange(a, start, end) {
//     // return average of values selected from a subarray
//   }
//
//   console.log("getAverageOfRange...");
//   console.log("  getAverageOfRange(data, 5, 9) should be 21.4: " + (getAverageOfRange(data, 5, 9) === 21.4));
// })();



// [ ] Copy contents of one array to another.  Do not use any built-in functions.
//
// (function() {
//   var data1 = [0, 10, 20, 30, 35, 55, 75, 100];
//   var data2 = [];
//
//   function copyArray(source, target) {
//     // Copy
//   }
//
//   console.log("copyArray...");
//   console.log("  copyArray(data1, data2) should return [0, 10, 20, 30, 35, 55, 75, 100]: " + (copyArray(data1, data2).equals(data1)));
//   console.log("  b7 should not be empty: " + (data2.length > 0));
//   console.log("  b7 should be same as a7: " + (data2.equals(data1)));
// })();



// [ ] Swap two elements in an array.  Do not use any built-in functions.
//
// (function() {
//   var data = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
//
//   function swap(a, indexSource, indexTarget) {
//     // Swap
//   }
//
//   console.log("swap...");
//   console.log("  swap(data, 1, 11) should have swapped: " + (swap(data, 1, 11).equals([1, 31, 3, 5, 7, 11, 13, 17, 19, 23, 29, 2, 37])));
// })();
