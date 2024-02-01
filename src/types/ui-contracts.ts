export interface MandateDetails extends BankAccountDetails {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  emailAddress?: string;
  houseNumberOrName?: string;
  streetAddress?: string;
  city?: string;
  country?: string;
  postalCode?: string;
}

export interface BankAccountDetails {
  accountHolderName?: string;
  accountBankNumber?: string;
  accountBranchNumber?: string;
  accountSuffixNumber?: string;
  accountNumber?: string;
  extraCode?: string;
  bankName?: string;
  signatoryName?: string;
}
