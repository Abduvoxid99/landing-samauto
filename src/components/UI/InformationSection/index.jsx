import { Container } from "@mui/material";

import InformationCardItem from "./CardItem";
import { mockData } from "./mockData";

import cls from "./InformationSection.module.scss";

const InformationSection = () => {
    return (
        <section className={cls.section} id="advantage">
            <Container className={cls.container}>
                {
                    mockData.length > 0 && mockData.map((card, index) => (
                        <InformationCardItem
                            key={card.id}
                            index={index+1}
                            cardInfo={card}
                        />
                    ))
                }
            </Container>
        </section>
    );
}

export default InformationSection;
