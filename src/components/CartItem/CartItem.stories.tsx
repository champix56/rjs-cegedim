import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CartItem } from "./CartItem";

export default { 
	component: CartItem, 
	title: 'Cart Item',
    argTypes:{add:{action:'string'},remove:{action:'string'},del:{action:'string'}}
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />;

export const CartItems = Template.bind({});
CartItems.args = {
        id: 0,
        title: "Kenwood kMix Stand Miser for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk",
        price: 229,
        image: "https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg",
		quantite: 2,
}