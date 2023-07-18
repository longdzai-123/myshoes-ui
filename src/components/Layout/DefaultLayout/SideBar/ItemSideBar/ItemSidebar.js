import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './ItemSideBar.module.scss';

const cx = classNames.bind(styles)
function ItemSidebar({ item }) {

    const classes = cx('sidebar', {
        seperate: item.seperate
    })
    return (
        <Link className={classes} to={item.to} >
            <span className={cx('icon')}>{item.icon}</span>
            <span className={cx('title')}>{item.title}</span>
        </Link>
    );
}

export default ItemSidebar;