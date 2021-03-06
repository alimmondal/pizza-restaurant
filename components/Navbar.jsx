import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>1860060068</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <a>
              <li className={styles.listItem}>Home</li>
            </a>
          </Link>
          <Link href="/shop">
            <a>
              <li className={styles.listItem}>Products</li>
            </a>
          </Link>
          <Link href="/admin" passHref>
            <a>
              <li className={styles.listItem}>Admin</li>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <Image src="/img/logo.png" alt="" width="160" height="69" />
            </a>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <a>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="30" height="30" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
