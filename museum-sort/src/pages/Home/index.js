import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Thief from '../../assets/thiefs/thief.png';
import { vehicles } from '../../data/vehicles.js';
import './styles.css';

const Home = () => {
  const [vehicle, setVehicle] = useState(0);

  return (
    <div id="home-container">
      <section id="home-description">
        <h1 id="home-title">Assault Plan</h1>

        <p id="home-text">
          Após anos planejando um assalto a um dos museus mais seguros
          <br /> do mundo, chegou a hora de decidir uma etapa importante:
          <br />
          qual veículo de fuga utilizar para transportar os itens valiosos?
        </p>
      </section>

      <section id="home-selection">
        <div id="home-thief-container">
          <img id="home-thief-image" src={Thief} alt="thief" />
        </div>

        <div id="select-vehicle-box">
          <select
            value={vehicle}
            onChange={(event) => setVehicle(event.target.value)}
          >
            <>
              <option>Selecione</option>
              {vehicles.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} - {item.space} m3
                </option>
              ))}
            </>
          </select>

          <Link
            id="home-button"
            to={vehicle === 0 ? '' : `/sculptures/${vehicle}`}
          >
            <h1>Avançar</h1>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
