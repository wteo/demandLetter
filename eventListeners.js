const addressButton = document.querySelector("#addressButton");
const customerName = document.querySelector("#customerName");
const companyName = document.querySelector("#companyName");

customerName.value = "Accounts";
companyName.value = "your company";

addressButton.addEventListener("click", enteredNames);

function enteredNames(event) {
    event.preventDefault();
    const dearCustomer = document.querySelector("#dearCustomer");
    const openingPar = document.querySelector("#openingPar");
    dearCustomer.innerText = `Dear ${customerName.value}`;
    openingPar.innerText = `We refer to our correspondence, regarding outstanding invoice(s) for ${companyName.value} as listed below:`;
    const form = document.querySelector("#addressing");
    form.remove();
}

const buttons = {
    submit : document.querySelector("#submitButton"),
    remove : document.querySelector("#removeButton")
}

const input = {
    docNo   : document.querySelector("#docNo"),
    docType : document.querySelector("#docType"),
    date    : document.querySelector("#date"),
    month   : document.querySelector("#month"),
    year    : document.querySelector("#year"),
    amount  : document.querySelector("#amount")
}

const {submit, remove} = buttons;
const {docNo, docType, date, month, year, amount} = input;

const createdDocs = []; 

submit.addEventListener("click", enteredDoc);
remove.addEventListener("click", removeForm);

function enteredDoc(event) {

    event.preventDefault();

    const newDocument = new Document(
        docNo.value.replace(/ /g,""), 
        docType.value, 
        [date.value, month.value, year.value],
        Number(paymentTerm.value),
        Number(amount.value.replaceAll(",","").replaceAll("$","").toLocaleString())
        );
    if (createdDocs.length < 1 && docType.value === "Tax Invoice") createdDocs.push(newDocument);
    // .push method used to save first invoice in array so earliest due date is printed when calling on addConclusion() function from mainContent.
    newDocument.addDocument()
    docNo.value = "";
    docType.value = "Tax Invoice";
    date.value = "";
    month.value = "";
    year.value = "";
    amount.value = ""; 
}

function removeForm (event) {
    try {
        event.preventDefault();
        addConclusion(); // find this in the mainContent.js file
        const form = document.querySelector("#addDocsForm");
        form.remove();
    }
    catch(err) {
        alert("Please enter a valid document first.");
    }
}