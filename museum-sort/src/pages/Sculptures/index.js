import React, { useState } from 'react';
import { items } from '../../data/items.js';
import { vehicles } from '../../data/vehicles.js';
import { knapsack } from '../../dataStructure/knapsack.js';
import './styles.css';

const Sculptures = (props) => {
  const [targets, setTargets] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const vehicleId = props.match.params.id;

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(price);
  };

  return (
    <div id="sculptures-container">
      <header id="sculptures-header">
        <div id="sculptures-titles-container">
          <h1 id="sculptures-title">Itens do Museu</h1>

          <div id="sculptures-quantity-container">
            <h2 id="sculptures-subtitle">Total:</h2>
            <h2 id="sculptures-quantity-items">{items.length}</h2>
          </div>
        </div>

        <div id="sculptures-calculate-container">
          <button
            id="sculptures-button"
            onClick={() => {
              const response = knapsack(items, vehicles[vehicleId - 1].space);
              setTargets(response.subset);
              setTotalValue(response.maxValue);
              console.log(response);
            }}
          >
            <h1>Calcular</h1>
          </button>

          <div id="sculptures-result-value-container">
            <h1 id="sculptures-result-title">Melhor Valor:</h1>
            <h2 id="sculptures-result-value">{formatPrice(totalValue)}</h2>
          </div>

          <div id="sculptures-result-quantity-container">
            <h2 id="sculptures-result-subtitle">Quantidade de Itens:</h2>
            <h2 id="sculptures-result-quantity">{targets.length}</h2>
          </div>
        </div>
      </header>

      <section id="sculptures-items-container">
        {items.map((item) => (
          <div
            id={
              targets.includes(item)
                ? 'sculptures-items-card-target'
                : 'sculptures-items-card'
            }
            key={item.id}
          >
            <h2>{item.name}</h2>
            <p>Valor: {formatPrice(item.value)}</p>

            <div id="sculptures-image-container">
              <img
                id="sculptures-image"
                src={`/artifacts/${item.image}`}
                alt="artifact"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Sculptures;
