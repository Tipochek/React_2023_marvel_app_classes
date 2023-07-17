function InfoBlock (props) {
    const {id, name, description, thumbnail} = props.data;

    return (
        <div className="info-block">
            <img
                width={60}
                height={60}
                src={thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : ''}
                alt="some picture" />
            <h2>{name ? name : 'No Name'}</h2>
            <strong>{id ? id : 'No ID'}</strong>
            <p>{description ? description : 'No Description'}</p>
        </div>
    )
}

export default InfoBlock;