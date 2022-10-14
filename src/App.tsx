import React from 'react';
import { FormProvider } from './context';
import { AppRoutes } from './router';
import { useAppDispatch } from './store/hooks';
import { getCars } from './store/slices/Cars';
import { getUsers } from './store/slices/Users';

function App() {
    const disptach = useAppDispatch();
    React.useEffect(() => {
        disptach(getUsers());
        disptach(getCars());
    }, []);

    return (
        <FormProvider>
            <AppRoutes />
        </FormProvider>
    );
}

export default App;
