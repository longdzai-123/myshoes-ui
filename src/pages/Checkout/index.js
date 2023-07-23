import classNames from 'classnames/bind';
import styles from './Checkout.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, delAll, delItem } from '../../redux/actions';
import { useState } from 'react';
import { BillAdd } from '../../service/BillService';

const cx = classNames.bind(styles)
function Checkout() {
    const state = useSelector((state) => state.addCarts)
    let total = 0
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    let totalPrice = 0
    let billItems = state.map((state) => {
        totalPrice = totalPrice + state.price * state.qty
        return {
            "product": {
                "id": state.id
            },
            "quantity": state.qty,
            "price": state.price * state.qt
        }
    }
    )


    const fetchApi = async () => {
        try {
            await BillAdd(billItems, name, phone, address, totalPrice)
        } catch (error) {
            console.log(error)
        }
    }

    const handleOrder = () => {
        fetchApi()
        dispatch(delAll())
        navigate("/")
    }


    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb')}>
                <div className={cx('inner')}>
                    <Link to='/'>Trang chủ 〉</Link>
                    <Link to='/'>Thanh toán</Link>
                </div>
            </div>
            <div className={cx('cart')}>
                <div className={cx('content')}>
                    <div className={cx('content-left')}>
                        <h2>Đơn hàng của bạn</h2>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Hình ảnh</td>
                                    <td>Tên sản phẩm</td>
                                    <td>Số lượng</td>
                                    <td>Đơn giá</td>
                                    <td>Tổng cộng</td>
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

                    </div>
                    <div className={cx('content-right')}>
                        <h2>Thông tin giao hàng</h2>
                        <input placeholder='Họ tên' onChange={(e) => { setName(e.target.value) }}></input>
                        <input placeholder='Số điện thoại' onChange={(e) => { setPhone(e.target.value) }}></input>
                        <input placeholder='Địa chỉ nhận hàng' onChange={(e) => { setAddress(e.target.value) }}></input>

                        {total > 0 ?
                            <div className={cx('payment')}>
                                <p>Thành tiền:{total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                <button className={cx('btn-payment')} onClick={handleOrder}>Đặt hàng</button>
                            </div>
                            :
                            <div className={cx('nullCart')}>
                                <h2>Giỏ hàng trống</h2>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Checkout;