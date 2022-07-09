const content = document.querySelector("#mainContent");    

function getContent() {  
    content.innerHTML = `
        <p id="dearCustomer"></p>
        <p id="title">Outstanding Fees</p>
        <p id="openingPar"></p>
        <br/>
        <div>
            <table>
                <thead>
                    <th>Document No</th>
                    <th>Document type</th>
                    <th>Billed Date</th>
                    <th>Due Date</th>
                    <th>Amount (inc GST)</th>
                </thead>
                <tbody>
                </tbody>
            </table>
            <form id="addDocsForm">
            </form>
        </div>
        <br/>`;
}

function addConclusion() {
    function createP(sentence) {
        const p = document.createElement("p");
        content.appendChild(p);
        p.innerText = sentence;
    }
    createP(`The matter has been in arrears since ${createdDocs[0].dueDate}. Whilst we have tried numerous times to resolve this, to date we have had no satisfaction in this regard.`);
    createP(`Unless the matter is settled within ${demandLetterPaymentTerm.extendedDays} days, we will look to cease all services and pursue collection via legal recovery method.`);
    createP(`Accordingly, we seek immediate settlement of the outstanding amount, totalling $${sumDebt.toLocaleString()} inc GST, by close of business on ${demandLetterPaymentTerm.dueDate}.`);
    createP(`We look forward to your early advice.`);
} // this was executed in the eventListener.js file


