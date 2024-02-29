import { Link } from 'react-router-dom';

function Page404() {
    return (
        <>
            <section className="container">
                <div className="content-404">
                    <h2>Oups, une erreur 404 !</h2>
                    <p>Et si on retournait à l'accueil ? </p>
                    <div className="button"><Link to="/">
                        <img src="assets/accueil.png" alt="niche de chien" />
                    </Link>
                    </div>
                </div>
                <div className="main">
                    <div className="dog">
                        <div className="dog__paws">
                            <div className="dog__bl-leg leg">
                                <div className="dog__bl-paw paw"></div>
                                <div className="dog__bl-top top"></div>
                            </div>
                            <div className="dog__fl-leg leg">
                                <div className="dog__fl-paw paw"></div>
                                <div className="dog__fl-top top"></div>
                            </div>
                            <div className="dog__fr-leg leg">
                                <div className="dog__fr-paw paw"></div>
                                <div className="dog__fr-top top"></div>
                            </div>
                        </div>
                        <div className="dog__body">
                            <div className="dog__tail"></div>
                        </div>
                        <div className="dog__head">
                            <div className="dog__snout">
                                <div className="dog__nose"></div>
                                <div className="dog__eyes">
                                    <div className="dog__eye-l"></div>
                                    <div className="dog__eye-r"></div>
                                </div>
                            </div>
                        </div>
                        <div className="dog__head-c">
                            <div className="dog__ear-l"></div>
                            <div className="dog__ear-r"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Page404;