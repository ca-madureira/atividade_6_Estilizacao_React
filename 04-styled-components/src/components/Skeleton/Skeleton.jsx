import {
    SkeletonWrapper,
    Image,
    Title,
    Price,
    Button
} from './Skeleton.styles';

export const Skeleton = () => (
    <SkeletonWrapper>
        <Image />
        <Title />
        <Price />
        <Button />
    </SkeletonWrapper>
);
