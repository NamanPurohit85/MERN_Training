import { useRef, useState } from "react";

function Form() {
  function HandleSubmit() {
    console.log("First Name:", fname);
    console.log("Last Name:", lname);
    console.log("Mother Name:", motherName);
    console.log("Father Name:", fatherName);
    console.log("Address:", address);
    ClearForm();
  }

  function ClearForm() {
    setFName("");
    setLname("");
    setMotherName("");
    setFatherName("");
    setAddress("");
  }
  const [fname, setFName] = useState("");
  const [lname, setLname] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [address, setAddress] = useState("");
  //   console.log("line no 15", fname,lname,motherName,fatherName,address)
  return (
    <>
      <section className="h-100 bg-dark">
        <div className="py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Student registration form
                      </h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init="" className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              value={fname}
                              onChange={(e) => setFName(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init="" className="form-outline">
                            <input
                              type="text"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                              value={lname}
                              onChange={(e) => setLname(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1n"
                            >
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init="" className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m1"
                              className="form-control form-control-lg"
                              value={motherName}
                              onChange={(e) => setMotherName(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1m1"
                            >
                              Mother's name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init="" className="form-outline">
                            <input
                              type="text"
                              id="form3Example1n1"
                              className="form-control form-control-lg"
                              value={fatherName}
                              onChange={(e) => setFatherName(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1n1"
                            >
                              Father's name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example8">
                          Address
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-light btn-lg"
                          onClick={ClearForm}
                        >
                          Reset all
                        </button>
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-warning btn-lg ms-2"
                          onClick={HandleSubmit}
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Form;
