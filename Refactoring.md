# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

When refactoring the deterministicPartitionKey function, my goal was to improve the readability and understandability of the code without changing its functionality. To ensure that my refactor did not break the existing functionality. First, I wanted to address the unnecessary nested conditionals and repetitive code. I accomplished this by using variable assignment and ternary operators, which make the code more concise and easier to understand. I also extracted the creation of the SHA3-512 hash into its own variable to improve readability. I also noticed that the current function is not handling the case when the input event is undefined, so i added a check to handle this case and return a trivial partition key. Additionally, I refactored the function to use the latest JavaScript language features such as destructuring, which allows me to extract the partitionKey property of the event object directly. Overall, my refactor improves the readability of the code by reducing the number of nested conditionals, simplifying the logic and using modern JavaScript features, making it easier to understand and reason about.
