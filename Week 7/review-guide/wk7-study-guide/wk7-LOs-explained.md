# GitHub, Big-O, and Intro to Data Structures and Algorithms (Week 7) - Learning Objectives

## Assessment Structure

    - 2 hours
    - Mixture of multiple choice (10-15) and VSCode (3-5) problems, each with multiple specs.
        - Coding problems will have specs to run (`npm test`) and check your work against
    - Standard assessment procedures
        - You will be in an individual breakout room
        - Use a single monitor and share your screen
        - Only have open those resources needed to complete the assessment:
            - Zoom
            - VSCode
            - Browser with AAO and Progress Tracker (to ask questions)
            - Approved Resources for this assessment:
            - MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Study Priorities

1. Lists, Stacks, Queues Project. Do today if you didn't finish it. Call in TAs if you want to talk about it. absolute #1 priority

2. Big O and L/S/Q Anki Cards -- Very guided

3. Sorting and BSearch -- *identify* and *analyze* their Big O

4. Memoization Problem #1: LucasNumber

> Tabulation, while extremely valuable and common and worth knowing, will not be on the assessment.

## Binary Search (W7D1) - Learning Objectives

1. Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.

- Time Complexity: O(__)
- Space Complexity: O(__)
- Code:

      ```javascript
      function binarySearch(array) {
      }
      ```

## Sorting Algorithms (W7D2) - Learning Objectives

1. Explain the complexity of and write a function that performs bubble sort on an
array of numbers.

- Time Complexity: O(__)
- Space Complexity: O(__)
- Code:

      ```javascript
      function bubbleSort(array) {

      }
      ```

2. Explain the complexity of and write a function that performs selection sort
on an array of numbers.

- Time Complexity: O(__)
- Space Complexity: O(__)
- Code:

      ```javascript
      function selectionSort(array) {
      }
      ```

3. Explain the complexity of and write a function that performs insertion sort
on an array of numbers.

- Time Complexity: O(__)
- Space Complexity: O(__)
- Code:

      ```javascript
      function insertionSort(array) {
      }
      ```

4. Explain the complexity of and write a function that performs merge sort on an
array of numbers.

- Time Complexity: O(__)
- Space Complexity: O(__)
- Code:

      ```javascript
      function mergeSort(array) {
      }
      ```

5. Explain the complexity of and write a function that performs quick sort on an array of numbers.

- Time Complexity: O(__)
- Space Complexity: O(__)
- Code:

      ```javascript
      function quickSort(array) {
        
      }
      ```

## Big-O, Memoization, and Tabulation (W7D3) - Learning Objectives

### Big-O

1. Order the common complexity classes according to their growth rate
        -
        -
        -
        -
        -
        -
        -

2. Identify the complexity classes of common sort methods
| Sort Name | Time Complexity    | Space Complexity  |
|:--------- |:------------------ |:----------------- |
| bubble    | O(__)              | O(_)              |
| selection | O(__)              | O(_)              |
| insertion | O(__)              | O(_)              |
| merge     | O(__)              | O(_)              |
| quick     | O(__)              | O(_)              |

3. Identify complexity classes of code

- Important takeaway here is being able to connect code patterns with
complexities

      ```javascript
      // O(_) ?
      function example1(n) {
        for (let i = 1; i <= 20; i++) {
          console.log(i);
        }
      }

      // O(_) ?
      function example2(n) {
        for (let i = 1; i <= n; i++) {
          for (let j = 1; j <= n; j++) {
            console.log(`${i}, ${j}`);
          }
        }
      }

      // O(_) ?
      function example3(n) {
        console.log(n);
        if (n === 1) return;
        example3(n - 1);
        example3(n - 1);
      }
      ```

      ### Memoization and Tabulation

      1. Apply memoization to recursive problems to make them less than polynomial
      time.

      ```javascript
      function fib(n) {
        if (n === 1 || n === 2) return 1;
        return fib(n - 1) + fib(n - 2);
      }

      function fibMemo() {}
      ```

2. Apply tabulation to iterative problems to make them less than polynomial time

```javascript
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibTab() {}
```

## Lists, Stacks, and Queues (W7D4) - Learning Objectives

1. Explain and implement a Linked List

  - What properties does an instance of a linked list track?
  - What methods does a linked list need to implement?
  - What are the time complexities for these methods?
  - What's the difference between a Singly Linked List and a Doubly Linked List? How would the difference impact the properties and the methods that we implement?
  - Practice creating both types. Use Thursday's project as an example/guide.

2. Explain and implement a Stack

  - Define LIFO and ADT and how it relates
  - What methods does a stack need to implement?
  - What are the time complexities for these methods?
  - Know how to implement a stack using both a node class as well as just an array instance variable. Use Thursday's project as an example/guide for your usage of a Node. How would this change if we just wanted to keep an array instance variable on our Stack instead?

3. Explain and implement a Queue

  - Define FIFO and ADT and how it relates
  - What methods does a queue need to implement?
  - What are the time complexities for these methods?
  - Know how to implement a queue using both a node class as well as just an array instance variable. Use Thursday's project as an example/guide for your usage of a Node. How would this change if we just wanted to keep an array instance variable on our Queue instead?
  
## Heaps (W7D5)

- Not on the assessment don't sweat it!
