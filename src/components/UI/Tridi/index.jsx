import { useRef } from "react";
import Tridi from "react-tridi";
import 'react-tridi/dist/index.css'
import CSlider from "../CSlider";

import cls from './Tridi.module.scss'

const CTridy = ({ images = [] }) => {
    const tridiRef = useRef(null);
    const prevCounter = useRef(1)
    const imagesCount = images.length
    const sliderMaxValue = Math.max(100, imagesCount)
    const sliderStep = Math.min(1, sliderMaxValue/imagesCount)

    const handleChange = (_, newValue) => {
        let newData = Math.round((newValue / (sliderMaxValue / imagesCount))) || 1
        if(newData === prevCounter.current) return
        else {
            const difference = Math.abs(prevCounter.current - newData)
            for(let i = 0; i < difference; i++) {
                prevCounter.current > newData ? tridiRef.current.prev() : tridiRef.current.next()
            }
            prevCounter.current = newData
        }
    }

    return (
        <div className={cls.tridi}>
            <div className={cls.tridi__wrapper}>
                <Tridi
                    className={cls.tridi__container}
                    ref={tridiRef}
                    images={images}
                    count={imagesCount}
                    touche={false}
                    draggable={false}
                />
            </div>
            <CSlider 
                className={cls.tridi__slider} 
                onChange={handleChange}
                max={sliderMaxValue}
                step={sliderStep}
            />
        </div>
    );
}


export default CTridy