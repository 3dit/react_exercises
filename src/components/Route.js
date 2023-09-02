import useNavigation from '../hooks/use-navigation';

function Route({ path, children }) {
    const { currentPath } = useNavigation();

    if (path === currentPath) {
        return (
            <div>
                {children}
            </div>
        )
    }

    return null;
}

export default Route;