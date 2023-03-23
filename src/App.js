import { useState } from "react";
import CriteriaInput from "./CriteriaInput";
import CriteriaList from "./CriteriaList";

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
      <CriteriaList list= {criteriaList} remove = {deleteCriteria}/>
      <CriteriaInput criteria={criteria} setCriteria={setCriteria} addCriteria={addCriteria} />
    </div>
  );
}

export default App;
