/* eslint-disable */
import CartList from './CartList';

export default {
  title: "CartList",
};

export const Default = () => <CartList items={[{id:1,image:'',price:23,title:'',quantite:1}]} />;

Default.story = {
  name: 'default',
};
