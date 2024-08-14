import Editor from "../Editor";
import FileNameList from "../FileNameList";

export default function CodeEditor() {
    const file = {
        name: 'index.tsx',
        value: 'import lodash from "lodash";\n\nconst a = <div>index</div>',
        language: 'typescript',
    }
    function onEditorChange() {
        // eslint-disable-next-line prefer-rest-params
        console.log(...arguments);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <FileNameList />
            <Editor file={file} onChange={onEditorChange} />
        </div>
    )
}
