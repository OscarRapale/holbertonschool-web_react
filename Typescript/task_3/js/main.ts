/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert a row
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

// Create an updated row
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
