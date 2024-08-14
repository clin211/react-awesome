import { useContext } from 'react';
import { debounce } from 'lodash-es'
import Editor from "../Editor";
import FileNameList from "../FileNameList";
import { PlaygroundContext } from '../../PlaygroundContext';

export default function CodeEditor() {
    const {
        files,
        setFiles,
        selectedFileName,
        // setSelectedFileName
    } = useContext(PlaygroundContext)

    const file = files[selectedFileName];
    function onEditorChange(value?: string) {
        files[file.name].value = value!;
        setFiles({ ...files });
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <FileNameList />
            <Editor file={file} onChange={debounce(onEditorChange, 500)} />
        </div>
    )
}
