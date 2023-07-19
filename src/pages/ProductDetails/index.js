import classNames from "classnames/bind";
import styles from './ProductDetails.module.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)
function ProductDetails() {


    return (
        <div className={cx('wrapper')} >
            <div className={cx('breadcrumb')}>
                <div className={cx('inner')}>
                    <Link to='/'>Trang chủ 〉</Link>
                    <Link to='/'>Tài khoản 〉</Link>
                    <Link to='/'>Đăng nhập</Link>
                </div>
            </div>
            <div className={cx('product-wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('product-content')}>
                        <div className={cx('product-img')}>
                            <img src={require('../../assets/image/product-19d30c2f-2347-4cd2-92f9-18b222bb7929.jpg')} alt="" />
                        </div>
                        <div className={cx('product-info')}>
                            <h1>GIÀY ADIDAS GRAND COURT BASE 2.0 NAM NỮ - TRẮNG ĐEN</h1>
                            <div>
                                <div>15900000</div>
                                <div>
                                    <div>
                                        <div>
                                            <span><FontAwesomeIcon icon={faCheck} /></span>
                                            <span>Kho hàng:</span>
                                            <span>còn hàng</span>
                                        </div>
                                        <div>
                                            <img src={require('../../assets/image/adidas-70x70w.png')} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>Chọn Màu:
                                            <input type="radio" />
                                            <input type="radio" />
                                            <input type="radio" />
                                            <input type="radio" />
                                            <input type="radio" />
                                        </div>
                                        <div>Chọn size:</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-des')}>
                        Product-description
                    </div>
                    <div className={cx('product-cmt')}>
                        Product-comment
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;