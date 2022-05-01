export const Statistics = ({ title, data }) => {
  const renderStatistics = () =>
    data.map(({ id, label, percentage }) => (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    ));
  
  return <div className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
       {data && renderStatistics()}
      </ul>
    </div>
}

// export const Statistics = ({ label, percentage }) => {
//   return (
//     <div className="statistics">
//       <h2 className="title">Upload stats</h2>

//       <ul className="stat-list">
       
//       </ul>
//     </div>
//   );
// };
