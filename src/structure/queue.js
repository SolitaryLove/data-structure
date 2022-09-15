/* 
    enqueue（element）：向队列尾部添加一个（或多个）新的项
    dequeue（）：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
    front（）：返回队列中的第一个元素，即最先被添加，也将是最先被移除的元素。队列不做任何变动
    isEmpty（）：如果队列中不包含任何元素，返回true，否则返回false
    size（）：返回队列包含的元素个数，与数组的length属性类似
    toString（）：将队列中的内容，转成字符串形式
*/

export default function Queue(){
    this.item=[];

    // 1.enqueue():将元素加入到队列中
    Queue.prototype.enqueue=(element)=>{
        this.item.push(element);
    }

    // 2.dequeue():从队列中删除前端元素
    Queue.prototype.dequeue=()=>{
        return this.item.shift();
    }

     // 3.front():查看前端的元素
    Queue.prototype.front=()=>{
        return this.item[0];
    }

     // 4.isEmpty:查看队列是否为空
    Queue.prototype.isEmpty=()=>{
        return this.item.length===0;
    }

    // 5.size():查看队列中元素的个数
    Queue.prototype.size=()=>{
        return this.item.length;
    }

    // 6.toString():将队列中元素以字符串形式输出
    Queue.prototype.toString=()=>{
        return this.item.reduce((prev,cur)=>{
            return prev+' '+cur;
        });
    }
}