import data from "../data/data" ;
import TableHeader  from "./TableHeader" ;
import TableRow from "./TableRow";
function PricesTable() {
  return (
    <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((key) => {
                        return <TableHeader key={key}>
                                Currency {key}
                             </TableHeader>
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    data.map((dataElm) => {
                        return <TableRow
                            {...dataElm}
                           
                            key={dataElm.name}
                        />
                    })
                }
            </tbody>
        </table>
  )
}

export default PricesTable