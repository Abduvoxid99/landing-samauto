import ImageCard from "../ImageCard";
import cls from "./CardItem.module.scss";
import { useState } from "react";

const InformationCardItem = ({ index, cardInfo }) => {
  const { category, title, list = [], image, imageContent } = cardInfo;

  const [selectedItem, setSeclectedItem] = useState(list?.length && list[0].id);

  return (
    <div className={`${cls.card} ${index % 2 ? "" : cls.card__reverse}`}>
      <div className={cls.card__info}>
        <span className={cls.card__info__ctg}>{category}</span>
        <h3 className={cls.card__info__title}>{title}</h3>
        <ul className={cls.card__info__list}>
          {list?.length > 0 &&
            list?.map((item) => (
              <li key={item.id}>
                <button
                  className={`${cls.card__info__listItem} ${selectedItem === item.id ? cls.item__active : ""}`}
                  onClick={() => setSeclectedItem(item.id)}
                >
                  {item.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div className={cls.card__image}>
        <ImageCard text={imageContent} image={image} />
      </div>
    </div>
  );
};

export default InformationCardItem;
