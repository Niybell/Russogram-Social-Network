import { Field } from "redux-form";
import styles from "./SearchForm.module.css";
import { maxLenght } from "../../../../Utils/Validators/index";
import search from "../../../../Assets/images/search.png";

const maxLenght50 = maxLenght(50);
const SearchForm = (props) => {
  return (
    <form className={styles.searchForm} onSubmit={props.handleSubmit}>
      <Field
        component="input"
        placeholder="Поиск"
        className={styles.searchField}
        validate={[maxLenght50]}
        maxLength="50"
        name="term"
      ></Field>
      <button className={styles.searchButton}>
        <img className={styles.searchIco} src={search} alt="search" />
      </button>
    </form>
  );
};
export default SearchForm;
