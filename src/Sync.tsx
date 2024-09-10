import { useEffect } from 'react';
import useUserStore from './store/useUserStore';

function Sync() {
    console.log('re-render');
    const user = useUserStore(state => state.user);
    const fetchUser = useUserStore(state => state.fetchUser);

    useEffect(() => {
        fetchUser('1');
    }, [fetchUser]);

    return (
        <div>
            {JSON.stringify(user, null, 4)}
        </div>
    );
}

export default Sync;
