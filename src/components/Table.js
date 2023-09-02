import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useReducer } from 'react';
import useSort from '../helpers/useSort.js';
import { produce } from 'immer';

const exec = {
    DATA: 'set-data',
    SORT_ORDER: 'set-sort-order',
    SORT_PROP_NAME: 'set-sort-prop-name',
    DATA_SORTORDER_SORTPROPNAME: 'set-data-sort-prop-name'
}


const _sort = { up: 1, down: -1, none: 0 }


const reducer = (state, action) => {
    switch (action.type) {
        case exec.DATA:
            state.data = action.payload
            return;
        case exec.DATA_SORTORDER_SORTPROPNAME:
            //note you can't use something like state.data = { ...action.payload } as that breaks immer
            state.data = action.payload.data;
            state.sortPropName = action.payload.sortPropName;
            state.sortOrder = action.payload.sortOrder;
            return
        default:
            return state;
    }
}

function Table({ rows, columns }) {

    const enableLogging = false;

    const setState = (data, sortPropName, sortOrder) => {
        dispatch({
            type: exec.DATA_SORTORDER_SORTPROPNAME,
            payload: { data, sortPropName, sortOrder }
        });
    }

    const [state, dispatch] = useReducer(produce(reducer),
        {
            data: [...rows],
            sortOrder: _sort.none,
            sortPropName: ''
        });

    const { sortArray } = useSort();

    const sortColumnIcon = (propname) => {
        if (state.sortPropName === propname) {
            if (state.sortOrder == _sort.up) {
                return <div className="flex-item mt-1 scale-100"><IoIosArrowUp /></div>
            } else if (state.sortOrder == _sort.down) {
                return <div className="flex-item mt-1 scale-100"><IoIosArrowDown /></div>
            }
        }
        return null;
    }

    const renderRows = state.data.map((item) => {
        const rowCells = columns.map((column) => {
            return (
                <td className="border" key={column.title}>
                    {column.render(column.property, item)}
                </td>
            )
        });

        return (
            <tr className="border-b" key={item.name}>
                {rowCells}
            </tr>
        )

    })

    const renderHeader = columns.map((column) => {
        return (
            <td className="p-2 border" key={column.title}>
                <div className="flex flex-row" onClick={() => handleToggle(column.property)}>
                    <div className="flex-item cursor-pointer">{column.title}</div>
                    <div className="flex-item">
                        {sortColumnIcon(column.property)}
                    </div>
                </div>
            </td>
        )
    });

    const handleToggle = (propName) => {
        if (propName != state.sortPropName) {
            setState(sortArray(state.data, columns, propName, _sort.up), propName, _sort.up);
            // dispatch({
            //     type: exec.DATA_SORTORDER_SORTPROPNAME,
            //     payload: {
            //         data: sortArray(state.data, columns, propName, _sort.up),
            //         sortOrder: _sort.up,
            //         sortPropName: propName
            //     }
            //});
        } else {
            let newSortMode = (state.sortOrder) === _sort.up ? _sort.down : _sort.up;
            enableLogging && console.log('new sort mode ', newSortMode);
            setState(sortArray(state.data, columns, propName, newSortMode), state.sortPropName, newSortMode);
        //     dispatch({
        //         type: exec.DATA_SORTORDER_SORTPROPNAME,
        //         payload: {
        //             data: sortArray(state.data, columns, propName, newSortMode),
        //             sortOrder: newSortMode,
        //             sortPropName: state.sortPropName
        //         }
        //     });
        }
    }

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr>
                    {renderHeader}
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    )
};

export default Table;