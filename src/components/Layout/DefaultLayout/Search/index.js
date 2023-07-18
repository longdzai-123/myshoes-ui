import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import ProductItem from '../../../ProductItem';
import styles from './Search.module.scss'
import { useEffect, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchProduct } from '../../../../service/SearchService';

const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('')

    const fetchData = async () => {
        try {
            let body = await searchProduct(searchValue)
            console.log(body)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }
        fetchData()
    }, [searchValue])

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1"{...attrs}>
                    <PopperWrapper>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input value={searchValue} placeholder="Tìm kiếm sản phẩm..." onChange={handleChange} />

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;