import styles from './GridItem.module.css';
import UpIcon from '../../assets/up.png';
import DownIcon from '../../assets/down.png';

const GridItem = ({data, imcValue=null}) => {
  return (
    <div className={styles.main} style={{ backgroundColor:data.color }}>
      <div className={styles.gridIcon}>
        <img src={data.icon === 'up' ? UpIcon : DownIcon} alt="" width={30} />
      </div>
      <div className={styles.gridTitle}>{data.title}</div>

      {imcValue &&
        <div className={styles.imcValue}>Seu IMC é de {imcValue}kg/m²</div>
      }
      
      <div className={styles.gridInfo}>
        <>
          IMC entre {data.imc[0]} e {data.imc[1] !== Infinity ?data.imc[1] : '99+'}
        </>
      </div>
    </div>
  )
}


export default GridItem;