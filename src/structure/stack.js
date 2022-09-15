/* 
    push（element）：添加一个新元素到栈顶位置
    pop（）：移除栈顶的元素，同时返回被移除的元素
    peek（）：返回栈顶的元素，不对栈做任何修改
    isEmpty（）：如果栈里没有任何元素就返回true，否则返回false
    size（）：返回栈里的元素个数。这个方法和数组的length属性类似
    toString（）：将栈结构的内容以字符串的形式返回
*/

export default function Stack(){
    // 栈中的属性
    this.item=[];
    
    // 1.push():将元素压入栈
    Stack.prototype.push=(element)=>{
        this.item.push(element);
    }

    // 2.pop():从栈中取出元素
    Stack.prototype.pop=()=>{
        return this.item.pop();
    }

    // 3.peek():查看一下栈顶元素
    Stack.prototype.peek=()=>{
        return this.item[this.item.length-1];
    }

    // 4.isEmpty():判断栈是否为空
    Stack.prototype.isEmpty=()=>{
        return this.item.length===0;
    }

    // 5.size():获取栈中元素的个数
    Stack.prototype.size=()=>{
        return this.item.length;
    }

    // 6.toString():以字符串形式输出栈内数据
    Stack.prototype.toString=()=>{
        return this.item.reduce((prev,cur)=>{
            return prev+' '+cur;
        });
    }
}