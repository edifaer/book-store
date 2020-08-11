import updateBookList from './book-list-reducer';
import updateShoppingCart from './shopping-cart-refactor';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
