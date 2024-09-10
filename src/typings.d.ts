interface ITodo {
    id: string,
    title: string,
    completed: boolean
}

interface ITodoItemProps {
    key: string,
    todo: ITodo;
    editing?: boolean;
    onSave: (val: string) => void;
    onDestroy: () => void;
    onEdit: () => void;
    onCancel: (event: unknown) => void;
    onToggle: () => void;
}


interface ITodoFooterProps {
    completedCount: number;
    onClearCompleted: () => void;
    nowShowing: string;
    count: number;
}

