import Navigation from "../components/Navigation";

const About = () => {
    return (<><Navigation />
        <div class="alert alert-success"><p>Vous pouvez maintenant exécuter npm start dans le dossier du projet et ouvrir http://localhost:3000 dans votre navigateur, ce qui devrait vous afficher un plateau de morpion vide.

            Nous vous conseillons de suivre ces instructions pour configurer la coloration syntaxique de votre éditeur.
            À l’aide, je suis bloqué·e !

            Si vous vous retrouvez bloqué·e, jetez un coup d’œil aux ressources communautaires de support. Le chat Reactiflux, notamment, est super utile pour obtenir de l’aide rapidement. Si vous ne recevez pas de réponse, ou si elle ne vous débloque pas, merci de nous le signaler par une issue dans GitHub, et nous ferons de notre mieux pour vous aider.</p></div> </>);
}

export default About;