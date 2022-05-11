import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import GridItem from './components/GridItem';
import { levels, calculateImc } from './helpers/imc';

import LeftArrow from './assets/leftarrow.png';

function App() {

  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [calc, setCalc] = useState(null);

  const handleCalculate = () => {
    if(heightField !== 0 && weightField !== 0) {
      setCalc(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos");
    }
  }

  const handleBackButton = () => {
    setCalc(null);
    setHeightField(0);
    setWeightField(0);
  }
  
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} className="logo" alt="logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e=>setHeightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder='Digite o seu peso. Ex: 75.3 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e=>setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculate}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!calc &&
          <div className={styles.grid}>
            {levels.map((item, key) => <GridItem data={item} key={key} />)}
          </div>
          }
          {calc &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={LeftArrow} alt="" width={50} />
              </div>
              <GridItem data={calc.category} imcValue={calc.imc} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
