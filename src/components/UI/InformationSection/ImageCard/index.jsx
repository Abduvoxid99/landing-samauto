import Image from "next/image";

import cls from "./ImageCard.module.scss";

const ImageCard = ({ image = "", text = "" }) => {
  return (
    <figure className={cls.card}>
      <div className={cls.card__img}>
        <Image src={image} layout="fill" objectFit="cover" alt={image} />
      </div>
      <figcaption className={cls.card__info}>{text}</figcaption>
    </figure>
  );
};

export default ImageCard;
