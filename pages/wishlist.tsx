import { Layout } from "@components/common";
import { Heart } from "@components/icons";

export default function Wishlist() {
  const isEmpty = true;

  return (
    <div className='wishlist-container'>
      {isEmpty ? (
        <div className='wishlist-empty'>
          <Heart />
          <h3>Your wishlist is empty</h3>
        </div>
      ) : (
        <div className='wishlist'>
          <h3>Wishlist</h3>
        </div>
      )}
    </div>
  );
}

Wishlist.Layout = Layout;
