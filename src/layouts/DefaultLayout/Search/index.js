import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import ProductItem from '../../../components/ProductItem';
import styles from './Search.module.scss'
import { useEffect, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchProductByName } from '../../../service/SearchService';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    const fetchData = async () => {
        try {
            let body = await searchProductByName(searchValue)
            console.log(body)
            setSearchResult(body)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
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
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1"{...attrs}>
                    <div className={cx('product-result')}>
                        <PopperWrapper>
                            {searchResult.map((result) => (
                                <Link to={`/product/${result.id}`}>
                                    <ProductItem data={result} key={result.id} />
                                </Link>
                            ))}
                        </PopperWrapper>
                    </div>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input onFocus={() => setShowResult(true)} value={searchValue} placeholder="Tìm kiếm sản phẩm..." onChange={handleChange} />

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;