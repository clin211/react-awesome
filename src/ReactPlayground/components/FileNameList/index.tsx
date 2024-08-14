import { useContext, useEffect, useState } from "react"
import { PlaygroundContext } from "../../PlaygroundContext"

import { FileNameItem } from "../FileNameItem"
import styles from './index.module.scss'
import { APP_COMPONENT_FILE_NAME, ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME } from '../../files'

const readonlyFileName = [ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME, APP_COMPONENT_FILE_NAME];
export default function FileNameList() {
    const {
        files,
        removeFile,
        addFile,
        updateFileName,
        selectedFileName,
        setSelectedFileName
    } = useContext(PlaygroundContext)

    const [tabs, setTabs] = useState([''])
    const [creating, setCreating] = useState(false);

    const handleEditComplete = (name: string, prevName: string) => {
        updateFileName(prevName, name)
        setSelectedFileName(name)
        setCreating(false)
    }

    const addTab = () => {
        const newFileName = 'Comp' + Math.random().toString().slice(2, 8) + '.tsx';
        addFile(newFileName);
        setSelectedFileName(newFileName);
        setCreating(true)
    }

    const handleRemove = (name: string) => {
        removeFile(name)
        setSelectedFileName(ENTRY_FILE_NAME)
    }
    useEffect(() => {
        setTabs(Object.keys(files))
    }, [files])

    return <div className={styles.tabs}>
        {
            tabs.map((item, index, arr) => (
                <FileNameItem
                    key={item + index}
                    value={item}
                    actived={selectedFileName === item}
                    readonly={readonlyFileName.includes(item)}
                    onRemove={() => handleRemove(item)}
                    creating={creating && index === arr.length - 1}
                    onClick={() => setSelectedFileName(item)} onEditComplete={(name) => handleEditComplete(name, item)}>
                </FileNameItem>
            ))
        }
        <div className={styles.add} onClick={addTab}>
            +
        </div>
    </div>
}
