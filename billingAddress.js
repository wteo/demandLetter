const billingAddressForm = document.querySelector("#billingAddress");

function getBillingAddress() {

    const form = document.createElement("form");
    billingAddressForm.appendChild(form);

    function createAddressLine(description) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        const br = document.createElement("br");
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(br);
        label.innerText = description;
    }

    createAddressLine("Billed to:");
    createAddressLine("Position:");
    createAddressLine("Client Name:");
    createAddressLine("Unit No / Level:");
    createAddressLine("Building Name:");
    createAddressLine("Street Address:");
    createAddressLine("Surburb and Postcode:");
    createAddressLine("State and/or Country:");

    const button = document.createElement("button");
    form.appendChild(button);
    button.innerText = "Submit";
    button.addEventListener("click", enteredBillingAddress);
}


function enteredBillingAddress(event) {
    event.preventDefault();
    const addressLines = billingAddressForm.querySelectorAll("input");
    const enteredAddress = document.querySelector("#enteredAddress");
    let fullAddress = "";
    for (let line of addressLines) {
        const addLine = `<p>${line.value}</p>`;
        fullAddress += addLine;
    }
    enteredAddress.innerHTML = fullAddress;
    billingAddressForm.remove(); 
};
