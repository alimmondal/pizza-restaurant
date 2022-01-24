import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>The Best Pizza in the Town</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          accusamus, harum aliquam similique ratione et? Aliquam sint
          accusantium culpa, ad, officiis quaerat temporibus sit ab quisquam
          libero molestiae rerum! Libero?
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) =>(
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}
          
        </div>
      </div>
    );
};

export default PizzaList;