import Image from "next/image";
import styles from "../styles/PizzaCard.module.css"

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza6.png" alt="Pizza" width="300" height="200" />
            <h1 className={styles.price}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    );
};

export default PizzaCard;