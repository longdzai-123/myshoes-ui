import classNames from "classnames/bind"
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

function ProductItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img-productItem')} src={require(`../../assets/image/${data.image}`)} alt="mycare-01.jpg" />
            <div className={cx('info')}>
                <span className={cx('product-name')}>
                    {data.name}
                </span>
                <span className={cx('price')}>
                    <span className={cx('price-new')}>{data.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                    {/* <span className={cx('price-old')}>350.000₫</span> */}
                </span>
            </div>
        </div>
    );
}

export default ProductItem;