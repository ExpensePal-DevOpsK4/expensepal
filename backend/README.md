# 📘 Expense Tracker API Documentation

> Base URL: `http://16.171.165.69:4000/api`

---

## 🧾 1. Add a New Expense

- **Method:** `POST`  
- **Endpoint:** `/expenses`  
- **Description:** Creates a new expense record.

### 🔸 Request Body
```json
{
  "amount": 100,
  "category": "Transport",
  "description": "Uber to meeting"
}
```
### ✅ Success Response

- **Status Code:** `201 Created`

```json
{
  "success": true,
  "message": "Expense added successfuly",
  "data": {
    "_id": "xyz123",
    "amount": 100,
    "category": "Transport",
    "description": "Uber to meeting",
    "date": "2025-03-19T00:00:00.000Z"
  }
}
```
#### ⚠️ Error Response - Add Expense
- **Status Code:** 500 Internal Server Error

```json
{
  "error": "Error message describing what went wrong during expense creation"
}
```


## 📄 2. Get All Expenses

- **Method:** `GET`  
- **Endpoint:** `/expenses`  
- **Description:** Retrieves a list of all expenses.

### ✅ Success Response

- **Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Expenses retrieved successfuly",
  "data": [
    {
      "_id": "xyz123",
      "amount": 100,
      "category": "Transport",
      "description": "Uber to meeting",
      "date": "2025-03-19T00:00:00.000Z"
    },
    ...
  ]
}
```

#### ⚠️ Error Response - Get Expenses
**Status Code:** 500 Internal Server Error

```json
{
  "error": "Error message describing what went wrong while retrieving expenses"
}
```

## ✏️ 3. Edit an Expense

- **Method:** `PATCH`  
- **Endpoint:** `/expenses/:id`  
- **Description:** Updates an existing expense by its ID.

### 🔄 Request Body

```json
{
  "amount": 75100,
  "category": "Food & Drinks",
  "description": "Updated dinner expense"
}
```

### ✅ Success Response

- **Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Expense updated successfully",
  "expense": {
    "_id": "xyz123",
    "amount": 150,
    "category": "Groceries",
    "description": "Updated description",
    "date": "2025-03-19T00:00:00.000Z"
  }
}
  ```

### ⚠️ Error Response

- **Status Code:** `404 Not Found`

```json
{
  "error": "Expense not found"
}
```

#### ⚠️ Error Response - Update Expense
- **Status Code:** 500 Internal Server Error

```json
{
  "error": "Error message describing what went wrong while updating the expense"
}
```


## 🗑️ 4. Delete an Expense

- **Method:** `DELETE`  
- **Endpoint:** `/expenses/:id`  
- **Description:** Deletes an existing expense by its ID.

### ✅ Success Response

- **Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Expense deleted successfully."
}
```
### ⚠️ Error Response

- **Status Code:** `404 Not Found`

```json
{
  "error": "Expense not found"
}
```

#### ⚠️ Error Response - Delete Expense
- **Status Code:** 500 Internal Server Error

```json
{
  "message": "Error deleting expense.",
  "error": "Error message describing the failure"
}
```



## 📊 5. Summarize Spendings

- **Method:** `GET`  
- **Endpoint:** `/expenses/summarize`  
- **Description:** Provides a general summary of all recorded expenses.

### ✅ Success Response

- **Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "General spending summary",
  "data": {
    "totalSpending": 300,
    "totalExpenses": 4,
    "averageExpense": 75,
    "spendingByCategory": [
      { "_id": "Transport", "totalAmount": 120 },
      { "_id": "Groceries", "totalAmount": 90 },
      { "_id": "Health", "totalAmount": 90 }
    ]
  }
}
```
#### ⚠️ Error Response - Get General Summary
- **Status Code:** 500 Internal Server Error

```json
{
  "message": "Error getting summary",
  "error": "Detailed error message"
}
```
