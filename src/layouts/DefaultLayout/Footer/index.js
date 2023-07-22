import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('content1')}>
                    <h1>MYSHOES.VN - GIÀY CHÍNH HÃNG</h1>
                    <div className={cx('description')}>
                        <div className={cx('img')}>
                            <img src={require('../../../assets/image/logo-myshoes-ok-90x90.png')} alt="" />
                        </div>
                        <div className={cx('txt')}>
                            <span>Myshoes.vn được định hướng trở thành hệ thống thương mại điện tử bán giày chính hãng hàng đầu Việt Nam.</span>
                            <span>Hotline: 0379468015</span>
                        </div>
                    </div>
                </div>
                <div className={cx('content2')}>
                    <h1>Về chúng tôi</h1>
                    <Link>Giới thiệu</Link>
                    <Link>Điều khoản sử dụng</Link>
                    <Link>Chính sách bảo mật</Link>
                    <Link>Liên hệ</Link>
                </div >
                <div className={cx('content3')}>
                    <h1>Khách hàng</h1>
                    <Link>Hướng dẫn mua hàng</Link>
                    <Link>Chính sách đổi trả</Link>
                    <Link>Chính sách bảo hành</Link>
                    <Link>Khách hàng thân thiết </Link>
                    <Link>Hướng dẫn chọn size </Link>
                    <Link>Chương trình khuyến mãi</Link>
                </div>
                <div className={cx('content4')}>
                    <h1>Chứng nhận</h1>
                    <div className={cx('certify')}>
                        <div className={cx('dma')}>
                            <img src={require('../../../assets/image/DMCA_logo-grn-btn150w.png')} alt="" />
                        </div>
                        <div className={cx('bct')}>
                            <img src={require('../../../assets/image/logo-bct.png')} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;