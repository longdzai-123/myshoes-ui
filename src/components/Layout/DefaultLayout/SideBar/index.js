import classNames from 'classnames/bind';
import styles from './SideBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemSidebar from './ItemSideBar/ItemSidebar';
import { faCartShopping, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import CategoryItem from './CategoryItem/CategoryItem';


const cx = classNames.bind(styles)

const List_ITEMBAR = [
    {
        icon: <FontAwesomeIcon icon={faHouse} />,
        title: "Trang chủ",
        to: '/'
    },
    {
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: "Giỏ hàng",
        to: '/'
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        title: "Liên hệ",
        to: '/',
        seperate: true
    }
]

const LIST_CATEGORY = [
    {
        img: 'https://www.inlogo.vn/vnt_upload/File/Image/s_l300_1.jpg',
        title: 'Giày Nike',
        to: '/giaynike'
    },
    {
        img: 'https://zeevector.com/wp-content/uploads/Transparent-Adidas-Logo-NEW.png',
        title: 'Giày Adidas',
        to: '/'
    },
    {
        img: 'https://inkythuatso.com/uploads/images/2021/12/logo-lacoste-inkythuatso-22-13-35-14.jpg',
        title: 'Giày Lacoste',
        to: '/'
    },
    {
        img: 'https://st.depositphotos.com/38540216/59631/v/450/depositphotos_596311672-stock-illustration-puma-logo-black-symbol-name.jpg',
        title: 'Giày Puma',
        to: '/'
    },
    {
        img: 'https://w7.pngwing.com/pngs/1003/670/png-transparent-new-balance-branson-sneakers-shoe-clothing-rock-cliff-text-trademark-logo.png',
        title: 'Giày New Balance',
        to: '/'
    }
]
function SideBar() {

    const render = () => {
        return List_ITEMBAR.map((item, index) =>
            <ItemSidebar item={item} key={index} />
        )
    }

    const renderCategorys = () => {
        return LIST_CATEGORY.map((item, index) =>
            <CategoryItem item={item} key={index} />
        )
    }

    return (
        <aside className={cx('wrapper')}>
            {render()}
            <h4>Thương hiệu</h4>
            {renderCategorys()}
        </aside>
    );
}

export default SideBar; 