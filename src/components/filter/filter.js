import './filter.css';

function Filter({ filter, setActiveFilter }) {
  return (
    <button
      type="button"
      className={filter.isActive ? 'selected' : ''}
      onClick={() => {
        setActiveFilter(filter.id);
      }}
    >
      {filter.label}
    </button>
  );
}

export default Filter;
