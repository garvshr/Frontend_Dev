"use strict";

class FormBuilder {
  constructor(containerId, fields) {
    this.container = document.getElementById(containerId);
    this.fields = fields;
    this.form = null;
  }

  createForm() {
    const inputsHtml = this.fields
      .map(f => {
        const name = f.name || f.label.toLowerCase().replace(/\s+/g, "_");
        return `
          <label>${f.label}
            <input type="${f.type}" name="${name}" id="${name}">
          </label>
        `;
      })
      .join("");
    this.container.innerHTML = `
      <form id="dynamicForm">
        ${inputsHtml}
        <button type="submit">Submit</button>
      </form>
    `;
    this.form = document.getElementById("dynamicForm");
  }

  getFormData() {
    const data = {};
    this.fields.forEach(f => {
      const name = f.name || f.label.toLowerCase().replace(/\s+/g, "_");
      const input = document.getElementById(name);
      data[name] = input ? input.value : "";
    });
    return data;
  }
}

const fields = [
  { type: "text", label: "Username", name: "username" },
  { type: "email", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" }
];

const builder = new FormBuilder("formContainer", fields);
builder.createForm();

const resultDiv = document.getElementById("result");

document.addEventListener("submit", e => {
  if (e.target && e.target.id === "dynamicForm") {
    e.preventDefault();
    const data = builder.getFormData();
    resultDiv.textContent = JSON.stringify(data, null, 2);
  }
});
