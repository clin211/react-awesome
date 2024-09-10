
import { create } from 'zustand';

interface User {
    userId: number
    id: number
    title: string
    completed: boolean
}

type State = {
    user: User | null
    loading: boolean
    error: string | null
}

type Actions = {
    fetchUser: (id: string) => void
}

const useUserStore = create<State & Actions>((set) => ({
    user: null,
    loading: false,
    error: null,
    fetchUser: async (id) => {
        set({ loading: true });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            if (!response.ok || response.status !== 200) return;
            const data = await response.json();
            console.log('🚀 ~ fetchUser: ~ data:', data)
            set({ user: data, loading: false });
        } catch (error) {
            set({ error: error.message || '', loading: false });
        }
    },
}));

export default useUserStore;