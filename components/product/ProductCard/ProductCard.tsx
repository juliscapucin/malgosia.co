import { Product } from "@common/types/product";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface Props {
  product: Product;
}

// import styles from "@styles/ProductCard";

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  const { id, name, slug, images } = product;

  return (
    <article className='product-card'>
      <Link href={`/products/${slug}`}>
        <a>
          <h3>{name}</h3>
          <div className='product-card-img-container'>
            <div className='product-card-img'>
              {images && (
                <Image
                  alt={name ?? "Product image"}
                  src={placeholderImage}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center center'
                  priority
                />
              )}
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default ProductCard;
