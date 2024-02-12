import './Banner.scss'

function Banner(props) {
    return (
        <div className='background'>
            <h1> {props.Firsttitle}</h1>
            <h2>{props.Secondtitle}</h2>
        </div>
    )
}
export default Banner;