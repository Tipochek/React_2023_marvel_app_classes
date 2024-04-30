import { snakes, arrows } from "./move";

const Field = (props) => {
    const curPos = props.currPos;
    const numbers = Array.from({length: 72}, (_, i) => i + 1);
    const cells =  numbers.map((el, i) => {
        const snakeClass = el in snakes ? ' snake' : '';
        const arrowClass = el in arrows ? ' arrow' : '';

        return <div key={i} className={`cell${snakeClass}${arrowClass}${el === curPos ? ' active' : ''}`}>
            {el}
        </div>
    })

    return (
        <>
            <div className="cell-wrapper">
                <div className="cells">
                    {cells}
                </div>
            </div>
        </>
    )
}

export default Field;