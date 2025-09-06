import {
    Product,
    Media,
    Image,
    Badge,
    Title,
    Row,
    Price,
    Rating,
    Button
} from './ProductCard.styles';

export const ProductCard = ({ product }) => {
    const { image, name, price, rating, tag, variant = 'solid' } = product;

    return (
        <Product>
            <Media>
                <Image src={image} alt={name} />
                {tag && <Badge type={tag.toLowerCase()}>{tag}</Badge>}
            </Media>

            <Title title={name}>{name}</Title>

            <Row>
                <Price>R$ {price}</Price>
                {rating && (
                    <Rating aria-label={`Avaliação ${rating} de 5`}>
                        {'★'.repeat(Math.floor(rating))}{rating % 1 ? '⯨' : ''}
                    </Rating>
                )}
            </Row>

            <Button variant={variant}>Adicionar ao Carrinho</Button>
        </Product>
    );
};
