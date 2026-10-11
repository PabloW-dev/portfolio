


export default function TableCard({ columns, rows, selected }) {




  return (
    <table className="table-card">
      <thead>
        <tr>
          <th></th>

          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row[0]}
          className={selected === rowIndex ? "selected" : ""}
          >
            <th>{row[0]}</th>

            {row.slice(1).map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
