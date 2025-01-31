import Card from 'react-bootstrap/Card';

function Greetings() {
    const linkUrl = 'https://forms.gle/GNweenkjkeSQ4LLN8';

    return (
        <>
            <Card className='mb-4'>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Привіт! Дякую, що ти тут 🖤</h5>
                    <p className="card-text">Якщо в тебе є питання щодо самої гри, правил, формулювання запиту, відгуків - почитай, будь-ласка, про це за <a href={linkUrl}>посиланням</a> детальніше про гру або запитай нижче 🌿</p>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Чому може бути цікаво пограти в групі</h5>
                    <p className="card-text">Шлях, який проходить інша людина - унікальний! Але та інформація, інсайти, думки, які озвучує провідник і ділиться сам гравець - дуже часто є причиною власних осмислень. На грі люди збираються не дарма і щось там є і для тебе 🖤</p>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Тривалість непередбачувана 🖤</h5>
                    <p className="card-text">Орієнтовно для когось гра може тривати 3 години, для когось 5, а для когось 8. <br /> В ідеалі варто виділити цілий день. Якщо немає такої можливості - дограємо наступного разу (на ціну це не вплине).<br />Я рекомендую дограти 🌿</p>
                </div>
            </div>
        </>
    );
}

export default Greetings;
