
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import coreRoutes from './config/routing';

const renderRoutes = coreRoutes.map((route) => {
    return <Route key={route.path} path={route.path}>
        {route.page}
    </Route>
});

function App() {

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                {renderRoutes}
            </div>
        </div>
    )
}
export default App;

