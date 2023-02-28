import React from "react";
import { Form, Field } from "react-final-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const App = () => {
  return (
    <div>
      <style>{"body { background-color: #edede9; }"}</style>

      <div
        className="container"
        style={{
          width: "50%",
          border: "2px solid white",
          padding: "20px",
          backgroundColor: "#FFFFF",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <h1 className="ui" style={{ textAlign: "center" }}>
          Employee Form
        </h1>
        <hr />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className="ui form">
              {/* Start Input Name */}
              <div className="field">
                <h3>Name</h3>
                <div className="two fields">
                  <div className="field">
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="field">
                    <Field
                      name="lastName"
                      component="input"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              {/* End Input Name */}

              {/* Start Employed True Or False */}
              <div className="two fields">
                <div className="field">
                  <h3>Employed</h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      marginTop: "15px",
                      marginLeft: "2px",
                    }}
                  >
                    <Field
                      name="employed"
                      component="input"
                      type="checkbox"
                      className="ui checkbox"
                    />
                  </div>
                </div>
                {/* End Employed True Or False */}

                {/* Start Education Option */}
                <div className="field">
                  <h3>Education</h3>
                  <Field name="education" component="select">
                    <option />
                    <option value="High School">High School</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                  </Field>
                </div>
              </div>
              {/* End Education Option */}

              {/* Start Expertise Checkbox */}
              <div className="field">
                <h3>Expertise</h3>
                <div
                  className="five fields"
                  style={{ fontSize: "20px", width: "80%" }}
                >
                  <div className="field">
                    <label style={{ fontWeight: "normal" }}>
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="HTML"
                      />{" "}
                      HTML
                    </label>
                  </div>
                  <div className="field">
                    <label style={{ fontWeight: "normal" }}>
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="CSS"
                      />{" "}
                      CSS
                    </label>
                  </div>
                  <div className="field">
                    <label style={{ fontWeight: "normal" }}>
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="Javascript"
                      />{" "}
                      Javascript
                    </label>
                  </div>
                  <div className="field">
                    <label style={{ fontWeight: "normal" }}>
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="NodeJs"
                      />{" "}
                      NodeJs
                    </label>
                  </div>
                  <div className="field">
                    <label style={{ fontWeight: "normal" }}>
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="ReactJs"
                      />{" "}
                      ReactJs
                    </label>
                  </div>
                </div>
              </div>
              {/* End Expertise Checkbox */}

              {/* Start Tech Radio Box */}
              <div className="field">
                <h3>Preferred Technology</h3>
                <div
                  className="three fields"
                  style={{
                    fontSize: "20px",
                    width: "50%",
                    fontWeight: "normal",
                  }}
                >
                  <div className="field">
                    <label style={{ fontWeight: "normal" }}>
                      <Field
                        name="technology"
                        component="input"
                        type="radio"
                        value="Frontend"
                      />{" "}
                      Frontend
                    </label>
                  </div>
                  <div className="field">
                    <label style={{ fontWeight: "normal" }}>
                      <Field
                        name="technology"
                        component="input"
                        type="radio"
                        value="Backend"
                      />{" "}
                      Backend
                    </label>
                  </div>
                  <div className="field">
                    <label style={{ fontWeight: "normal" }}>
                      <Field
                        name="technology"
                        component="input"
                        type="radio"
                        value="Fullstack"
                      />{" "}
                      Fullstack
                    </label>
                  </div>
                </div>
              </div>
              {/* End Tech Radio Box */}

              {/* Notes */}
              <div className="field">
                <h3>Notes</h3>
                <Field name="notes" component="textarea" placeholder="Notes" />
              </div>

              {/* Button */}
              <div className="buttons field">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Submit
                </button>
                <button
                  className="btn btn-warning ms-2"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <hr />

              {/* Show Value */}
              <div style={{ backgroundColor: "#E5E5CB", borderRadius: "5px" }}>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default App;
