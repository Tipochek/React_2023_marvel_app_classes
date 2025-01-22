import { useReducer, useState } from 'react';
import { Container } from 'react-bootstrap';

function reducer (speed, action) {
    switch (action.type) {
        case 'slow':
            return speed = 100;
        case 'medium':
            return speed = 250;
        case 'fast':
            return speed = 500;
        case 'reset':
            return speed = 0;
        default:
            throw new Error();
    }
}

const Slider = () => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    const [speed, dispatch] = useReducer(reducer, 0);

    function changeSlide(i) {
        setSlide((slide) => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img
                    className="d-block w-100"
                    src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                    alt="slide"
                />
                <div className="text-center mt-5">
                    Active slide {slide}
                    <br />
                    {autoplay ? 'auto' : null}
                    <br />
                    Slider speed - {speed}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>
                        -1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>
                        +1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => setAutoplay(!autoplay)}>
                        toggle autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={(state) => {
                            state.slide = 0;
                            setSlide(0)
                            }}>
                        reset slider
                    </button>
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'slow'})}>
                        slow
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'medium'})}>
                        medium
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'fast'})}>
                        fast
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'reset'})}>
                        reset speed
                    </button>
                </div>
            </div>
        </Container>
    );
};

function App() {
    return <Slider />;
}

export default App;
