const Filter = ({ filter, onFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filter;
