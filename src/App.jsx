import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import Form from "./components/Form";
import { useState } from "react";
import View from "./components/View";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="App ">
      <div className="container">
        <Card title="Simple Form">
          <TabView activeIndex={activeIndex}>
            <TabPanel header="Create">
              <Form setactiveindex={setActiveIndex} />
            </TabPanel>
            <TabPanel header="View">
              <View />
            </TabPanel>
          </TabView>
        </Card>
      </div>
    </div>
  );
}

export default App;
