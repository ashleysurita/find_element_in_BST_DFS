class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def searchBT(root: TreeNode, target: int) -> bool:
    if not root:
        return False
    
    if root.value == target:
        return True
    return searchBT(root.left, target) or searchBT(root.right, target)

# Test Cases
tree1 = TreeNode(3, TreeNode(29, TreeNode(2)), TreeNode(4, None, TreeNode(2, TreeNode(9))))
print(searchBT(None, 1)) # False
print(searchBT(tree1, 9)) # True
print(searchBT(tree1, 1)) # False
print(searchBT(tree1, 2)) # True
print(searchBT(TreeNode(1), 2)) # False
