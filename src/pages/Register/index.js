import { Link } from "react-router-dom";
import styles from './Register.module.scss';
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { RegisterApi } from "../../service/RegisterService";

const cx = classNames.bind(styles)
function Register() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [RegisterDone, setRegisterDone] = useState(false)

    const handleRegister = () => {
        const fectApi = async () => {
            try {
                let body = await RegisterApi(name, username, password, email);
                if (body.status === 200) {
                    setName("")
                    setUsername("")
                    setPassword("")
                    setEmail("")
                    setRegisterDone(true)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fectApi()
    }

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
                            <input value={name} placeholder="Họ tên" onChange={(e) => { setName(e.target.value) }}></input>
                            <input value={username} placeholder="Tên đăng nhập" onChange={(e) => { setUsername(e.target.value) }}></input>
                            <input value={password} placeholder="Mật khẩu" type="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                            <input value={email} placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        {RegisterDone && <span>Đăng kí tài khoản thành công</span>}
                        <Button className={cx('btn')} onClick={handleRegister}>Đăng ký</Button>
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