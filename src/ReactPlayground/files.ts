import { Files } from './PlaygroundContext'
import importMap from './template/import-map.json?raw'
import AppCss from './template/App.css?raw'
import App from './template/App.tsx?raw'
import main from './template/main.tsx?raw'
import { fileName2Language } from './utils'

// app 文件名
export const APP_COMPONENT_FILE_NAME = 'App.tsx'
// esm 模块映射文件名
export const IMPORT_MAP_FILE_NAME = 'import-map.json'
// app 入口文件名
export const ENTRY_FILE_NAME = 'main.tsx'

export const initFiles: Files = {
    [ENTRY_FILE_NAME]: {
        name: ENTRY_FILE_NAME,
        language: fileName2Language(ENTRY_FILE_NAME),
        value: main,
    },
    [APP_COMPONENT_FILE_NAME]: {
        name: APP_COMPONENT_FILE_NAME,
        language: fileName2Language(APP_COMPONENT_FILE_NAME),
        value: App,
    },
    'App.css': {
        name: 'App.css',
        language: 'css',
        value: AppCss,
    },
    [IMPORT_MAP_FILE_NAME]: {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
    'App6.css': {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
    'App7.css': {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
    'App8.css': {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
    'App9.css': {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
    'App10.css': {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
    'App11.css': {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
    'App12.css': {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
    'App13.css': {
        name: IMPORT_MAP_FILE_NAME,
        language: fileName2Language(IMPORT_MAP_FILE_NAME),
        value: importMap,
    },
}
