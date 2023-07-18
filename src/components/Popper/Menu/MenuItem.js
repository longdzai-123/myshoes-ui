import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';

const cx = classNames.bind(styles)
function MenuItem({ data }) {
    const classes = cx('menu-item', {
        seperate: data.seperate
    })
    return (
        <Button className={classes} to={data.to}>
            <span className={cx('icon')}>{data.icon}</span>
            <span className={cx('title')}>{data.title}</span>
        </Button>
    );
}

export default MenuItem;