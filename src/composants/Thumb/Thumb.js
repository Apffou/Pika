import { Link } from 'react-router-dom';
import './Thumb.scss';
function Thumb(params) {


    const file_url = "/assets/" + params.years.thumb.picture;
    return (
        <>
            <Link to={'/years/' + params.years.id} >
                <div className='thumb'>
                    <img src={file_url} alt={params.years.thumb.alt} />
                    <h2 className=' highlight'>{params.years.thumb.name}</h2>

                </div>
            </Link>
        </>
    )
}
export default Thumb;