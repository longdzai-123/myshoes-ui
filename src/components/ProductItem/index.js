import classNames from "classnames/bind"
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img-productItem')} src="https://myshoes.vn/image/cache/data/mycare/mycare-01-w-60x60.jpg" alt="mycare-01.jpg" />
            <div className={cx('info')}>
                <span className={cx('product-name')}>
                    Bộ Vệ Sinh Giày Cao Cấp Mycare Shoe Cleaner Kit
                </span>
                <span className={cx('price')}>
                    <span className={cx('price-new')}>250.000₫</span>
                    <span className={cx('price-old')}>350.000₫</span>
                </span>
            </div>
        </div>
    );
}

export default ProductItem;