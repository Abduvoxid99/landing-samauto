import useTranslation from "next-translate/useTranslation";
import { Container } from "@mui/material";
import cls from "./Dealers.module.scss";
import SelectRegion from "./SelectRegion";
import Regions from "./Regions";
import { Btns, regionsData } from "./SelectRegion/data";
import { useState } from "react";

const Dealers = () => {
  const { t } = useTranslation("common");
  const [regions, setRegions] = useState(regionsData);
  const [region, setRegion] = useState("Андижанская область");

  return (
    <section className={cls.root} id="dealers">
      <Container className={cls.container}>
        <div className={cls.first__row}>
          <h2>Пытаетесь найти что-то определенное?</h2>
          <p>
            Свяжитесь с одним из наших отделов продаж. Они помогут вам найти
            точную спецификацию.
          </p>
        </div>
        <div className={cls.second__row}>
          <SelectRegion
            regions={regions}
            setRegions={setRegions}
            setRegion={setRegion}
          />
          <Regions region={region} />
        </div>
      </Container>
    </section>
  );
};

export default Dealers;
