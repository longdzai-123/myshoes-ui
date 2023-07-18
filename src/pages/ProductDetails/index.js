import classNames from "classnames/bind";
import styles from './ProductDetails.module.scss'


const cx = classNames.bind(styles)
function ProductDetails() {


    return (
        <div className={cx('wrapper')} >
            <div className={cx('content')}>
                content
            </div>
        </div>
    );
}

export default ProductDetails;