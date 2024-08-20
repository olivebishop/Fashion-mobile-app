import { ImageSourcePropType } from 'react-native';

export interface Slide {
    id: string;
    title: string;
    titleColor: string; // Add this line
    image: ImageSourcePropType;
    description: string;
}

export const slides: Slide[] = [
    {
        id: '1',
        title: 'Seamless Shopping Experience',
        titleColor: 'text-amber-950', // Add this line
        image: require('../assets/images/a.png'),
        description: 'Discover a world of fashion at your fingertips',
    },
    {
        id: '2',
        title: 'Wishlist: Where Fashion Dreams Begin',
        titleColor: 'text-amber-950', // Add this line
        image: require('../assets/images/b.png'),
        description: 'Save your favorite items for later',
    },
    {
        id: '3',
        title: 'Swift and Reliable Delivery',
        titleColor: 'text-amber-950', // Add this line
        image: require('../assets/images/c.png'),
        description: 'Get your fashion finds delivered quickly',
    },
];