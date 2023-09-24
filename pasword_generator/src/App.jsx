import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberContain, SetNumberContain] = useState(false);
  const [charContain, SetCharContain] = useState(false);
  const [passwordCreated, setpasswordCreated] = useState("");
  const selectText = useRef(null);
  const passkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let passGen = useCallback(() => {
    let possibleKey = passkeys;
    if (numberContain) {
      possibleKey = possibleKey + "1234567890";
    }
    if (charContain) {
      possibleKey = possibleKey + "~!@#$%^&*(){}:[]()<>?/|";
    }
    let newpass = "";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.round(Math.random() * possibleKey.length);
      newpass = newpass + possibleKey.charAt(randomIndex);
    }
    setpasswordCreated(newpass);
  }, [length, numberContain, charContain]);

  const copyToClipBoard = function () {
    selectText.current?.select(); // it will select the text stored in input bar as we have given its reference there in input bar tag
    window.navigator.clipboard.writeText(passwordCreated);
  };

  useEffect(() => {
    passGen();
  }, [passGen, length, charContain, numberContain]);

  return (
    <>
      <div className="w-[46%] bg-gray-600 mx-auto">
        <h1 className="text-center text-3xl mt-6 mb-2">Password Generator</h1>
        <input
          className="ml-4 py-2 mt-4 w-[70%] px-4 mr-3 rounded-md"
          type="text"
          name=""
          id=""
          value={passwordCreated}
          ref={selectText} // give a passwordcreated as a reference to selectText refhook to select it
          placeholder="password Generated"
          readOnly
        />
        <button
          onClick={copyToClipBoard} // call clipToClipBoard function is called which select the text and copy to clipboard
          className="px-6 py-2 bg-blue-500 rounded-md"
        >
          Copy
        </button>
        <input
          className="mt-5 ml-4"
          type="range"
          min={3}
          max={20}
          name=""
          onChange={(e) => setLength(e.target.value)} // whenever any change is made in slider we will update our length
          value={length}
          id="slider"
        />
        <label
          className="ml-4 font-semibold text-orange-400 text-lg"
          htmlFor="slider"
        >
          Length ({length})
        </label>
        <input
          className="ml-3 mr-2"
          type="checkbox"
          name="number"
          id="number"
          onChange={() => SetNumberContain(!numberContain)}
        />
        <label
          className="font-semibold text-orange-400 text-lg"
          htmlFor="number"
        >
          Number
        </label>
        <input
          className="ml-3 mr-2"
          type="checkbox"
          name="character"
          id="character"
          onChange={() => SetCharContain(!charContain)}
        />
        <label
          className="font-semibold text-orange-400 text-lg"
          htmlFor="character"
        >
          Character
        </label>
      </div>
    </>
  );
}

export default App;

// apply for setnumber contain on inpout checkbox
