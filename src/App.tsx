import React, { useState } from "react";
import { data } from "./provideddata";
import styles from "./app.module.css";

function App() {
  const [styleName, setStyleName] = useState("");

  const showHint = (e: any) => {
    if (styleName === e.target.id) {
      setStyleName("");
    } else {
      setStyleName(e.target.id);
    }
  };
  return (
    <div className="App">
      <table>
        <thead>
          {data.map((firstElement, index) => {
            return (
              <>
                <tr>
                  {firstElement.map((element) => {
                    const turnOnEdit = (event: any) => {
                      console.log("turning Edits On");
                      if (element.editable) {
                        event.target.readOnly = false;
                      }
                    };
                    const turnOffEdit = (event: any) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        console.log("turning Edits off");
                        event.target.readOnly = true;
                      }
                    };

                    return (
                      <>
                        <td
                          className={`${styles.generic} ${
                            element.editable || element.hint
                              ? styles.blueHover
                              : ""
                          }`}
                          id={element.label}
                          onDoubleClick={turnOnEdit}
                          onClick={(e: any) => {
                            showHint(e);
                          }}
                        >
                          {element.icon && (
                            <img className={styles.icon} src={element.icon} />
                          )}
                          {element.editable ? (
                            <input
                              readOnly={true}
                              onKeyPress={turnOffEdit}
                              className={styles.Input}
                              defaultValue={element.label}
                            ></input>
                          ) : (
                            <>
                              <span className={styles.Input}>
                                {element.label}
                              </span>
                            </>
                          )}
                        </td>
                      </>
                    );
                  })}
                </tr>
                <tr>
                  {firstElement.map((element, index) => {
                    if (element.hint) {
                      return (
                        <td
                          className={
                            styleName === element.label
                              ? styles.active
                              : styles.hints
                          }
                        >
                          {element.hint}
                        </td>
                      );
                    }
                  })}
                </tr>
              </>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default App;
