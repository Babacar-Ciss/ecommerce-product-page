import create from 'zustand'

const StoreAnnexe = create((set) => ({

  // For Modal Gallery
  showModalGallery : false,
  setShowModalGalleryToggle : () => set((state) =>({showModalGallery : !state.showModalGallery})),


  quantity : 0,
  setQuantityIncrease : () => set((state) => ({quantity : +state.quantity + 1})),
  setQuantityDecrease : () => set((state) => ({quantity : +state.quantity - 1})),
}))


export default StoreAnnexe;