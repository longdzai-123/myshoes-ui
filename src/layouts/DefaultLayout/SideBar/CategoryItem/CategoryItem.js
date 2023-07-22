import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './CategoryItem.module.scss';

const cx = classNames.bind(styles)
function CategoryItem({ item }) {

    const classes = cx('sidebar', {
        seperate: item.seperate
    })
    return (
        <Link className={classes} to={item.to} >
            <img className={cx('img')} src={item.img} alt="" />
            <span className={cx('title')}>{item.title}</span>
        </Link>
    );
}

export default CategoryItem;