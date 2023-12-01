import React, { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/department')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));

  }, [])
  return (
    <div style={{ padding: "50px" }}>
      <table>
        <thead>
          <th>Dname</th>
          <th>Dnumber</th>
          <th>Mgr_ssn</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.Dname}</td>
              <td>{d.Dnumber}</td>
              <td>{d.Mgr_ssn}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App