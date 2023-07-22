import classNames from "classnames/bind";
import styles from './ProductDetails.module.scss'
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useEffect, useState } from "react";
import { ProductById } from "../../service/ProductService";
import { addItem, delItem } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const cx = classNames.bind(styles)
function ProductDetails() {
    const [selectSize, setSelectSize] = useState("")
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState({})
    const dispatch = useDispatch()
    const handleSize = (e) => {
        setSelectSize(e.target.value)
    }

    let { id } = useParams()

    const fetchApi = async () => {
        try {
            let body = await ProductById(id)
            setProduct(body)
            setCategory(body.category)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const handleAddCart = () => {
        dispatch(addItem(product))
    }


    return (
        <div className={cx('wrapper')} >
            <div className={cx('breadcrumb')}>
                <div className={cx('inner')}>
                    <Link to='/'>Trang chủ 〉</Link>
                    <Link to='/'>{category.name} 〉</Link>
                    <Link to='/'>{product.name}</Link>
                </div>
            </div>
            <div className={cx('product-wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('product-content')}>
                        <div className={cx('product-img')}>
                            {product.image && <img src={require(`../../assets/image/${product.image}`)} alt="" />}
                        </div>
                        <div className={cx('product-info')}>
                            <h1>{product.name}</h1>
                            <div>
                                <p className={cx('product-price')}>{product.price?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                <div>
                                    <div>
                                        <div>
                                            <span className={cx('icon-check')}><FontAwesomeIcon icon={faCheck} /></span>
                                            <span>Kho hàng:</span>
                                            <span className={cx('check')}>còn hàng</span>
                                        </div>
                                        <div>
                                            <img src={require('../../assets/image/adidas-70x70w.png')} alt="" />
                                        </div>
                                    </div>
                                    <div >
                                        <span className={cx('title-size')}>Chọn size:</span>
                                        <ToggleButtonGroup
                                            className={cx('product-size')}
                                            value={selectSize}
                                            color="primary"
                                            exclusive
                                            onChange={handleSize}
                                        >
                                            <ToggleButton className={cx('size')} value="40">40</ToggleButton>
                                            <ToggleButton className={cx('size')} value="41">41</ToggleButton>
                                            <ToggleButton className={cx('size')} value="42">42</ToggleButton>
                                        </ToggleButtonGroup>
                                    </div>
                                    <div className={cx('btn-group')}>
                                        <button className={cx('add-cart')} onClick={handleAddCart}>Thêm vào giỏ hàng</button>
                                        <button className={cx('buy-now')}>Mua hàng ngay</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-des')}>
                        <div className={cx('des-right')}>
                            <h2>Mô tả sản phẩm</h2>
                            <p>{product.description}</p>
                        </div>
                        <div className={cx('des-left')}>
                            <h2>Cam kết</h2>
                            <p>- Miễn phí giao hàng toàn quốc (với đơn hàng từ 500.000 vnđ).</p>
                            <p>- Đổi hàng trong 30 ngày. (Áp dụng với sản phẩm chưa sử dụng, nguyên vẹn như khi nhận hàng)</p>
                        </div>
                    </div>
                    <div className={cx('product-cmt')}>
                        <div className={cx('cmt-left')}>
                            <h2>Xem đánh giá</h2>
                            <label>Lê Hoàng Long</label>
                            <p>Sản phẩm đẹp, giá cả hợp lý, và form chuẩn. Quan trọng nhất là sản phẩm thực sự đẹp và đáp ứng được nhu cầu của mình.</p>
                        </div>
                        <div className={cx('cmt-right')}>
                            <label>Họ tên</label>
                            <input placeholder="Họ tên" />
                            <label>Bình luận</label>
                            <textarea placeholder="Đánh giá của bạn" />
                            <button className={cx('btn-cmt')}>Bình luận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;