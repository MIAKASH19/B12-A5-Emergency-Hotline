1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById select the dom element by their id. We know that ids are unique in HTML thats why it return single element if not found return null .

getElementsByClassName select the dom element by their class as array like structure. We can loop through it and get all the match elements.

querySelector can select dom element by any css selectors like ( id, class, tagName, attirbutes or etc). And Return only the matching first element.

querySelectorAll can select multiple matching element with any css Elements . It return an nodelist an array like sturcture.

2. How do you create and insert a new element into the DOM?
Answer: 
First create a dom element like div Tag
let div = document.createElement("div")

then append this into the body tag
document.queryselector(body).appendChild(div)

3. What is Event Bubbling and how does it work?
Answer:
When an Event occurs to a child element that event bubbles up to its parent then to grand parent and so on .until it reaches the document root.

if a event happens to a child element then if there is no event listener then it goes up to its parent to find the event listener if its not found even there then it rises up and go on untill found the event listener to document root.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: 
Event Delegation is a technique to avoid add multiple event listeners to optimize memory usage. instead of adding multiple listeners to child we can add one listeners to its parent . And use the bubbling method we can capture the event and handle the event properly.

There are some significant useful cause of using Event Delegation:
 1. Performance Enhancing - multiple listeners can slow our website functionality.
 2. Cleaner and Readable code - Single listeners can easily understand and easy to write
 3. Dynamically handle events - we can use dynamic value to use the property of dom element.
 4. Reduce the memory usage - less code less memory usage.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
preventDefault() is a method to stop the default behaviour or action an element. like form to submit, link to navigate. it does not stop the event bubbling or capturing .

stopPropagation() is a method to stop the event bubbling or capturing. when a event happens in a child element event rises up to its parent by default. And there is a capturing method also. stopPropagation() stop these behaviour to moving event to the dom element. it does not change any elements default behaviour or action.