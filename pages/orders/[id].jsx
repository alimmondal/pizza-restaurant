import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>123456789</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Elton st. 2121-23 LA</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={styles.status}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
          </div>
          <span>Payment</span>
          <div className={styles.checkedIcon}>
            <Image src="/img/checked.png" width={20} height={20} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.68.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.00
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;