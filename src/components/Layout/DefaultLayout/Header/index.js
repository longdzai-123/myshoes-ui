import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUserCheck, faUserLock, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser, faAddressCard, faClipboard } from '@fortawesome/free-regular-svg-icons'
import Menu from '../../../Popper/Menu';
import Search from '../Search';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUserCheck} />,
        title: 'Đăng nhập',
        to: '/login'
    },
    {
        icon: <FontAwesomeIcon icon={faUserLock} />,
        title: 'Đăng kí',
        to: '/register',
        seperate: true
    }
]
const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faAddressCard} />,
        title: 'Tài khoản của tôi',
        to: '/account'
    },
    {
        icon: <FontAwesomeIcon icon={faClipboard} />,
        title: 'Đơn hàng của tôi',
        to: '/order'
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Thoát',
        to: '/logout',
        seperate: true
    }
]
function Header() {
    let { auth, user } = useContext(AuthContext)
    console.log(auth)

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to='/'>
                    <div className={cx('logo')}>
                        <img src="https://myshoes.vn/image/cache/catalog/logo/logo_ms-565x195.png" width="130" alt="Myshoes.vn" />
                    </div>
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Menu items={auth ? USER_MENU : MENU_ITEMS}>
                        <div className={cx('login')}>
                            {auth ? (
                                <>
                                    <img className={cx('avatar')} src={require(`../../../../assets/image/user-b1612c6a-c6b0-4fef-aad6-49de94299403.jpg`)} alt="" />
                                    <span className={cx('txt')}>
                                        {user.name}
                                        <span>Chỉnh sửa / Thoát</span>
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Link to='/login' className={cx('login')}>
                                        <FontAwesomeIcon className={cx('icon-user')} icon={faUser} />
                                        <span className={cx('txt')}>
                                            Tài khoản
                                            <span>Đăng nhập / Đăng kí</span>
                                        </span>
                                    </Link>
                                </>
                            )}
                        </div>
                    </Menu>

                    <div className={cx('cart')}>
                        <FontAwesomeIcon className={cx('icon-cart')} icon={faBagShopping} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header; 