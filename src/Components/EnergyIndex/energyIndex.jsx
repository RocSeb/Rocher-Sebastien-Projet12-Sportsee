import React from "react";
import PropTypes from 'prop-types'


const EnergyIndex = ({value, dataLabel}) => {
    console.log(value, "<==data")
    const nutrients = [
            {   
                id: 'calorieCount',
                label: "Calories",
                value: value,
                units: "kCal",
                icon: "/Fire.png",
                background: "bg-red"
            },
            {
                id: 'proteinCount',
                label: "Proteines",
                value: value,
                units: "g",
                icon: "/Proteines.png",
                background: "bg-blue"
            },
            {
                id: 'carbohydrateCount',
                label: "Glucides",
                value: value,
                units: "g",
                icon: "/Glucides.png",
                background: "bg-yellow"
            },
            {
                id: 'lipidCount',
                label: "Lipides",
                value: value,
                units: "g",
                icon: "/Lipides.png",
                background: "bg-purple"
            }
    ];
    
    return nutrients.map(nutrient => 
        nutrient.id === dataLabel ? 
        (
            <div className='nutrient-content'>
                <div className={`icon-container ${nutrient.background}`}>
                    <img src={nutrient.icon} />
                </div>
                <div className='nutrient-info'>
                    <h1>{nutrient.value}{nutrient.units}</h1>
                    <span className='font-grey'>{nutrient.label}</span>
                </div>
            </div>
        )
        : null
    )
}


EnergyIndex.propTypes =
{
    dataLabel: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}

export default EnergyIndex;