/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  
    if (!root) return 0;
    if(!root.left && !root.right) return 1;
    
    let cur = root; 
    const queue = [root, null];
    let depth = 1; 
    
    while ((cur - queue.shift()) !== undefined){
        if(cur === null){
            if(queue.length === 0) return depth;
            depth++;
            queue.push(null);
            continue;
        }
        const l = cur.left;
        const r = cur.right;
        if(l) queue.push(l);
        if(r) queue.push(r);
    }
    return depth;
    
};


maxDepth([3,9,20,null,null,15,7])