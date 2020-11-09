const data = require('../data/winners.json');
import React from 'react';

const WinnerList = ({ sortByYear, data }) => {
  let winners = data.winners.slice();

  if (sortByYear) {
    winners = winners.sort((a, b) => {
      return parseInt(a.year, 10) - parseInt(b.year, 10);
    });
  }

  const list = winners.map((w, i) => (
    <tr key={i}>
      <td className="fifa-table-body-cell lg:p-4 xl:p-8">{w.country}</td>
      <td className="fifa-table-body-cell lg:p-4 body-year xl:p-8">{w.year}</td>
    </tr>
  ));
  return <tbody>{list}</tbody>;
};

export default function WinnerTable() {
  const [isSortByYear, setIsSortByYear] = React.useState(false);
  const toggleSort = () => {
    setIsSortByYear((v) => !v);
  };

  const table = (
    <table className="winners-table">
      <thead>
        <tr>
          <th className="fifa-table-header-cell lg:p-6">Team</th>
          <th className="fifa-table-header-cell lg:p-6">
            <a href="#" onClick={toggleSort} className="underline">
              Year{' '}
              {isSortByYear ? (
                <span dangerouslySetInnerHTML={{ __html: '&#9651;' }} />
              ) : (
                <span dangerouslySetInnerHTML={{ __html: '&#9661;' }} />
              )}
            </a>
          </th>
        </tr>
      </thead>

      <WinnerList data={data} sortByYear={isSortByYear} />
    </table>
  );
  return table;
}
