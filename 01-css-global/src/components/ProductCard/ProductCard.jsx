import './ProductCard.css';

export const ProductCard = ({ product }) => {
    const { image, name, price, rating, tag, variant = 'solid' } = product;

    return (
        <article className="product">
            <div className="product__media">
                <img src={image} alt={name} className="product__image" />
                {tag && <span className={`product__badge product__badge--${tag.toLowerCase()}`}>{tag}</span>}
            </div>

            <h2 className="product__title" title={name}>{name}</h2>

            <div className="product__row">
                <span className="product__price">R$ {price}</span>
                {rating && (
                    <span className="product__rating" aria-label={`Avaliação ${rating} de 5`}>
                        {'★'.repeat(Math.floor(rating))}
                        {rating % 1 ? '⯨' : ''}
                    </span>

                )}
            </div>

            <button className={`product__button product__button--${variant}`}>
                Adicionar ao Carrinho
            </button>
        </article>
    );
};
