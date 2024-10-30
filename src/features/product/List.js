import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { getAllProduct } from './productApi';
import './List.css';
import { MiniBasket } from "./MiniBasket";

const List = () => {
    const [arr, setArr] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [hoveredProductId, setHoveredProductId] = useState(null);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [showMiniBasket, setShowMiniBasket] = useState(false);

    useEffect(() => {
        getAllProduct(page, 5, '')
            .then((res) => {
                console.log(res);
                setArr(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    const handleMouseOver = (productId) => {
        setHoveredProductId(productId);
        setHoveredImage('https://cdn-icons-png.freepik.com/256/14035/14035576.png?ga=GA1.1.394280285.1712833522&semt=ais_hybrid');
    };

    const handleMouseOut = () => {
        setHoveredProductId(null);
        setHoveredImage(null);
    };

    const handleButtonClick = () => {
        setShowMiniBasket(true);
        setTimeout(() => { setShowMiniBasket(false) }, 12000);
    };

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            alert(`Coupon code ${code} copied to clipboard!`);
        });
    };

    return (
        <>
            {showMiniBasket && <MiniBasket />}
            <div className="bg">
                <p></p>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1 className="header"> online </h1>
                <h1 className="header"> fitness </h1>
                <h1 className="header"> store </h1>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
            </div>

            <div className="parallax"></div>
            <div className="overlay">
                <p className='offer'>Special Offer Just For You!</p>
                <p>
                    <img src="https://cdn-icons-png.freepik.com/256/1685/1685230.png?uid=R84827178&ga=GA1.1.1617557968.1720184330" width={45} height={45} className='fire'/>
                    Use the coupon codes below to get exclusive discounts
                    <img src="https://cdn-icons-png.freepik.com/256/1685/1685230.png?uid=R84827178&ga=GA1.1.1617557968.1720184330" width={45} height={45} className='fire2'/>
                </p>
                <div className="coupon-container">
                    <div className="coupon">
                        <p className='lab'>Get 10% off your first purchase</p>
                        <p className="coupon-code">FIMJS16</p>
                        <button onClick={() => copyToClipboard('FIMJS16')}>Copy Code</button>
                    </div>
                    <div className="coupon">
                        <p className='lab'>Get 15% off an $80 purchase</p>
                        <p className="coupon-code">HEFGI20</p>
                        <button onClick={() => copyToClipboard('HEFGI20')}>Copy Code</button>
                    </div>
                    <div className="coupon">
                        <p className='lab'>Get 2% off storewide</p>
                        <p className="coupon-code">STWD20</p>
                        <button onClick={() => copyToClipboard('STWD20')}>Copy Code</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="grid-container">
                    {arr.map((item) => (
                        <div className="grid-item" key={item._id}>
                            <a href={'/details/' + item.name + ":" + item._id} target="_blank" className="grid-item-link">
                                <ListItem one={item} />
                            </a>
                            <div className="ditails">
                                <p className="item-name">{item.name}</p>
                                <div className="dd-container">
                                    <p className="price">$ {item.price}</p>
                                    <img
                                        src={hoveredProductId === item._id ? hoveredImage : 'https://cdn-icons-png.freepik.com/256/11707/11707954.png?ga=GA1.1.394280285.1712833522&'}
                                        width={30}
                                        height={30}
                                        className="dd"
                                        onMouseOver={() => handleMouseOver(item._id)}
                                        onMouseOut={handleMouseOut}
                                        onClick={handleButtonClick}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default List;
