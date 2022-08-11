"use strict";
class Invoice {
    constructor() {
        this.id = 0;
        this.amount = 0;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getAmount() {
        return this.amount;
    }
    getDetail() {
        return `Invoice amount ${this.amount}`;
    }
}
class InvoiceWithTaxes extends Invoice {
    constructor() {
        super(...arguments);
        this.TAXES = 0.2;
    }
    getAmount() {
        return this.amount + this.amount * this.TAXES;
    }
    getDetail() {
        return `Invoice amount: ${this.getAmount()} (20% tax applied)`;
    }
}
class InvoiceWithReducedTaxes extends Invoice {
    constructor() {
        super(...arguments);
        this.TAXES = 0.1;
    }
    getAmount() {
        return this.amount + this.amount * this.TAXES;
    }
    getDetail() {
        return `Invoice amount: ${this.getAmount()} (10% tax applied)`;
    }
}
class InvoiceFactory {
    static getInvoice(invoiceType) {
        if (invoiceType === this.INVOICE_WITH_TAXES) {
            return new InvoiceWithTaxes();
        }
        if (invoiceType === this.INVOICE_WITH_REDUCED_TAXES) {
            return new InvoiceWithReducedTaxes();
        }
        throw new Error("Invoice type is not defined");
    }
}
InvoiceFactory.INVOICE_WITH_TAXES = 1;
InvoiceFactory.INVOICE_WITH_REDUCED_TAXES = 2;
const INVOICE_WITH_TAXES = 1;
const INVOICE_WITH_REDUCED_TAXES = 2;
const invoiceWithTaxes = InvoiceFactory.getInvoice(INVOICE_WITH_TAXES);
invoiceWithTaxes.setId(1);
invoiceWithTaxes.setAmount(200);
console.log(invoiceWithTaxes.getDetail());
const invoiceWithReducedTaxes = InvoiceFactory.getInvoice(INVOICE_WITH_REDUCED_TAXES);
invoiceWithReducedTaxes.setId(2);
invoiceWithReducedTaxes.setAmount(200);
console.log(invoiceWithReducedTaxes.getDetail());
