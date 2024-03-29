import { Product } from "@common/types/product";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}

const placeholderImage = "/product-image-placeholder.svg";

// This is not a functional component, so no need to use FC here
const ProductCard = ({ product, variant = "simple" }: Props) => {
  const { id, name, slug, images } = product;

  return (
    <article className='product-card'>
      <Link href={`/products/${slug}`}>
        <a>
          {variant === "slim" ? (
            <>
              <div className='product-card-marquee-title-container'>
                <div className='product-card-marquee-title'>
                  <p>{name}</p>
                </div>
              </div>
              <div className='product-card-img-container'>
                <div className='product-card-img'>
                  {images && (
                    <Image
                      alt={name ?? "Product image"}
                      src={images[0].url ?? placeholderImage}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center center'
                      priority
                    />
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <h4>{name}</h4>
              <div className='product-card-img-container'>
                <div className='product-card-img'>
                  {images && (
                    <Image
                      alt={name ?? "Product image"}
                      src={images[0].url ?? placeholderImage}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center center'
                      priority
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </a>
      </Link>
    </article>
  );
};

export default ProductCard;
