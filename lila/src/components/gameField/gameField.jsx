import propTypes from 'prop-types';
import { snakes, arrows } from '../../game/info';

const classNames = require('classnames');

const Field = ({currentPosition}) => {
    const numbers = Array.from({ length: 72 }, (_, i) => i + 1);
    const cells = numbers.map((el, i) => {
        const allClassNames = classNames('cell', {
            snake: snakes.hasOwnProperty(el),
            arrow: arrows.hasOwnProperty(el),
            active: el === currentPosition
        });

        return (
            <div key={i} className={allClassNames}>
                {el}
            </div>
        );
    });

    return (
        <div className="cell-wrapper">
            <div className="cells">{cells}</div>
        </div>
    );
};

Field.propTypes = {
    currentPosition: propTypes.number
}

export default Field;