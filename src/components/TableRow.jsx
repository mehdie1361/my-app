function TableRow(props) {
    
    return (
    <tr>
        {Object.keys(props).map((key , i) => {
            return (
                <td key={key}>{i === 0 ? props[key].toUpperCase() : props
                    [key]} </td>
            );
        })}
        
    </tr>
    );
}

export default TableRow