import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const CriteriaInput = ({criteria, setCriteria, addCriteria}) => {
    return (
        <div className="input-wrapper">
        <Select
        type="select"
        name="criteria"
        value={criteria}
        placeholder="Create a new criteria"
        onChange={(e) => {
          setCriteria(e.target.value);
        }}
        >
            <MenuItem value="Amount">Amount</MenuItem>
            <MenuItem value="Title">Title</MenuItem>
            <MenuItem value="Date">Date</MenuItem>
            </Select>
      <button className="add-button" onClick={addCriteria}>Add</button>
      </div>

    )
}

export default CriteriaInput;