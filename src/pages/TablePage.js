import Table from '../components/Table';
import { useRef, useState } from 'react';
import { FaTruckMonster, FaCaravan } from 'react-icons/fa';
import { BsCarFrontFill } from 'react-icons/bs';

function TablePage() {
    const ref = useRef(null);
    const data = [
        { id: 0, name: 'banana', color: 'bg-yellow-500', score: 9 },
        { id: 1, name: 'apple', color: 'bg-red-500', score: 5 },
        { id: 2, name: 'pear', color: 'bg-green-500', score: 7 },
    ]

    const genericCell = (property, item) => (<div className='p-3'>{item[property]}</div>);
    const colorCell = (property, item) => {
        const className = `p-3 m-3 border-black ${item[property]} w-1`;
        return (<div className={className} />)
    };
    const columns = [
        { title: 'Id', property: 'id', render: genericCell },
        { title: 'Name', property: 'name', render: genericCell },
        { title: 'Color', property: 'color', render: colorCell },
        { title: 'Score', property: 'score', render: genericCell }
    ]
    useState(() => {
        console.log('#RENDER## ', ref);
    },[]);


    const discountCell = (property, item) => {
        const percent = parseInt(item[property] * 100);
        const discountPrice = item[property] * item.price;
        return (
            <div ref={ref} className='p-3 pl-5 pr-5'>
                <span>{discountPrice} ( {percent}% )</span>
            </div>
        )
    }

    const discountCell2 = (property, item) => {
        const percent = parseInt(item[property] * 100);
        const discountPrice = item[property] * item.price;
        return (
            <div className='p-3 pl-5 pr-5'>
                <span>{percent}% ({discountPrice}) {parseInt(percent)}</span>
            </div>
        )
    }    

    const iconCell = (property, item) => {
        //item.sortValue = 0;
        return (<div className="flex justify-center">{item.img}</div>)
    }
    const carData = [
        { name: 'Truck', price: 45000, discount: .12, img: <FaTruckMonster /> },
        { name: 'Car', price: 32000, discount: .16, img: <BsCarFrontFill /> },
        { name: 'Trailer', price: 15000, discount: .09, img: <FaCaravan /> },
    ]
    const carColumns = [
        { title: 'Vehicle', property: 'name', render: genericCell },
        { title: 'Price', property: 'price', render: genericCell },
        { title: 'Discount', property: 'discount', render: discountCell, getSortValue: (row) => row.discount * row.price },
        { title: 'Discount2', property: 'discount', render: discountCell2, getSortValue: (row) => parseInt(row.discount*100)},
        { title: 'Icon', property: 'img', render: iconCell, getSortValue: (row) => 0 },
    ]

    return (
        <div>
            <Table rows={data} columns={columns} />
            <br />
            <Table rows={carData} columns={carColumns} />
        </div>
    )
}

export default TablePage;