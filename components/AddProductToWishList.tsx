export interface AddProductToWishListProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({
  onAddToWishlist,
  onRequestClose,
}: AddProductToWishListProps) {
  return (
    <>
      <span>Deseja adicionar aos favoritos?</span>
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </>
  );
}
