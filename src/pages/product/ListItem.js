import "../../styles/product/List.css";



const ListItem = ({ one }) => {

    return (
        <div className="item-container">
            <div>
                <img src={one.urlImage} className="item-image" />
            </div>
        </div>
    );
}


export default ListItem;