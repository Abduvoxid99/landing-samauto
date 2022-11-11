import useTranslation from "next-translate/useTranslation";
import cls from "./SelectRegion.module.scss";

const SelectRegion = ({
  regions = [],
  setRegions = () => {},
  setRegion = () => {},
}) => {
  const { t } = useTranslation("common");

  const handleRegion = (name) => {
    setRegions((prev) =>
      prev.map((elm) =>
        elm.name === name ? { ...elm, active: true } : { ...elm, active: false }
      )
    );
  };

  return (
    <div className={cls.card}>
      <h3>Выбрат регион дилера</h3>
      <div className={cls.regions}>
        {regions.map((item, index) => (
          <div
            onClick={() => {
              handleRegion(item.name);
              setRegion(item.name);
            }}
            key={item.name + "region" + index}
            className={`${cls.regions__item} ${
              item.active ? cls.regions__active__item : ""
            }`}
          >
            <p>
              {item.active && <span>&#x2022;</span>}
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRegion;
