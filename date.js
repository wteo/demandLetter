function getDate(extendedDays = 0) {
    const today = new Date();
    const extendedDate = today.setDate(today.getDate() + extendedDays);
    let newDate = new Date(extendedDate);
    const dd = String(newDate.getDate()).padStart(2, '0');
    const mm = String(newDate.getMonth() + 1).padStart(2, '0');
    const yyyy = newDate.getFullYear();
    newDate = dd + '/' + mm + '/' + yyyy;
    return newDate;
};

const demandLetterPaymentTerm = {
    extendedDays        : 14,
    dueDate             : getDate(14) // dueDate from date Demand Letter is sent
}