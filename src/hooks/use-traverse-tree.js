const useTraverseTree = () => {
    const insertNode = (tree, folderId, item, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            // Ensure tree.item is initialized if it's undefined
            tree.item = tree.item || [];
            tree.item.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                item: [] // Initialize empty array for new folder
            });
            return tree;
        }

        const updatedItems = (tree.item || []).map((child) =>
            insertNode(child, folderId, item, isFolder)
        );
        return { ...tree, item: updatedItems };
    };

    const deleteNode = (tree, folderId) => {
        if (!tree.item) return tree; // If no children, nothing to delete

        const filteredItems = tree.item.filter((child) => child.id !== folderId);
        const updatedItems = filteredItems.map((child) =>
            deleteNode(child, folderId)
        );
        return { ...tree, item: updatedItems };
    };

    const editNode = (tree, folderId, newName) => {
        if (tree.id === folderId) {
            tree.name = newName; // Update the folder name
            return tree;
        }

        const updatedItems = (tree.item || []).map((child) =>
            editNode(child, folderId, newName)
        );
        return { ...tree, item: updatedItems };
    };

    return { insertNode, deleteNode, editNode };
};

export default useTraverseTree;
