# find_element_in_BST_DFS

### Problem:
Javascript:
```
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function searchBT(root, target) { 
    // Write your code here.
    return false
}

// Test Cases
var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(searchBT(null, 1)) // false
console.log(searchBT(tree1, 9)) // true
console.log(searchBT(tree1, 1)) // false
console.log(searchBT(tree1, 2)) // true
console.log(searchBT(new TreeNode(1), 2)) // false
```

Python:
```
class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def searchBT(root: TreeNode, target: int) -> bool:
    # Write your code here. 
    pass

# Test Cases
tree1 = TreeNode(3, TreeNode(29, TreeNode(2)), TreeNode(4, None, TreeNode(2, TreeNode(9))))
print(searchBT(None, 1)) # False
print(searchBT(tree1, 9)) # True
print(searchBT(tree1, 1)) # False
print(searchBT(tree1, 2)) # True
print(searchBT(TreeNode(1), 2)) # False
```
