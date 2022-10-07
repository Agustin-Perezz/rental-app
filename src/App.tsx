import { FormProvider } from './context';
import { AppRoutes } from './router';

function App() {
    return (
        <FormProvider>
            <AppRoutes />
        </FormProvider>
    );
}

export default App;
