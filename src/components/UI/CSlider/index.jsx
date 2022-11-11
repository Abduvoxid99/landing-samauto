import Slider, { SliderThumb } from '@mui/material/Slider';
import { withStyles } from '@mui/styles';
import { SliderArrows } from '../Icons';

function AirbnbThumbComponent({ children, ...other }) {
    return (
        <SliderThumb {...other}>
            <span
                style={{
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {children}
                <SliderArrows />
            </span>
        </SliderThumb>
    );
}

const CustomSlider = withStyles({
    root: {
        color: 'black',
        height: 6,
    },
    thumb: {
        height: 58,
        width: 58,
        backgroundColor: 'white',
        border: '5px solid currentColor',
        '&:focus, &:hover, &:active, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
    },
    active: {
        boxShadow: 'none'
    },
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        border: 'none',
        height: 6,
        borderRadius: 3,
    },
    rail: {
        opacity: 1,
        height: 6,
        borderRadius: 3,
    },
})(Slider);

const CSlider = (props) => {
    return (
        <div style={{ padding: '15px 0' }}>
            <CustomSlider
                {...props}
                components={{ Thumb: AirbnbThumbComponent }}
            />
        </div>
    );
}

export default CSlider;
