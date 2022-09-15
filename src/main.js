import Stack from './structure/stack';
import Queue from './structure/queue';

let stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.toString());
console.log(stack.isEmpty());
console.log(stack.size());


let queue=new Queue();
queue.enqueue(1);
console.log(queue.dequeue());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size());