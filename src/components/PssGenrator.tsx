import { useCallback, useEffect, useState } from "react";

const PssGenrator = () => {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [car, setCar] = useState(false);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let passValu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      passValu += "0123456789";
    }

    if (car) {
      passValu += "@%^&*()$@{}[]:_-><";
    }

    for (let i = 1; i <= length; i++) {
      let carather = Math.floor(Math.random() * passValu.length + 1);
      pass += passValu.charAt(carather);
      setPassword(pass);
    }
  }, [length, number, car, setPassword]);

  useEffect(() => {
    passGenerator();
  }, [length, number, car, passGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 bg-gray-800 my-14 py-3 text-pink-500">
        <h1 className="text-center text-white text-xl font-semibold my-4">
          Password generator
        </h1>
        <div className="flex shadow-lg overflow-hidden mb-4 rounded-lg">
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="font-medium">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={number}
              className="cursor-pointer"
              onChange={() => setNumber((pre) => !pre)}
            />
            <label className="font-medium">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={car}
              className="cursor-pointer"
              onChange={() => setCar((pre) => !pre)}
            />
            <label className="font-medium">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PssGenrator;
