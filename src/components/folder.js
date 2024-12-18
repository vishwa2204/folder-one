import React, { useState } from 'react';
import '../components/folder.css';
import { CgFileAdd, CgFolderAdd, CgTrash, CgEditBlackPoint } from 'react-icons/cg';

function Folder({ handleInsertNode, handleDeleteNode, handleEditNode, folderData }) {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({ visible: true, isFolder });
    };

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(folderData.id, e.target.value, showInput.isFolder);
            setShowInput({ ...showInput, visible: false });
        }
    };

    const onEditFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleEditNode(folderData.id, e.target.value);
            setIsEditing(false);
        }
    };

    if (folderData.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className='folder' onClick={() => setExpand(!expand)}>
                    <span>
                        📁 {isEditing ? (
                            <input
                                type='text'
                                autoFocus
                                onKeyDown={onEditFolder}
                                onBlur={() => setIsEditing(false)}
                                defaultValue={folderData.name}
                            />
                        ) : (
                            folderData.name
                        )}
                    </span>

                    <div className='add'>
                        <button onClick={(e) => handleNewFolder(e, false)}><CgFileAdd /></button>
                        <button onClick={(e) => handleNewFolder(e, true)}><CgFolderAdd /></button>
                        <button onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}><CgEditBlackPoint /></button>
                        <button onClick={(e) => { e.stopPropagation(); handleDeleteNode(folderData.id); }}><CgTrash /></button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}>
                    {showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input
                                type='text'
                                autoFocus
                                onKeyDown={onAddFolder}
                                onBlur={() => setShowInput({ ...showInput, visible: false })}
                                className='inputContainer__input'
                            />
                        </div>
                    )}

                    {folderData.item.map((exp, id) => {
                        if (typeof exp === "string") {
                            return <div key={id} className='file'>📄 {exp}</div>;
                        }
                        return (
                            <Folder
                                key={exp.id}
                                folderData={exp}
                                handleInsertNode={handleInsertNode}
                                handleDeleteNode={handleDeleteNode}
                                handleEditNode={handleEditNode}
                            />
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <span className='file'>
                📄 {isEditing ? (
                    <input
                        type='text'
                        autoFocus
                        onKeyDown={onEditFolder}
                        onBlur={() => setIsEditing(false)}
                        defaultValue={folderData.name}
                    />
                ) : (
                    folderData.name
                )}
            </span>
        );
    }
}

export default Folder;
