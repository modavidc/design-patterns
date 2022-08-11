abstract class Invoice {
  id: number = 0;
  amount: number = 0;

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  setAmount(amount: number) {
    this.amount = amount;
  }

  getAmount(): number {
    return this.amount;
  }

  getDetail(): string {
    return `Invoice amount ${this.amount}`;
  }
}

class InvoiceWithTaxes extends Invoice {
  private TAXES = 0.2;

  getAmount(): number {
    return this.amount + this.amount * this.TAXES;
  }

  getDetail(): string {
    return `Invoice amount: ${this.getAmount()} (20% tax applied)`;
  }
}

class InvoiceWithReducedTaxes extends Invoice {
  private TAXES = 0.1;

  getAmount(): number {
    return this.amount + this.amount * this.TAXES;
  }

  getDetail(): string {
    return `Invoice amount: ${this.getAmount()} (10% tax applied)`;
  }
}

class InvoiceFactory {
  private static INVOICE_WITH_TAXES = 1;
  private static INVOICE_WITH_REDUCED_TAXES = 2;

  static getInvoice(invoiceType: number) {
    if (invoiceType === this.INVOICE_WITH_TAXES) {
      return new InvoiceWithTaxes();
    }
    if (invoiceType === this.INVOICE_WITH_REDUCED_TAXES) {
      return new InvoiceWithReducedTaxes();
    }

    throw new Error("Invoice type is not defined");
  }
}

const INVOICE_WITH_TAXES = 1;
const INVOICE_WITH_REDUCED_TAXES = 2;

const invoiceWithTaxes = InvoiceFactory.getInvoice(INVOICE_WITH_TAXES);
invoiceWithTaxes.setId(1);
invoiceWithTaxes.setAmount(200);
console.log(invoiceWithTaxes.getDetail());

const invoiceWithReducedTaxes = InvoiceFactory.getInvoice(
  INVOICE_WITH_REDUCED_TAXES
);
invoiceWithReducedTaxes.setId(2);
invoiceWithReducedTaxes.setAmount(200);
console.log(invoiceWithReducedTaxes.getDetail());

// Credits:

// - https://www.arquitecturajava.com/usando-el-patron-factory/ (Java)
