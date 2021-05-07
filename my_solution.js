class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function searchBT(root, target) { 
    if(!root) return false
    
    if(root.value === target) return true
    
    return searchBT(root.left, target) || searchBT(root.right, target)    
}

// Test Cases
var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(searchBT(null, 1)) // false
console.log(searchBT(tree1, 9)) // true
console.log(searchBT(tree1, 1)) // false
console.log(searchBT(tree1, 2)) // true
console.log(searchBT(new TreeNode(1), 2)) // false
