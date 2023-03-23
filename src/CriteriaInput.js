const CriteriaInput = ({criteria, setCriteria, addCriteria}) => {
    return (
        <div className="input-wrapper">
        <input
        type="text"
        name="criteria"
        value={criteria}
        placeholder="Create a new criteria"
        onChange={(e) => {
          setCriteria(e.target.value);
        }}
        />
      <button className="add-button" onClick={addCriteria}>Add</button>
      </div>

    )
}

export default CriteriaInput;