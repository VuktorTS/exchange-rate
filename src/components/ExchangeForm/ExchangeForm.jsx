import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from 'reduxState/currency/operation';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.currency;
    const [amount, from, , to] = value.split(' ');

    const data = {
      to,
      from,
      amount,
    };
    dispatch(fetchExchangeCurrency(data));
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
