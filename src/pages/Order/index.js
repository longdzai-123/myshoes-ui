import { Link } from 'react-router-dom';
import styles from './Order.module.scss';
import classNames from "classnames/bind";
import { useContext, useEffect, useState } from 'react';
import { BillByUserId } from '../../service/BillService';
import { AuthContext } from '../../context/AuthContext';

const cx = classNames.bind(styles)

function Order() {

    const { user } = useContext(AuthContext)

    const [bill, setBill] = useState([])

    const fetchApi = async () => {
        try {
            if (!user.id) {
                return;
            }
            let body = await BillByUserId(user.id)
            setBill(body)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])



    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb')}>
                <div className={cx('inner')}>
                    <Link to='/'>Trang chủ 〉</Link>
                    <Link to='/'>Đơn hàng của bạn</Link>

                </div>
            </div>
            <div className={cx('order')}>
                <div className={cx('row')}>
                    <aside className={cx('aside-left')}>
                        <Link to='/sale'>
                            <img className={cx('img')} src="https://myshoes.vn/image/cache/catalog/2022/banner/slide-trai-20-300x500h.png" alt="" />
                        </Link>
                    </aside>
                    <div className={cx('content')}>
                        <h2>Đơn hàng của bạn</h2>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Mã ID đơn hàng</td>
                                    <td>Khách hàng</td>
                                    <td>Địa chỉ nhận hàng</td>
                                    <td>Số điện thoại</td>
                                    <td>Ngày đặt hàng</td>
                                    <td>Tổng cộng</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {bill.map((bill) => {
                                    return (
                                        <tr key={bill.id}>
                                            <td>{bill.id}</td>
                                            <td>{bill.name}</td>
                                            <td>{bill.address}</td>
                                            <td>{bill.phone}</td>
                                            <td>{bill.buyDate}</td>
                                            <td>{bill.totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                            <td><button className={cx('btn-details')}>Xem chi tiết</button></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>

                    </div>
                    <aside className={cx('aside-right')}>
                        <Link to='/sale'>
                            <img className={cx('img')} src="https://myshoes.vn/image/cache/catalog/2022/banner/slide-trai-20-300x500h.png" alt="" />
                        </Link>
                    </aside>
                </div>
            </div>
        </div >
    );
}

export default Order;