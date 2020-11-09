const data = require('./../data/winners.json');

export default function WinnerList() {
  const list = data.winners.map((w) => (
    <tr>
      <td className="p-3">{w.country}</td>
      <td className="p-3">{w.year}</td>
    </tr>
  ));

  const table = (
    <table className="max-w-md mx-auto">
      <thead>
        <tr>
          <th className="p-3">Team</th>
          <th className="p-3">Year</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
  return table;
}
