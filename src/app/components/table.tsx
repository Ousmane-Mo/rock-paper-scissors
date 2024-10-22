import React from 'react';

export interface Player {
    id: number;
    username: string;
    games: number;
    win: number;
    loss: number;
    ratio: number;
}
interface TableProps {
    players: Player[];
  }
const Table: React.FC<TableProps> = ({players}) => {
    return (
        <table className="my-6  w-3/4 text-center table-auto">
            <thead className="text-sm bg-slate-700 text-amber-500">
              <tr>
                <th scope="col" className="px-6 py-3">Username</th>
                <th scope="col" className="px-6 py-3">Games</th>
                <th scope="col" className="px-6 py-3">Win</th>
                <th scope="col" className="px-6 py-3">Loss</th>
                <th scope="col" className="px-6 py-3">Ratio</th>
              </tr>
            </thead>
            <tbody className="bg-neutral-100 border-b border-slate-800">
              {players.map(player => (
          <tr className="odd:bg-neutral-300 even:bg-neutral-100" key={player.id}>
            <th scope="row" className="px-6 py-4">{player.username}</th>
            <td className="px-6 py-4">{player.games}</td>
            <td className="px-6 py-4">{player.win}</td>
            <td className="px-6 py-4">{player.loss}</td>
            <td className="px-6 py-4">{player.ratio}</td>
          </tr>
        ))}
            </tbody>
          </table>
    );
}

export default Table;