
export default function Home() {
  return (
    <section className="container mt-4">
      <div className="container mt-4  text-center">
        <h1 className="text-4xl text-slate-800">Rock Paper Scissors</h1>
        <span className="text-sm text-black">hello and welcome to my game please enter your username to play or check out the leaderboard</span>
      </div>
      <div className="text-black flex justify-evenly mt-4">
        <div className="py-2">
          <h2 className="text-center text-2xl my-2">Enter your username</h2>
          <input type="text" name="username" className="p-2 border border-amber-500 rounded-lg" placeholder="Username"></input>
        </div>
        <div className="py-2">
          <h2 className="text-center text-2xl my-2">Leaderboard</h2>
          <table className=" text-center table-auto">
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
              <tr className="odd:bg-neutral-300 even:bg-neutral-100">
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">7</td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">2.33</td>
              </tr>
              <tr className="odd:bg-neutral-300 even:bg-neutral-100">
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">7</td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">2.33</td>
              </tr>
              <tr className="odd:bg-neutral-300 even:bg-neutral-100">
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">7</td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">2.33</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
