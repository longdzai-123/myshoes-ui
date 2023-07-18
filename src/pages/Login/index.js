import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.scss';
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoginAPI, MeAPI } from "../../service/LoginService";

const cx = classNames.bind(styles)

function Login() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let { setAuth, setUser } = useContext(AuthContext)

    let navigate = new useNavigate()

    const onSubmit = async () => {
        try {
            let token = await LoginAPI(username, password)
            localStorage.setItem("token", token)

            setAuth(true)
            let user = await MeAPI()
            setUser(user)
            console.log(user)
            navigate("/")
        } catch (e) {
            console.log(e)
            setAuth(false)
        }
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb')}>
                <div className={cx('inner')}>
                    <Link to='/'>Trang chủ 〉</Link>
                    <Link to='/'>Tài khoản 〉</Link>
                    <Link to='/'>Đăng nhập</Link>
                </div>
            </div>
            <div className={cx('login')}>
                <div className={cx('row')}>
                    <aside className={cx('aside-left')}>
                        <Link to='/sale'>
                            <img className={cx('img')} src="https://myshoes.vn/image/cache/catalog/2022/banner/slide-trai-20-300x500h.png" alt="" />
                        </Link>
                    </aside>
                    <div className={cx('content')}>
                        <div className={cx('column-left')}>
                            <h2 className={cx('title')}>Khách hàng mới</h2>
                            <p>Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn và nhiều chương trình mua sắm ưu đãi hơn dành riêng cho khách hàng thân thiết.</p>
                            <Button to='/register' className={cx('btn')}>Đăng Ký</Button>
                        </div>
                        <div className={cx('column-right')}>
                            <h2 className={cx('title')}>Thông tin đăng nhập</h2>
                            <div className={cx('form')}>
                                <input placeholder="Tên đăng nhập:" onChange={(e) => { setUsername(e.target.value) }} />
                                <input type="password" placeholder="Mật khẩu:" onChange={(e) => { setPassword(e.target.value) }} />
                                <Button to='/' className={cx('forget')}> Quên mật khẩu</Button>
                            </div>
                            <button className={cx('btn')} onClick={onSubmit}>Đăng Nhập</button>
                        </div>
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

export default Login;