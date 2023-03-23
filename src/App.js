import { useState } from "react";



function App() {

  const [criteria, setCriteria] = useState("");
  const [criteriaList, setCriteriaList] = useState([]);

  const addCriteria = () => {
    if(criteria !== ""){
      setCriteriaList([...criteriaList, criteria]);
      setCriteria("");
    }
};
const deleteCriteria = (text) => {
  const newCriteriaList = criteriaList.filter((criteria) => {
    return criteria !== text;
  });
  setCriteriaList(newCriteriaList)
}

  return (
    <div className="App">
      {criteriaList?.length > 0 ? (
<ul className="criteria-list">
  {criteriaList.map((entry,index) => (
    <div className="criteria" key={index}>
      <li ><span>{entry}</span>
      <button 
      className="delete-button"
      onClick={() => {
        deleteCriteria(entry)
      }}
      >Delete</button>
      </li>
    </div>
  ))}
</ul>
):(
  <div className="empty">
    <p>No criterias found</p>
  </div>
)}
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

    </div>
  );
}

export default App;
