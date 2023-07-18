import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import classNames from "classnames/bind";
import { faRightLeft, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Product from './Product';
import { useEffect, useState } from 'react';
import { ProductAll } from '../../service/ProductService';

const cx = classNames.bind(styles)

function Home() {
    const [listProduct, setListProduct] = useState([])

    const fetchData = async () => {
        try {
            let body = await ProductAll()
            setListProduct(body)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    const render = () => {
        return listProduct.map((data) =>
            <Product key={data.id} data={data} />
        )
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('description')}>
                <img className={cx('img')} src={require('../../assets/image/flash.png')} alt='' />
            </div>

            <div className={cx('content-top')}>
                <div className={cx('box')}>
                    <div className={cx('icon')}><FontAwesomeIcon icon={faStar} /></div>
                    <span>Hàng chính hãng, chất lượng cao</span>
                </div>
                <div className={cx('box')}>
                    <div className={cx('icon')}><FontAwesomeIcon icon={faRightLeft} /></div>
                    <span>Đổi hàng 30 ngày thủ tục đơn giản</span>
                </div>
                <div className={cx('box')}>
                    <div className={cx('icon')}><FontAwesomeIcon icon={faTruckFast} /></div>
                    <span>Miễn phí giao hàng với đơn hơn 500k</span>
                </div>
            </div>

            <div>
                <div className={cx('filter')}>
                    <span >Sắp xếp theo:</span>
                    <select className={cx('select')}>
                        <option value="1" >Mặc định</option>
                        <option value="2">Saab</option>
                        <option value="3">Mercedes</option>
                        <option value="4">Audi</option>
                    </select>
                </div>
                <h2 className={cx('new')}>Sản phẩm mới</h2>
                <div className={cx('product-main')}>
                    {render()}
                </div>
            </div>
        </div>
    );
}

export default Home;