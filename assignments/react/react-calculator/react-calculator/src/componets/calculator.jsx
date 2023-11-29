import "../app.css";
function addInput() {
  const output = document.getElementById("output");
  let answer;
  const numberA = Number(document.getElementById("number-a").value);
  const numberB = Number(document.getElementById("number-b").value);
  answer = Number(numberA + numberB);

  output.innerHTML = answer;
}

function subtractInput() {
  const output = document.getElementById("output");
  let answer;
  const numberA = Number(document.getElementById("number-a").value);
  const numberB = Number(document.getElementById("number-b").value);

  if (numberA.equals(null) || numberB == null) {
    answer = String("Error Missing Input");
  } else {
    answer = Number(numberA - numberB);
  }

  output.innerHTML = answer;
}
function Calculator() {
  return (
    <div
      id="style-border"
      className="border border-stone-800 bg-stone-800 text-center rounded-lg"
    >
      <section className="mt-4">
        <p id="style-calc-title">React Calculator</p>
      </section>
      <div>
        <h1 id="style-calc-subtext" className="mt-5">
          Number A
        </h1>
        <input type="number" id="number-a" className="mt-1 rounded-md" />
      </div>
      <div>
        <h1 id="style-calc-subtext" className="mt-5">
          Number B
        </h1>
        <input type="number" id="number-b" className="mt-1 rounded-md" />
      </div>

      <section className="mt-4">
        <button
          className="border border-gray-700 bg-stone-900 px-3 rounded-lg"
          id="Add-button"
          onClick={addInput}
        >
          Add
        </button>
        <button
          className="border border-gray-700 bg-stone-900 px-3 rounded-lg"
          id="Subtract-button"
          onClick={subtractInput}
        >
          Subtract
        </button>
      </section>

      <div id="answer" className="mt-10">
        <h1>Your Answer:</h1>
        <p id="output"></p>
      </div>
    </div>
  );
}

export default Calculator;
