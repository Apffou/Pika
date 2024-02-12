import './Bloc.scss';

function Bloc(props) {
    return (
        <div className='bloc-content'>
            <div className='title'>
                <h2>{props.title}</h2>
            </div>
            <div className="text">
                <h3>{props.titleH3}</h3>
                <p>{props.text} </p>
            </div>
        </div>
    )
}
export default Bloc;