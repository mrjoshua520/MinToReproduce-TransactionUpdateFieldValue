import { DocumentReference, Transaction } from "@google-cloud/firestore";

type DocumentDataType = {
    [key: string]: {value: boolean};
}

function main(transaction: Transaction, documentRef: DocumentReference<DocumentDataType>, data: DocumentDataType) {
    transaction.update(documentRef, data)
}