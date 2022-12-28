import { DocumentReference, Transaction } from "firebase-admin/firestore";

type DocumentDataType = {
    [key: string]: {value: boolean};
}

function main(transaction: Transaction, documentRef: DocumentReference<DocumentDataType>, data: DocumentDataType) {
    transaction.update(documentRef, data)
}