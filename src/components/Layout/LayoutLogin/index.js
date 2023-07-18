import Header from "../DefaultLayout/Header";
import classNames from "classnames/bind";
import styles from './LayoutLogin.module.scss'
import Footer from "../DefaultLayout/Footer";


const cx = classNames.bind(styles)
function LayoutLogin({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default LayoutLogin;