function getDocumentForm() {

    const form = document.querySelector("#addDocsForm");

    function createLabel(description) {
        const label = document.createElement("label");
        form.appendChild(label);
        label.innerText = description;
    }

    function createBreak() {
        const br = document.createElement("br");
        form.appendChild(br);
    }

    function createInput(idValue) {
        const input = document.createElement("input");
        form.appendChild(input);
        input.setAttribute("id", idValue);
    }

    function createSelect(idValue) {
        
        const select = document.createElement("select");
        form.appendChild(select);
        select.setAttribute("id", idValue);

        function createOption(idValue, choice) {
            const option = document.createElement("option");
            select.appendChild(option);
            option.setAttribute("id", idValue);
            option.innerText = choice;
        }

        createOption("invoice", "Tax Invoice");
        createOption("credit", "Credit Note");
        createOption("pay", "Overpayment");

    }

    function createButton(description, idValue) {
        const button = document.createElement("button");
        form.appendChild(button);
        button.innerText = description;
        button.setAttribute("id", idValue);
    }

    createBreak();
    createBreak();
    createLabel("Enter the invoice or credit note details below (from oldest to newest) and said document will be listed in the table above.");
    createBreak();
    createLabel("Document No:");
    createInput("docNo");
    createBreak();
    createLabel("Document Type:");
    createSelect("docType");
    createBreak();
    createLabel("Billed Date (DD/MM/YYYY):");
    createInput("date");
    createInput("month");
    createInput("year");
    createBreak();
    createLabel("Payment Term (in days):");
    createInput("paymentTerm");
    createBreak();
    createLabel("Amount:");
    createInput("amount");
    createBreak();
    createButton("Add Document", "submitButton");
    createBreak();
    createBreak();
    createLabel("When you're finished, click the button below to remove document form and conclude the letter.")
    createBreak();
    createButton("Remove form", "removeButton");
}
