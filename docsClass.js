let sumDebt = 0;
const bodyTable = document.querySelector("tbody"); 


class Document {
    constructor(documentNo, documentType, [date, month, year], paymentTerm, amount) {
        this.documentNo = documentNo;
        this.documentType = documentType;
        this.date = [date, month - 1, year];
        this.documentDate = this.getDocumentDate();
        this.dueDate = this.getDocumentDate(paymentTerm);
        this.amount = amount;
    }
    getDocumentDate(extendedDays = 0) {
        const documentDate = new Date(this.date[2], this.date[1], this.date[0]);
        const extendedDate = documentDate.setDate(documentDate.getDate() + extendedDays);
        let newDate = new Date(extendedDate);
        let dd = String(newDate.getDate()).padStart(2, '0');
        let mm = String(newDate.getMonth() + 1).padStart(2, '0');
        let yyyy = newDate.getFullYear();
        newDate = dd + '/' + mm + '/' + yyyy;
        return newDate;
    }
    addDocument() {
        const {documentNo, documentType, documentDate, dueDate, amount} = this;
        const row = document.createElement("tr");
        row.setAttribute("id", documentNo);
        bodyTable.appendChild(row);
        this.createData(documentNo);
        this.createData(documentType);
        this.createData(documentDate);
        this.createData(dueDate);
        this.createData(`$${amount.toLocaleString()}`);
        this.addAmount();
    }
    addAmount() {
        sumDebt += this.amount;
        return sumDebt;
    }
    createData(data) {
        const selectedRow = bodyTable.querySelector(`#${this.documentNo}`);
        const column = document.createElement("td");
        selectedRow.appendChild(column)
        column.innerText = data;
    }
}
