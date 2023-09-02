import { FiFolderPlus, FiFolderMinus } from 'react-icons/fi';
import { useState, useEffect, useCallback } from 'react';

function Section({ item }) {

    const [expanded, setExpanded] = useState(false);
    const [cnt, setCnt] = useState(0);

    const slog = (m, clr) => {
        console.log(`%c${m}`, 'font-size:20px' + (clr ? `;color:"${clr}"` : ''));
    }

    const ConditionalJSX = () => {
        <div>
            showEdit && (
                <div>EDIT MODE</div>
                <div>GOES HERE</div>
            )
            !showEdit && <div>NO EDIT MODE</div>
        </div>
    }

    const FolderIcon = () => {
        <span>
            {expanded ?
                <FiFolderMinus className={`ABC${item.id}EX mt-auto`} />
                :
                <FiFolderPlus className={`ABC${item.id}UEX mt-auto`} />
            }
        </span>
    }

    const Content = () => {
        return (
            <div className="border-t-4 pt-0">
                <div className="m-4">{item.content}</div>
            </div>
        )
    }

    return (
        <div className="border-4 w-1/2 m-4">

            <div className="flex items-center justify-between m-1">
                <div></div>
                <div className="flex">{item.label}</div>
                <div>
                    <span>
                        {expanded ?
                            <FiFolderMinus onClick={() => { setExpanded(!expanded); }} />
                            :
                            <FiFolderPlus onClick={() => { setExpanded(!expanded); }} />
                        }
                    </span>
                </div>
            </div>
            <div>
                {expanded && Content()}
            </div>
        </div>
    )
}
// useEffect(() => {
//     const listener = () => {
//         setExpanded(!expanded);
//     }
//     const postfix = expanded ? 'EX' : 'UEX'
//     const c = document.querySelector(`.ABC${item.id}${postfix}`);
//     console.log('---->', c);
//     c.addEventListener("click", listener);
//     return () => {
//         c.removeEventListener("click", listener);
//     }
// }, [setExpanded, expanded]);
export default Section;