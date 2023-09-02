import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        //const dropdownParent = document.getElementById(id);
        const clickEventFunc = (event) => {
            if(!divEl.current) return;
            
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', clickEventFunc, true);
        return () => {
            document.removeEventListener('click', clickEventFunc, true);
        }
    });
    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false);
    }
    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                key={option.value}
                onClick={() => handleOptionClick(option)}>{option.label}
            </div>
        )
    });

    return <div ref={divEl} className="w-48 relative">
        <Panel
            className="flex justify-between items-center cursor-pointer"
            onClick={handleClick}>

            {value?.label || 'Select...'}
            {isOpen && <Panel className="-ml-3 absolute top-full">{renderedOptions}</Panel>}
            <GoChevronDown />
        </Panel>
    </div>
}

export default Dropdown;