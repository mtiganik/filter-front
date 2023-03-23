const CriteriaList = ({list,remove}) => {

    
    return(
        <>
            {list?.length > 0 ? (
                <table className="criteria-list">
                    {list.map((entry, index) => (
                        <tr className="criteria" key={index}>
                            <td>{entry}</td>
                                <td><button
                                    className="delete-button"
                                    onClick={() => {
                                        remove(entry)
                                    }}
                                >Delete</button></td>
                        </tr>
                    ))}

                        
                    </table>
            ) : (
                <div className="empty">
                    <p>No criterias found</p>
                </div>
            )}
        </>
    )
}

export default CriteriaList;