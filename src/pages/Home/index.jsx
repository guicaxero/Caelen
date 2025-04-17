import React from 'react';
import './Home.css';  // Certifique-se de criar um arquivo CSS correspondente.

const Home = () => {
    return (
        <div className="home-container">
            <div className="description">
                <h1 className="name">Caelen Thalanor</h1>
                <img 
                    className="img-caelen"
                    src="/assets/Caelen.webp"
                    alt="Imagem de Caelen"
                />
                <div className="text">
                    <p className="intro">
                        Caelen Thalanor é um mago abjurador determinado, oriundo de uma linhagem nobre de elfos de Evereska. Filho de Thalindra, uma alta elfa, e Darian, um humano historiador, Caelen é um estudioso incansável, sempre em busca de novos conhecimentos mágicos.
                    </p>
                    <p className="details">
                        Sua trajetória, marcada por um incidente que quase destruiu sua carreira, o transformou em um homem mais cauteloso e focado no legado que deseja construir. Caelen é um defensor da verdade e da justiça, sempre disposto a proteger o que é mais importante, com um forte senso de honra.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;
