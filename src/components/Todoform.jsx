import React from "react";

const Todoform = () => {
  const add = (event) => {
    event.preventDefault();

    // Move the code for getting the values of name and time here
    const name = document.querySelector("#Inputtodo");
    const time = document.querySelector("#Inputtime");
    const li = document.createElement("li");
    const divforli = document.createElement("div");
    if (document.querySelector("#Check").checked) {
      li.classList.add("text-danger");
    }
    li.innerHTML =
      name.value +
      " at " +
      time.value +
      ' <button className="btn-secondary">Delete</button>';
    divforli.classList.add("d-flex");
    divforli.classList.add("justify-content-between");
    const out = document.querySelector("#add");
    divforli.appendChild(li);
    out.appendChild(divforli);
    name.value = "";
    time.value = "";
    // Add an event listener for click events on the #add container
    out.addEventListener("click", function (event) {
      if (event.target && event.target.tagName === "BUTTON") {
        // Check if the clicked element is a button
        const listItem = event.target.parentElement.parentElement;
        // Assuming the structure is div > li, adjust as needed
        listItem.remove(); // Remove the parent list item
      }
    });
  };

  return (
    <div>
      <div className="container my-5">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h2>Name</h2>
            </label>
            <input
              type="text"
              className="form-control"
              id="Inputtodo"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              <p>Add your todo text Here.</p>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <h2>Add time</h2>
            </label>
            <input type="time" className="form-control" id="Inputtime" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="Check" />
            <label
              className="form-check-label text-danger text-decoration-underline"
              htmlFor="exampleCheck1"
            >
              Mark as important
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={add}>
            Add Todo
          </button>
        </form>
        <div className="output my-3" id="add"></div>
      </div>
    </div>
  );
};

export default Todoform;
