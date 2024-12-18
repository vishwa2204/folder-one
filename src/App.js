import { useState } from 'react';
import './App.css';
import folderData from './data/folderData';
import Folder from './components/folder';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
    const [explorerData, setExplorerData] = useState(folderData);

    const { insertNode, deleteNode, editNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    };

    const handleDeleteNode = (folderId) => {
        const finalTree = deleteNode(explorerData, folderId);
        setExplorerData(finalTree);
    };

    const handleEditNode = (folderId, newName) => {
        const finalTree = editNode(explorerData, folderId, newName);
        setExplorerData(finalTree);
    };

    return (
        <div className="App">
            <Folder
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                handleEditNode={handleEditNode}
                folderData={explorerData}
            />
        </div>
    );
}

export default App;