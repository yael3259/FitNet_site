import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { getAllProduct } from './productApi';
import './List.css';
import { MiniBasket } from "./MiniBasket";
import { Link } from 'react-router-dom';
import F from './files/F.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';



const List = () => {
    const [arr, setArr] = useState([]); // רשימת המוצרים
    const [page, setPage] = useState(1); // דף הנוכחי בעמוד
    const [searchText, setSearchText] = useState(''); // חיפוש
    const [cartItems, setCartItems] = useState([]); // פריטים בסל
    const [loading, setLoading] = useState(false); // האם טעינה מתבצעת
    const [hoveredProductId, setHoveredProductId] = useState(null); // מוצר ממוסך
    const [hoveredImage, setHoveredImage] = useState(null); // תמונה ממוסכת
    const [showMiniBasket, setShowMiniBasket] = useState(false); // האם להציג את העגלה המינימלית
    const [closeTimeout, setCloseTimeout] = useState(null); // זמן סגירת סל מוקטן
    const [copiedCode, setCopiedCode] = useState(null); // Track copied code

    useEffect(() => {
        loadProducts(page, searchText);
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, [page, searchText]);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const loadProducts = (currentPage, searchText = '') => {
        setLoading(true);
        getAllProduct(currentPage, 12, searchText)
            .then((res) => {
                if (currentPage === 1) {
                    setArr(res.data);
                } else {
                    setArr(prevArr => [...prevArr, ...res.data]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            });
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        setPage(1);
    };

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find((item) => item._id === product._id);
            if (existingProduct) {
                return prevItems.map((item) =>
                    item._id === product._id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });

        setShowMiniBasket(true);
        if (closeTimeout) {
            clearTimeout(closeTimeout);
        }
        const newTimeout = setTimeout(() => {
            setShowMiniBasket(false);
        }, 12000);
        setCloseTimeout(newTimeout);
    };

    const handleMouseOver = (productId) => {
        setHoveredProductId(productId);
        setHoveredImage('https://cdn-icons-png.freepik.com/256/14035/14035576.png?ga=GA1.1.394280285.1712833522&semt=ais_hybrid');
    };

    const handleMouseOut = () => {
        setHoveredProductId(null);
        setHoveredImage(null);
    };

    const loadMoreProducts = () => {
        setPage(prevPage => prevPage + 1);
    };

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopiedCode(code);
        }).catch((err) => {
            console.error('Error copying to clipboard: ', err);
        });
    };

    return (
        <>
            {showMiniBasket && <MiniBasket cartItems={cartItems} setCartItems={setCartItems} />}
            <div className="bg">
                <img src={F} className='logoImage1' width={200} height={100} style={{ position: 'relative', top: '260px', left: '141px' }} />
                <h1 id='f' className="header"> Online </h1>
                <h1 className="header"> Fitness </h1>
                <h1 className="header"> Store </h1>
            </div>

            <div className="hiddenLogo">
                <img src={F} className="logoImage" />
                <h1 className="header2">Online Fitness Store</h1>
            </div>

            <div className="parallax"></div>
            <div className="overlay">
                <p className='offer'><img src='https://cdn-icons-png.freepik.com/256/12957/12957298.png?semt=ais_hybrid'
                    height={45}
                    width={45}
                    style={{ position: 'relative', top: '6.5px', right: "10px" }} />
                    Special Offer Just For You
                    <img src='https://cdn-icons-png.freepik.com/256/12957/12957298.png?semt=ais_hybrid'
                        height={45}
                        width={45}
                        style={{ position: 'relative', top: '6.5px', left: "10px" }} /></p>
                        
                <div className="coupon-container">
                    <div className="coupon">
                        <p className='lab'>Get 10% off for the holiday</p>
                        <p className="coupon-code">FIMJS16</p>
                        <button onClick={() => copyToClipboard('FIMJS16')}>
                            {copiedCode === 'FIMJS16' ? (<>
                                copied <FontAwesomeIcon icon={faCheck} className='copyIcon' />
                            </>) : ('Copy Code')}
                        </button>
                    </div>
                    <div className="coupon">
                        <p className='lab'>Get 15% off an $80 purchase</p>
                        <p className="coupon-code">HEFGI20</p>
                        <button onClick={() => copyToClipboard('HEFGI20')}>
                            {copiedCode === 'HEFGI20' ? (<>
                                copied <FontAwesomeIcon icon={faCheck} className='copyIcon' />
                            </>) : ('Copy Code')}
                        </button>
                    </div>
                    <div className="coupon">
                        <p className='lab'>Get 2% off storewide</p>
                        <p className="coupon-code">STWD20</p>
                        <button onClick={() => copyToClipboard('STWD20')}>
                            {copiedCode === 'STWD20' ? (<>
                                copied <FontAwesomeIcon icon={faCheck} className='copyIcon' />
                            </>) : ('Copy Code')}
                        </button>
                    </div>
                </div>
            </div>

            <div className="container_list">
                <div className="search-container">
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search product..."
                        value={searchText}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                </div>

                <div className="grid-container_list">
                    {arr.map((item) => (
                        <div className="grid-item" key={item._id}>
                            <Link to={'/details/' + item.name + ":" + item._id} state={item}>
                                <ListItem one={item} />
                            </Link>
                            <div className="product_details">
                                <p className="item-name">{item.name}</p>
                                <div className="dd-container">
                                    <p className="price">$ {item.price}</p>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="del_product"
                                        onMouseOver={() => handleMouseOver(item._id)}
                                        onMouseOut={handleMouseOut}
                                    >
                                        <img
                                            src={hoveredProductId === item._id ? hoveredImage : 'https://cdn-icons-png.freepik.com/256/11707/11707954.png?ga=GA1.1.394280285.1712833522&'}
                                            width={30}
                                            height={30}
                                            alt="Add to cart icon"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={loadMoreProducts} disabled={loading} className="load-more-button">
                    {loading ? <div className="spinner"></div> : "Load More"}
                </button>
            </div>
        </>
    );
};

export default List;
