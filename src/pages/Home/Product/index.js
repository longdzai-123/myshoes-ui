import { Link } from "react-router-dom";
import styles from './Product.module.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles)

function Product({ data }) {
    return (
        <div className={cx('wrapper')} >
            <Link to={`/product/${data.id}`}>
                <img className={cx('img-product')} src={require(`../../../assets/image/${data.image}`)} alt="" />
            </Link>
            <div className={cx('caption')}>
                <div className={cx('category')}>
                    <Link to={`/category/2`}>{data.category.name}</Link>
                </div>
                <Link className={cx('name')} to={`/product/:${data.id}`}>
                    {data.name}
                </Link>
                <div className={cx('price')}>
                    <span>{data.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                </div>
            </div>
        </div>

    );
}

export default Product;