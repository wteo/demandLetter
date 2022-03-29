function getCustomerName() {

    const div = document.querySelector("#addressing");
    const form = document.createElement("form");
    div.appendChild(form);

    function createInput(idValue, description) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        const br = document.createElement("br");
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(br);
        label.innerText = description;
        input.setAttribute("id", idValue);
    }

    createInput("customerName", "Who you want to address the letter to?");
    createInput("companyName", "Enter customer's company name.");

    const button = document.createElement("button");
    form.appendChild(button);
    button.setAttribute("id", "addressButton");
    button.innerText = "Submit";

}