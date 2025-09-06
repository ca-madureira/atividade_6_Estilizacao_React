import { Product, Media, Image, Badge, Title, Row, Price, Rating } from './ProductCard.styles'
import Button from '../../../../01-css-global/src/components/Button/Button';

export const ProductCard = ({ product }) => {
    const { image, name, price, rating, tag, variant = 'solid' } = product;


    const formatPrice = (priceValue) => {

        if (typeof priceValue === 'number') {
            return priceValue.toFixed(2).replace('.', ',');
        }


        if (typeof priceValue === 'string') {

            const numericString = priceValue.replace(/[^\d,.]/g, '');

            const number = parseFloat(numericString.replace(',', '.'));


            if (!isNaN(number)) {
                return number.toFixed(2).replace('.', ',');
            }
        }


        return '0,00';
    };

    return (
        <Product>
            <Media>
                <Image src={image} alt={name} />
                {tag && <Badge type={tag.toLowerCase()}>{tag}</Badge>}
            </Media>

            <Title title={name}>{name}</Title>

            <Row>
                <Price>R$ {formatPrice(price)}</Price>
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