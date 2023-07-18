import { Link } from "react-router-dom";
import styles from './Register.module.scss';
import classNames from "classnames/bind";
import Button from "../../components/Button";

const cx = classNames.bind(styles)
function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb')}>
                <div className={cx('inner')}>
                    <Link to='/'>Trang chủ 〉</Link>
                    <Link to='/'>Tài khoản 〉</Link>
                    <Link to='/'>Đăng kí</Link>
                </div>
            </div>
            <div className={cx('register')}>
                <div className={cx('row')}>
                    <aside className={cx('aside-left')}>
                        <Link to='/sale'>
                            <img className={cx('img')} src="https://myshoes.vn/image/cache/catalog/2022/banner/slide-trai-20-300x500h.png" alt="" />
                        </Link>
                    </aside>
                    <div className={cx('content')}>
                        <h2>Thông tin đăng ký</h2>
                        <div className={cx('form')}>
                            <input placeholder="Họ tên"></input>
                            <input placeholder="Tên đăng nhập"></input>
                            <input placeholder="Mật khẩu" type="password"></input>
                            <input placeholder="Email" type="email"></input>
                        </div>
                        <Button className={cx('btn')}>Đăng ký</Button>
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

export default Register;