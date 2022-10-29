import React from "react";
import PropTypes from 'prop-types'

/**
 * Display EnergyIndex component
 * @function EnergyIndex
 * @param {string} props.dataLabel
 * @param {number} props.value
 * @param {number} userId
 * @returns {Reactnode} jsx injected in DOM
 */
const EnergyIndex = ({value, dataLabel}) => {
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
            <div className='nutrient-content' key={value}>
                <div className={`icon-container ${nutrient.background}`}>
                    <img src={nutrient.icon} />
                </div>
                <div className='nutrient-info'>
                    <span className="nutrient-name">{nutrient.value}{nutrient.units}</span>
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