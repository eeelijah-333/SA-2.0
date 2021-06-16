import styles from './stockls.css'
import { Link } from "react-router-dom";

const Stock = ({name,
    symbol,
    price,
    open,
    close,
    high,
    low,
    marketcap,
    volume,
    pe,
    logo}) => {
    return (
        <Link href='/ticker/[symbol]' as = {`/ticker/${symbol}`}>
            <a>
        <div className={styles.stock_container}>
            <div className={styles.stock_row}>
                <div className={styles.stock}>
                    <img src={logo} alt ={symbol}
                    className={styles.stock_img}/>
                    <h1 className={styles.stock_h1}>{name}</h1>
                    <p className={styles.stock_symbol}>{symbol}</p>
                </div>
                <div className={styles.stock_simple_data}>
                    <p className={styles.stock_price}>${price}</p>
                </div>
            </div>
        </div>
        </a>
        </Link>
    );
};

export default Stock
// stock button detail 