import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css"

const PizzaCard = ({pizza}) => {
    return (
      <div className={styles.container}>
        <Link href={`/product/${pizza._id}`} passHref>
          <a>
            <Image src={pizza.img} alt="Pizza" width="300" height="200" />
          </a>
        </Link>
        <h1 className={styles.price}>{pizza.title}</h1>
        <span className={styles.price}>$ {pizza.prices[0]} </span>
        <p className={styles.desc}>{pizza.desc}</p>
      </div>
    );
};

export default PizzaCard;