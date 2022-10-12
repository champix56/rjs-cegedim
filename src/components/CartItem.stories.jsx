import { CartItemU } from './CartItemU';

export default {
    title: "CartItem",
};

export const Default = (args) => <CartItemU {...args} />;

Default.story = {
    id: 1, price: 123, quantite: 2, title: "mon produit"
};
