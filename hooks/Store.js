import create from 'zustand'

const Store = create((set) => ({

  showModalGallery : false,
  setShowModalGalleryToggle : () => set((state) =>({showModalGallery : !state.showModalGallery})),

  //For Mobile Menu 
  MenuModal: false,
  OpenMenuModal: () => set({MenuModal: true}),
  CloseMenuModal: () => set({MenuModal: false}),

  // For Shopping Cart
  showCart : false,
  setShowCart : () => set((state) => ({showCart : !state.showCart})),
  setShowCartClose : () => set({showCart : false}),

  // For images selection
  imageSelected : 1,
  setImageSelected : (up) => set({imageSelected : up}),

  // Quantity to order
  quantity : 0,
  UpdateQuantity : (newQuantity) => set((state) => ({quantity : newQuantity})),
  setQuantityIncrease : () => set((state) => ({quantity : state.quantity + 1})),
  setQuantityDecrease : () => set((state) => ({quantity : state.quantity <= 0 ? 0 : (+state.quantity - 1)})),
  reinitializeQuantity : () => set({quantity : 0}),

  //Cart Item add
  listOfItem : [],
  UpdatelistOfItem : (list, indexToDelete, newQuantity) => set((state) => ({listOfItem : list.map((item,index) => indexToDelete === index ?  {...item, quantity : newQuantity}   : item)})),
  AddItemToCart : (item) => set((state) => ({listOfItem : [...state.listOfItem, item]})),
  RemoveItemFromCart : (index) => set((state) => ({listOfItem : state.listOfItem.filter((_,ind) => index !== ind)})),
  GetTotalItems : (list) => set((state) => ({totalItems : list.reduce(((prev, curr) => prev + curr.quantity), 0)})),
}))


export default Store;