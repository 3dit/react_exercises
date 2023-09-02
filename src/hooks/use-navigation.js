import { useContext } from 'react';
import NavigationContext from '../context/navigation';

//this is used to return navigation context, to implemenate need of Route and Link to import both NavigationContext and useContext
function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;