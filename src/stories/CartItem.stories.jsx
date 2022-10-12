import { CartItemU } from '../components/CartItemU';

export default {
    title: "CartItem",
};

export const Default = () => <CartItemU id="1" price="123" quantite="2" title="mon produit" image="" />;

Default.story = {
    name: 'default',
};
