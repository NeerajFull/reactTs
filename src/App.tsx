import React, { Suspense } from 'react';

const ProfileIntegrationApp = React.lazy(() => import("./ProfileIntegrationApp"));


const App: React.FC = () => (
    <>
        <Suspense fallback="Loading...">
            <ProfileIntegrationApp />
        </Suspense>
    </>


);

export default App;