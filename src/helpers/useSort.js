
import { useEffect, useState } from 'react';

function useSort() {
    function sortArray (rows, columns, propName, sortOrder) {
        const enableLogging = false;

        return [...rows].sort((a, b) => {
            let av, bv;
            const column = columns.filter(o => o.property === propName)?.[0];
            //console.log('SORT VALUE ',column,  a.getSortValue, b.getSortValue);
            if (column && column.getSortValue) {
                av = column.getSortValue(a);
                bv = column.getSortValue(b);
            } else {
                av = a[propName];
                bv = b[propName];
            }
            let theType = typeof (av);
            enableLogging && console.log(`CALLED SORT WITH PROPNAME ${propName}`, av, bv, theType);
            if (theType == 'number') {
                av = parseInt(av); bv = parseInt(bv);
                return (sortOrder === 1) ? av - bv : ((sortOrder === -1) ? bv - av : 0);
            } else if (theType == 'string') {
                return (sortOrder === 1) ? av.localeCompare(bv) : ((sortOrder === -1) ? bv.localeCompare(av) : 0);
            } else {
                //special case
                enableLogging && console.log('SPECIAL CASE', a, b);
                let av = a.sortValue;
                let bv = b.sortValue;
                if (av && bv) {
                    let theType = typeof (av);
                    if (theType == 'number') {
                        av = parseInt(av); bv = parseInt(bv);
                        return (sortOrder === 1) ? av - bv : ((sortOrder === -1) ? bv - av : 0);
                    } else if (theType == 'string') {
                        return (sortOrder === 1) ? av.localeCompare(bv) : ((sortOrder === -1) ? bv.localeCompare(av) : 0);
                    }
                } else {
                    enableLogging && console.log('BAILED OUT', av, bv)
                }
                enableLogging && console.log('bad number', theType, av, bv);
                return 0;
            }
        })

    }
    return { sortArray };
}


export default useSort;