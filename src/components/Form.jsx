import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { NodeService } from "../service/NodeService";
import { TreeSelect } from "primereact/treeselect";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { v4 as uuidv4 } from "uuid";
const Form = ({ setactiveindex }) => {
  const [nodes, setNodes] = useState(null);
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  const onLoadingClick1 = () => {
    const formObj = {
      name,
      selected: selectedNodeKey,
      checked,
      id: uuidv4(),
    };

    setLoading1(true);
    try {
      if (!formObj.name) {
        setError("Please enter your name");
        setLoading1(false);
      }
      if (!formObj.selected) {
        setError("Please select a category");
        setLoading1(false);
      }
      if (!checked) {
        setError("Please checked agree with terms");
        setLoading1(false);
      } else {
        const oldRecord = localStorage.getItem("data");

        if (oldRecord !== null) {
          const itemList = JSON.parse(oldRecord);
          itemList.push(formObj);
          localStorage.setItem("data", JSON.stringify(itemList));
        } else {
          const itemArr = [];
          itemArr.push(formObj);
          localStorage.setItem("data", JSON.stringify(itemArr));
        }
        setLoading1(false);
        setError("");
        setSuccess("Successfully Added");
        setName("");
        setSelectedNodeKey("");
        setChecked("");
        setactiveindex(1);
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
    } catch (error) {}
  };
  return (
    <div className="form-item">
      <div className="form">
        <p className="m-0 font-semibold">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </p>
        <div className="flex flex-column gap-1">
          <label className="mt-3" htmlFor="name">
            Your Name
          </label>
          <InputText
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            value={name}
          />
        </div>
        <div className="flex flex-column gap-1">
          <label className="mt-3" htmlFor="name">
            Your Name
          </label>
          <TreeSelect
            value={selectedNodeKey}
            options={nodes}
            onChange={(e) => setSelectedNodeKey(e.target.value)}
            className="w-full"
            placeholder="Select Item"
          ></TreeSelect>
        </div>
        <div className="card flex justify-content-left mt-3">
          <Checkbox
            value={checked}
            onChange={(e) => setChecked(e.checked)}
            checked={checked}
          >
            {" "}
          </Checkbox>
          <span className="ml-2"> Agree to terms</span>
        </div>
        <div className="card flex justify-content-left mt-3">
          <Button
            label="Submit"
            icon="pi pi-check"
            loading={loading1}
            onClick={onLoadingClick1}
          />
        </div>
        {error ? (
          <p
            style={{
              background: "red",
              padding: "10px",
              color: "white",
              marginTop: "10px",
            }}
          >
            {error}
          </p>
        ) : success ? (
          <p
            style={{
              background: "green",
              padding: "10px",
              color: "white",
              marginTop: "10px",
            }}
          >
            {success}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Form;
