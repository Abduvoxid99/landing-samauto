import ConstructionCardList from "./CardList";
import { cardsData } from "./cardsData";

import cls from "./constructionSection.module.scss";

const ConstructionSection = () => {
  return (
    <section className={cls.section} id="construction">
      <h2 className={cls.section__title}>Конструкция</h2>
      <p className={cls.section__subtitle}>
        Прочный корпус и шасси - гарантия качества
      </p>
      <ConstructionCardList list={cardsData} />
    </section>
  );
};

export default ConstructionSection;
