import styles from "./Input.module.css";

export default function Input({
  filterText,
  handleFilterTextChange,
  handleFilterSelectChange,
}) {
  return (
    <div className={styles.inputField}>
      <input
        type="text"
        value={filterText.value}
        onChange={handleFilterTextChange}
        placeholder="Enter Time or Date to filter"
        aria-label="Enter Time or Date to filter"
        className={styles.input}
        name="timestamp"
      />

      <div className={styles.selectContainer}>
        <span className={styles.range}>Select a temperature range:</span>
        <select
          value={filterText.select}
          onChange={handleFilterSelectChange}
          name="select"
        >
          <option value="all">All</option>
          <option value="frosty">Frosty: 20F or less</option>
          <option value="cold">Cold: 20F to 40F</option>
          <option value="cool">Cool: 40F to 60F</option>
          <option value="comfortable">Comfortable: 60F to 80F</option>
          <option value="hot">Hot: 80F to 100F</option>
          <option value="unbearable">Unbearable: 100F or greater</option>
        </select>
      </div>
    </div>
  );
}
