export default class Card extends React.Component {
    render() {
        const {title, price, description, imgLink, addedToCart } = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    { imgLink &&
                        <img src={imgLink} alt={title}/>
                    }
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <span className="card-price">${price}</span>
                    {addedToCart
                        ? <AddToCartForm addedToCart={addedToCart} />
                        : <AddToCartButton />
                    }
                </div>
            </div>
        );
    }
}