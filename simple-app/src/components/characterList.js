import InfoBlock from './infoBlock';

const renderItems = (data) =>
    data.map((el) => (
        <li key={el.id}>
            <InfoBlock data={el} />
        </li>
    ));

function CharacterList({ data }) {
    return <ul>{data ? renderItems(data) : 'No data'}</ul>;
}

export default CharacterList;
