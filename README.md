**Register user**
----
  Registers a user.

* **URL**

  `/api/register`

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **JSON Example:** `{ username : "John Doe", email : "john@doe.com" , password : "1234" }` 

* **Success Response:**

  * **Code:** 200 <br />

    **Content:** `{"user": {"_id": "5ce4646a756a790004c5ecc4","email": "john@doe.com"}}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />

    **Content:** `{ "error": "User already exists" }`

* **Notes:**

  * Password field should be a string
  * Email should be valid