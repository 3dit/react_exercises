import Link from './Link';
import coreRoutes from '../config/routing';

function Sidebar() {

    const renderedLinks = coreRoutes.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.path}
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                className="mb-3">
                {link.label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 overflowx-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;