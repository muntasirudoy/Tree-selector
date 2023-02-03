import { Card } from "primereact/card";
import React, { useEffect, useState } from "react";
import { NodeService } from "../service/NodeService";
import { TreeSelect } from "primereact/treeselect";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const View = () => {
  const [data, setData] = useState("");
  const [individualData, setIndividualData] = useState("");
  const [nodes, setNodes] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    try {
      let res = localStorage.getItem("data");
      let newRes = JSON.parse(res);
      console.log(newRes);
      setData(newRes);
    } catch (error) {}

    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  const showModal = (e, i) => {
    setVisible(true);
    setIndividualData(e);
    setName(e.name);
    setSelectedNodeKey(e.selected);
    setId(i);
  };
  const updateData = () => {
    const formObj = {
      name,
      selected: selectedNodeKey,
      id,
    };

    const oldRecord = localStorage.getItem("data");
    if (oldRecord !== null) {
      const itemList = JSON.parse(oldRecord);
      itemList.splice(id, 1, formObj);
      localStorage.setItem("data", JSON.stringify(itemList));
      setVisible(false);
      setData(itemList);
    }
  };
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data &&
        data.map((e, i) => (
          <>
            <div className="card-view">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                }}
              >
                <span>
                  Name: <b>{e.name}</b>{" "}
                </span>
                <span className="mt-2">
                  Selector:{" "}
                  <TreeSelect
                    value={e.selected}
                    options={nodes}
                    className="mt-1 w-full"
                    placeholder="Select Item"
                    disabled
                  ></TreeSelect>
                </span>
              </div>
              <div
                style={{ width: "20%", display: "flex", justifyContent: "end" }}
              >
                <Button
                  icon="pi pi-user-edit"
                  className="p-button-rounded p-button-secondary"
                  aria-label="pi-user-edit"
                  onClick={() => showModal(e, i)}
                />
              </div>
            </div>
          </>
        ))}
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="form">
          <p className="m-0 font-semibold">
            Please enter your name and pick the Sectors you are currently
            involved in.
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
            <Button onClick={updateData} label="Update" icon="pi pi-check" />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default View;
