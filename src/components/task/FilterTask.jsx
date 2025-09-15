const FilterTask = ({ visibility, handleVisibility }) => {
  return (
    <div>
      <button type="button" onClick={() => handleVisibility("All")}>
        All
      </button>
      <button type="button" onClick={() => handleVisibility("Incomplete")}>
        Incomplete
      </button>
      <button type="button" onClick={() => handleVisibility("Complete")}>
        Complete
      </button>
      <h1> Show Tasks : {visibility}</h1>
    </div>
  );
};
export default FilterTask;
