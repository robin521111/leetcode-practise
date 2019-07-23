var levelOrder = function(root){
    if(!root) return [];
    const items  = [];
    const queue = [root,null];//null simply ops
    let levelNodes = []; //first root of node
    while(queue.length > 0){
        const t = queue.shift();

        if(t){
            levelNodes.push(t.val)
            if(t.left){
                queue.push(t.left);
            }
            if(t.right){
                queue.push(t.right);
            }
            else{
                items.push(levelNodes);
                levelNodes = [];
                if(queue.length >0){
                    queue.push(null)
                }
            }
        }
    }
}