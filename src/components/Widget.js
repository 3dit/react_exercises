import classNames from 'classnames';

function Widget({ children, className }) {
    const classes = classNames('flex-item w-80 border outline-8 m-5 -p-2 h-full bg-red-100', className);
    return (
        <div className="flex ">
            <div className={classes}>
                {children}
            </div>
        </div >
    )
}

export default Widget;