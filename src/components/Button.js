import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    warning,
    danger,
    outline,
    success,
    rounded,
    ...rest
}) {
    const shared = 'flex item-center px-3 py-1.5 border mx-2 my-1.5 rounded drop-shadow-md pt-0.5 pb-0.5';
    const finalClassName = className(rest.className, shared, {
        'bg-blue-500 border-blue-500 text-white': primary,
        'bg-cyan-400 border-gray-800 text-yellow': secondary,
        'bg-orange-500 border-orange-500 text-white': warning,
        'bg-red-500 border-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
    });

    const classes = twMerge(finalClassName);

    return <button {...rest} className={finalClassName}>
        {children}
    </button>
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
      const count =
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);
   
      if (count > 1) {
        return new Error(
          'Only one of primary, secondary, success, warning, danger can be true!'
        );
      }
    },
  };

export default Button;