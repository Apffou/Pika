import years from '../../informations.json';
import Thumb from '../Thumb/Thumb.js';

function Home() {

    return (
        <>
            <section className='thumbs-content'>
                <div className='presentation'>
                    <h2>Bienvenue à tous les Dogs Lovers</h2>
                    <div className='presentation-paragraph'>
                        <p>Ce site est crée dans le cadre de ma formation de développeuse Front-end via Open Classroom. Il est développé avec le framework React basé sur les langages HTML, CSS et Javascript.</p>
                        <p>J'ai mis en avant Pika cette pôtite chienne qui m'accompagne depuis bientôt 9 ans. Vous trouverez ici quelques photos
                            de chaque année de sa vie depuis son adoption avec également des anecdotes et des conseils lorsque l'on adopte un chien.
                        </p>
                    </div>
                </div>
                {years.map((information) => <Thumb years={information} />)}
            </section>
        </>
    )

}

export default Home;