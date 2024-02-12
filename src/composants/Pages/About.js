
function About() {
    return (
        <section className="about-content">
            <img src="../../../about.png" alt="Pika tournée vers sa propiètaire Anaïs" />
            <div className="word">
                <p>Cette petite chienne rythme ma vie d'une belle musique : ses grognements joueurs quand on fait semblant de se battre,
                    le bruit de ses griffes sur le parquet qui me suivent ou que j'aille, ce frétillement de queue quand je rentre à la maison même après une demi heure d'absence.
                    <p>On s'est apprivoisée toute les deux. Victime de maltraitances pendant la première année de sa vie, sa confiance en moi fut mon plus beau cadeau.</p>

                </p>
            </div>
            <img className="adopt-img" src="../../../adoptez.png" alt="Dessin d'un garçon portant un carlin dans ses bras avec au dessus de sa tête écrit adopt don't shop" />
            <section className="links-and-img">
                <div className="links-content">
                    <p>
                        Ci-dessous les liens vers l'association Seconde Chance (qui regroupe des annonces de différents refuges), ainsi qu'Urgence Maltraitance Animal si vous souhaitez adopter un être dans le besoin, ou faire un don.
                        <p>Adoptez un animal est une responsabilité de tous les jours, ce n'est ni un meuble ni un jouet mais un être doté d'un caractère et d'une sensibilité.</p>
                    </p>
                    <ul>
                        <li><a href="https://www.secondechance.org/"> <strong> Seconde Chance </strong></a></li>
                        <li><a href="https://www.facebook.com/UrgenceMaltraitanceAnimale/?locale=fr_F">Facebook d'<strong>Urgence Maltraitance Animal</strong> 44</a></li>
                        <li><a href="https://urgencemaltraitanceanimale.fr/">Site officiel d'<strong>Urgence Maltraitance Animal</strong></a></li>
                    </ul>
                </div>
            </section>
        </section>
    )
}
export default About;