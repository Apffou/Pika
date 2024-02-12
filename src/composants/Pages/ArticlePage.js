import data from '../../informations.json';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Bloc from '../Bloc/Bloc';

function ArticlePage() {

    const params = useParams();
    const years = data.find((element) => element.id === params.idyears);



    return (
        <section className='page-content'>
            <h2>{years.title}</h2>

            <div className='carouselAndparag'>
                <Carousel images={years.pictures} />
                <blockquote className='blockquote'>
                    <p>
                        {years.blockquote}
                    </p>
                    <span>{years.autor}</span>
                </blockquote>
            </div>

            <section className='bloc'>
                <Bloc title="Conseils" titleH3={years.titre} text={years.Conseil} />
                <Bloc title="Anecdotes" titleH3={years.titre} text={years.Anecdote} />
            </section>


        </section>
    );
}
export default ArticlePage;