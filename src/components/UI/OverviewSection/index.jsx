import { Container } from '@mui/material';
import dynamic from 'next/dynamic';
const CTridi = dynamic(() => import('../Tridi'), {ssr: false})

import ModelsList from './ModelsList';
import ConfigList from './ConfigList';
import { models, configs } from './mockData'

import cls from "./OverviewSection.module.scss";

const OverviewSection = () => {
    const images = Array.from(new Array(75)).map((_, index) => `https://fastly-production.24c.in/webin/360/output_${index+1}.jpeg`)

    return (
        <section id="short-review">
            <Container className={cls.section}>
                <h2 className={cls.section__title}>Краткий обзор серии N.</h2>
                <p className={cls.section__subtitle}>Серия N может быть сконфигурирована практически в соответствии с любымы потребностямы, которые у вас могут возникнуть</p>
                <ModelsList list={models} />

                <div className={cls.section__modelInfo}>
                    <div className={cls.section__modelInfo__imgWrapper}>
                        <CTridi 
                        images={images}
                        />
                    </div>
                    <ConfigList list={configs} />
                </div>
            </Container>
        </section>
    );
}

export default OverviewSection;
