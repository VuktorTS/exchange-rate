import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';

export const ExchangeForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.currency;
    console.log('value: ', value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        title="Request format 15 USD in UAH"
        className={styles.input}
        placeholder="15 USD in UAH"
        name="currency"
        required
      />
    </form>
  );
};
