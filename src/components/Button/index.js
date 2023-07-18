
import { Link } from 'react-router-dom';

function Button({ to, href, children, leftIcon, rightIcon, onClick, disabled, ...passProps }) {
    let Comp = 'button';
    const props = { onClick, ...passProps }
    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp {...props}>
            {children}
        </Comp>
    );
}

export default Button;