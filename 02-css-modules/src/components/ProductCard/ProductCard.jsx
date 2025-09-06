import styles from './ProductCard.module.css';
import Button from '../Button/Button';

export const ProductCard = ({ product }) => {
    const { image, name, price, rating, tag, variant = 'solid' } = product;

    return (
        <article className={styles.product}>
            <div className={styles.media}>
                <img src={image} alt={name} className={styles.image} />
                {tag && (
                    <span className={`${styles.badge} ${styles[`badge${tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}`]}`}>
                        {tag}
                    </span>
                )}
            </div>

            <h2 className={styles.title} title={name}>{name}</h2>

            <div className={styles.row}>
                <span className={styles.price}>R$ {price}</span>
                {rating && (
                    <span className={styles.rating} aria-label={`Avaliação ${rating} de 5`}>
                        {'★'.repeat(Math.floor(rating))}{rating % 1 ? '⯨' : ''}
                    </span>
                )}
            </div>

            <Button variant={variant}>Adicionar ao Carrinho</Button>
        </article>
    );
};
