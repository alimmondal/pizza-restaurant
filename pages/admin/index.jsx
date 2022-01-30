import Image from "next/image";
import styles from "../../styles/Admin.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.trTitle}>
              <td>
                  <Image src="/img/pizza.jpg" 
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="Pizza"
                  />
              </td>
              <td>PizzaId</td>
              <td>Title</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.item}></div>
    </div>
  );
};

export default index;
