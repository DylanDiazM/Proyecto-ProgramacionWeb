import { useState } from "react";
import './App.css';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};



function App() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const stars = Array(5).fill(0)
    const handleClick = value => {
        setCurrentValue(value)
    }
    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    return (
        <div style={styles.container}>
            <h2> ¡GRACIAS PRO TU ORDEN! </h2>
            <h1>CALIFICANOS</h1>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
            <textarea
                placeholder="Cuentanos tu experiencia"
                style={styles.textarea}
            />

            <button
                style={styles.button}
            >
                Submit
            </button>

        </div>
    );
};







export default App;
