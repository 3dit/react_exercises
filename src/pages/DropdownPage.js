import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ];
    const options2 = [
        { label: 'Cat', value: 'cat' },
        { label: 'Dog', value: 'dog' },
        { label: 'Mouse', value: 'mouse' }
    ]

    const [selection, setSelection] = useState({});
    const [selectedAnimal, setSelectedAnimal] = useState({});

    const handleChange = (option) => {
        setSelection(option);
    }

    const handleAnimalChange = (option) => {
        setSelectedAnimal(option);
    }

    return (
        <div className="flex m-2 gap-4">
            <Dropdown options={options} value={selection} onChange={handleChange} />
            <Dropdown options={options2} value={selectedAnimal} onChange={handleAnimalChange} />
        </div>
    )

}
export default DropdownPage;