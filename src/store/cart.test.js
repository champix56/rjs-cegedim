import "@testing-library/jest-dom/extend-expect";
import {add,del,remove, initialState} from './cart'
import reducer from './cart'
//test du reducer
describe('cart',()=>{
    test('should add', () => { 
        const action =add({id:0,title:"gfdsq"});
        const outState=reducer(initialState, action);
        expect(outState.items.length).toBe(1)
     })
})