import React, { useState } from "react";

function Compare({ comparisonDone, setComparisonDone }) {
  const [items, setItems] = useState([
    { position: 1, name: "Item1", score: 0 },
    { position: 2, name: "Item2", score: 0 },
    { position: 3, name: "Item3", score: 0 },
    { position: 4, name: "Item4", score: 0 },
    { position: 5, name: "Item5", score: 0 },
    { position: 6, name: "Item6", score: 0 },
  ]);
  const [compareIndex1, setCompareIndex1] = useState(0);
  const [compareIndex2, setCompareIndex2] = useState(1);

  const [item1Value, setItem1Value] = useState("");
  const [item2Value, setItem2Value] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setItem1Value("");
    setItem2Value("");

    const form = event.target;
    const item1Value = form.item1.value;
    const item2Value = form.item2.value;

    let newItems = [...items];
    if (item1Value > item2Value) {
      newItems[compareIndex1].score += 1;
    } else {
      newItems[compareIndex2].score += 1;
    }
    newItems.sort((a, b) => b.score - a.score);
    setItems(newItems);
    if (compareIndex2 < items.length - 1) {
      setCompareIndex2(compareIndex2 + 1);
    } else {
      setCompareIndex1(compareIndex1 + 1);
      setCompareIndex2(compareIndex1 + 2);
    }

    if (compareIndex1 === items.length - 1) {
      setComparisonDone(true);
    }
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center">
      <div className="w-full text-center text-3xl font-medium mb-6">
        GRM DIGITAL
      </div>
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.position} className={"text-gray-700"}>
                <td className="border px-4 py-2">{item.position}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full text-center mt-6">
        {!comparisonDone &&
        compareIndex1 < items.length &&
        compareIndex2 < items.length ? (
          <div className="flex">
            <div className="w-full text-center">
              <label className="block font-medium text-2xl text-gray-800 mb-2">
                {items[compareIndex1].name}
              </label>
            </div>
            <div className="w-full text-center">
              <label className="block font-medium text-2xl text-gray-800 mb-2">
                {items[compareIndex2].name}
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <div className="w-full text-center mt-6">
        {!comparisonDone &&
        compareIndex1 < items.length &&
        compareIndex2 < items.length ? (
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="w-full">
                <input
                  type="number"
                  name="item1"
                  required
                  className="bg-white rounded-lg p-2 w-full text-xl text-gray-800"
                  value={item1Value}
                  onChange={(e) => setItem1Value(e.target.value)}
                />
              </div>
              <div className="w-full">
                <input
                  type="number"
                  name="item2"
                  required
                  className="bg-white rounded-lg p-2 w-full text-xl text-gray-800"
                  value={item2Value}
                  onChange={(e) => setItem2Value(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-green-600 text-xl"
            >
              Compare
            </button>
          </form>
        ) : (
          <div className="text-green-500 text-xl mt-4">Comparison Done</div>
        )}
      </div>
    </div>
  );
}

export default Compare;
