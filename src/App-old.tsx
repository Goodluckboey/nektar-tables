import React, { useState } from "react";
import { data } from "./provideddata";
import styles from "./app.module.css";

function AppOld() {
  console.log(data);

  const [styleName, setStyleName] = useState(false);

  return (
    <div className="App">
      <table>
        {data.map((firstElement, index) => {
          return (
            <>
              <tr>
                {firstElement.map((element) => {
                  const turnOnEdit = (event: any) => {
                    console.log("turning Edits On");
                    event.target.readOnly = false;
                  };
                  const turnOffEdit = (event: any) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      console.log("turning Edits off");
                      event.target.readOnly = true;
                    }
                  };
                  // Run Checks to see if it satisfies each requirement, if it does produce the required elements with the required className
                  if (element.editable && element.hint && element.icon) {
                    return (
                      <>
                        <td
                          onMouseEnter={() => {
                            setStyleName(true);
                          }}
                          onMouseLeave={() => {
                            setStyleName(false);
                          }}
                          className={styles.editHintIcon}
                          onDoubleClick={turnOnEdit}
                        >
                          <img className={styles.icon} src={element.icon}></img>
                          <input
                            readOnly={true}
                            onKeyPress={turnOffEdit}
                            className={styles.Input}
                            defaultValue={element.label}
                          ></input>
                        </td>
                      </>
                    );
                  } else if (element.editable && element.hint) {
                    return (
                      <>
                        <td
                          className={styles.editHint}
                          onDoubleClick={turnOnEdit}
                        >
                          <input
                            readOnly={true}
                            onKeyPress={turnOffEdit}
                            className={styles.Input}
                            defaultValue={element.label}
                          ></input>
                        </td>
                      </>
                    );
                  } else if (element.icon && element.hint) {
                    return (
                      <>
                        <td
                          onMouseEnter={() => {
                            setStyleName(true);
                          }}
                          onMouseLeave={() => {
                            setStyleName(false);
                          }}
                          className={styles.hintIcon}
                        >
                          <img className={styles.icon} src={element.icon}></img>
                          <input
                            className={styles.Input}
                            readOnly={true}
                            defaultValue={element.label}
                          ></input>
                        </td>
                      </>
                    );
                  } else if (element.editable && element.icon) {
                    return (
                      <>
                        <td
                          className={styles.editIcon}
                          onDoubleClick={turnOnEdit}
                        >
                          <img className={styles.icon} src={element.icon}></img>
                          <input
                            className={styles.Input}
                            readOnly={true}
                            defaultValue={element.label}
                          ></input>
                        </td>
                      </>
                    );
                  } else if (element.editable) {
                    return (
                      <>
                        <td className={styles.edit} onDoubleClick={turnOnEdit}>
                          <input
                            readOnly={true}
                            onKeyPress={turnOffEdit}
                            className={styles.Input}
                            defaultValue={element.label}
                          ></input>
                        </td>
                      </>
                    );
                  } else if (element.hint) {
                    return (
                      <>
                        <td
                          onMouseEnter={() => {
                            setStyleName(true);
                          }}
                          onMouseLeave={() => {
                            setStyleName(false);
                          }}
                          className={styles.hint}
                          id={element.label}
                        >
                          <input
                            className={styles.Input}
                            readOnly={true}
                            defaultValue={element.label}
                          ></input>
                        </td>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <td className={styles.generic}>
                          <input
                            className={styles.Input}
                            readOnly={true}
                            defaultValue={element.label}
                          ></input>
                        </td>
                      </>
                    );
                  }
                })}
              </tr>
              <tr>
                {firstElement.map((element, index) => {
                  if (element.hint) {
                    return (
                      <td
                        id={element.label}
                        className={styleName ? styles.active : styles.hints}
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
      </table>
    </div>
  );
}

export default AppOld;
// const newArray = []
