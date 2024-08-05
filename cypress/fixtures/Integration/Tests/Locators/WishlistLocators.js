class WishlistLocators {
    swiperSlideSelector = 'div.swiper-slide.product-box.swiper-slide-active';
    productNameSelector = '.product_name';
    saveModifyButtonSelector = '.butn_form';
    wishlistTableSelector = '.table_produse > tbody > tr';
    wishlistHeaderSelector = 'div.wishList_header';
    editWishlistButtonSelector = 'td.button-column > a.update';
    wishlistProductSelector = '.wishlist_prod';
    saveButtonSelector = '.butn_form';
    cartProductTitleSelector = '.cart_product_name_cell';
    addToCartButtonSelector = 'input.butn_form';
    cookieAcceptButtonSelector = '#cookie-notification__accept';
    cartproductname = ".cart_product_name_cell";
    wishlistArticleInputSelector = "input[name='Wishlist[Article][]']";
    wishlistProductTableRowSelector = ".table_produse > tbody > :nth-child(n) > :nth-child(2)"
    wishlistLinkSelector = "a[href*='/wishlist/view?id=12227655']";
    wishlistTableRowSelector = 'tbody > tr';
    addToWishlistButtonASelector = '.ordinary-a';

}

export default new WishlistLocators();
