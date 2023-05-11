import React, { useState } from "react";

const resultData = [
  {
    rollNum: "1",
    name: "name 1",
    phone: "937298",
    result: "A grade",
  },
  {
    rollNum: "2",
    name: "name 2",
    phone: "368623",
    result: "c grade",
  },
  {
    rollNum: "3",
    name: "name 3",
    phone: "737537",
    result: "d grade",
  },
  {
    rollNum: "4",
    name: "name 4",
    phone: "97622",
    result: "b grade",
  },
  {
    rollNum: "5",
    name: "name 5",
    phone: "7376763",
    result: "c grade",
  },
];

const Result = () => {
  const [result, setResult] = useState([{ name: "", phone: "", grade: "" }]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setselectedSection] = useState("");
  const [selectedRollNum, setSelectedRollNum] = useState("");
  let section = null;

  const classes = ["8", "9"];

  if (selectedClass === "8") {
    section = ["a", "b", "c"];
  } else if (selectedClass === "9") {
    section = ["a", "b", "c", "d"];
  } else {
    section = [];
  }
  const rollNumber =
    selectedSection === "a"
      ? ["1", "2"]
      : selectedSection === "b"
      ? ["1", "2", "3"]
      : selectedSection === "c"
      ? ["1", "2", "3", "4"]
      : selectedSection === "d"
      ? ["1", "2", "3", "4", "5"]
      : [];

  const handleChange = (e, type) => {
    const { value } = e.target;

    if (type === "class") {
      setSelectedClass(value);
    } else if (type === "section") {
      setselectedSection(value);
    } else if (type === "rollNum") {
      setSelectedRollNum(value);
      const filteredResult = resultData.filter(
        (item) => item.rollNum === value
      );
      setResult(filteredResult);
      console.log(result);
    }
  };
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold text-white mb-10">Results</h2>
      <form className="w-1/2 flex items-center justify-center gap-4 flex-wrap">
        {/* class */}
        <div className="form-group">
          <label htmlFor="class" className="text-white">
            Select Class
          </label>
          <select
            id="class"
            name="class"
            className="w-full rounded"
            onChange={(e) => handleChange(e, "class")}
            defaultValue={"default"}
          >
            <option value="default" disabled>
              -- select an option --
            </option>

            {classes.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        {/* section */}
        <div className="form-group">
          <label htmlFor="section" className="text-white">
            Select section
          </label>
          <select
            id="section"
            name="section"
            className="w-full rounded"
            onChange={(e) => handleChange(e, "section")}
            defaultValue={"default"}
          >
            <option disabled value="default">
              -- select an option --
            </option>
            {section.map((section) => {
              return (
                <option key={section} value={section}>
                  {section}
                </option>
              );
            })}
          </select>
        </div>

        {/* roll number */}
        <div className="form-group">
          <label htmlFor="rollNum" className="text-white">
            Select Roll Number
          </label>
          <select
            id="rollNum"
            name="rollNum"
            className="w-full rounded"
            onChange={(e) => handleChange(e, "rollNum")}
            defaultValue={"default"}
          >
            <option disabled value="default">
              -- select an option --
            </option>
            {rollNumber.map((num) => {
              return (
                <option key={num} value={num}>
                  {num}
                </option>
              );
            })}
          </select>
        </div>
        {result?.map((result) => {
          return (
            <div
              key={result.rollNum}
              className="flex items-center justify-center flex-col gap-4"
            >
              <input
                type="text"
                placeholder="name"
                disabled
                value={result.name}
                className="rounded-md px-4 py-2"
              />
              <input
                type="text"
                placeholder="phone number"
                disabled
                value={result.phone}
                className="rounded-md px-4 py-2"
              />
              <input
                type="text"
                placeholder="grade"
                disabled
                value={result.result}
                className="rounded-md px-4 py-2"
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Result;
