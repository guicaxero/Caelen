import React from 'react';
import './Bonds.css';

const Bonds = () => {
  return (
    <section className="bonds-container">
      <h2>🔗 Laços de Caelen</h2>

      <div className="bond-section">
        <h3>👩‍👦‍👦 Pais</h3>
        <div className="bond-card">
          <strong>Thalindra Thalanor</strong>
          <p>
            Uma alta elfa de Evereska, sábia, exigente e de alma refinada. Ela acredita que a linhagem mágica da família é um dom sagrado, e que Silverymoon é o berço cultural necessário para honrá-lo. Sua rigidez amorosa moldou Caelen.
          </p>
        </div>
        <div className="bond-card">
          <strong>Darian Veltor</strong>
          <p>
            Humano historiador de Baldur’s Gate. Apaixonado por tudo que envolvia o mundo élfico e o arcano. Ele viu em Caelen a personificação da união perfeita entre os mundos.
          </p>
        </div>
      </div>

      <div className="bond-section">
        <h3>🧙 Mentor</h3>
        <div className="bond-card">
          <strong>Master Aelthar Wynsalor</strong>
          <p>
            Mentor da escola de abjuração. Um arquimago de renome, elfo ancestral oriundo da antiga corte de Myth Drannor. Respeitado, e defensor ferrenho do uso ético da magia.
          </p>
        </div>
      </div>

      <div className="bond-section">
        <h3>🧊 Rival Acadêmico</h3>
        <div className="bond-card">
          <strong>Sethor Malbrayne</strong>
          <p>
            Meio-elfo nobre de Waterdeep. Frio, calculista e arrogante. Invejoso do talento de Caelen, sabotou sua reputação ao plantar um tomo proibido em sua bolsa. Seu sorriso cínico ainda assombra os corredores da universidade.
          </p>
        </div>
      </div>

      <div className="bond-section">
        <h3>💕 Amada & Aliada</h3>
        <div className="bond-card">
          <strong>Nymeria Elorwyn</strong>
          <p>
            Meio-elfa do Círculo de Encantamento. Curiosa, empática e ousada. Ela acreditou em Caelen desde o início e foi essencial na investigação que revelou o plano de Sethor. Desvendaram tudo juntos perante o Conselho Superior da Universidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonds;
