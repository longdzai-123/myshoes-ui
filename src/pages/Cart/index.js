import classNames from 'classnames/bind';
import styles from './Cart.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, delItem } from '../../redux/actions';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const cx = classNames.bind(styles)
function Cart() {
    const state = useSelector((state) => state.addCarts)
    let total = 0
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let { auth } = useContext(AuthContext)

    const handlePayment = () => {
        if (auth) {
            navigate("/checkout")
        } else {
            alert('Vui lòng đăng nhập tài khoản trước khi thanh toán')
            navigate("/login")
        }
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb')}>
                <div className={cx('inner')}>
                    <Link to='/'>Trang chủ 〉</Link>
                    <Link to='/'>Giỏ hàng của bạn</Link>
                </div>
            </div>
            <div className={cx('cart')}>
                <div className={cx('content')}>
                    <h2>GIỎ HÀNG CỦA BẠN</h2>
                    <table border={1}>
                        <thead>
                            <tr>
                                <td>Hình ảnh</td>
                                <td>Tên sản phẩm</td>
                                <td>Số lượng</td>
                                <td>Đơn giá</td>
                                <td>Tổng cộng</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((state) => {
                                total = total + (state.price * state.qty)
                                return (
                                    <tr key={state.id}>
                                        <td><img width="90px" src={require(`../../assets/image/${state.image}`)} alt='' /></td>
                                        <td>{state.name}</td>
                                        <td>
                                            <button onClick={() => { dispatch(delItem(state)) }} className={cx('btn-qty-left')}>-</button>
                                            {state.qty}
                                            <button onClick={() => { dispatch(addItem(state)) }} className={cx('btn-qty-right')}>+</button>
                                        </td>
                                        <td>{state.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{(state.price * state.qty).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                        <td><button className={cx('btn-delete')}>Xóa</button></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                    {total > 0 ?
                        <div className={cx('payment')}>
                            <p>Thành tiền:{total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                            <button className={cx('btn-payment')} onClick={handlePayment}>Thanh toán</button>
                        </div>
                        :
                        <div className={cx('nullCart')}>
                            <h2>Giỏ hàng trống</h2>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Cart;

