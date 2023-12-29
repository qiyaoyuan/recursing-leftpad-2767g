import "./styles.css";
import React, { useState } from "react";
import { Plate, createPlugins, createPlateUI } from "@udecode/plate";
import {
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin
} from "@udecode/plate-basic-marks";
import { Toolbar } from "./components/Toolbar";

const editableProps = {
  placeholder: "Type…",
  style: {
    padding: "15px"
  }
};

function App() {
  const [debugValue, setDebugValue] = useState([]);

  const plugins = createPlugins(
    [
      // marks
      createBoldPlugin(), // bold mark
      createItalicPlugin(), // italic mark
      createUnderlinePlugin() // underline mark
    ],
    {
      components: createPlateUI()
    }
  );

  return (
    <>
      <Plate
        editableProps={editableProps}
        plugins={plugins}
        onChange={(newValue) => {
          setDebugValue(newValue);
        }}
      >
        <Toolbar />
      </Plate>
      <pre>{JSON.stringify(debugValue, null, 1)}</pre>
    </>
  );
}

export default App;
