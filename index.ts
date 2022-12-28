import { DocumentReference } from "@google-cloud/firestore";

type DocumentDataType = {
    [key: string]: {value: boolean};
}

function main(documentRef: DocumentReference<DocumentDataType>, data: DocumentDataType) {
    documentRef.update(data);
}