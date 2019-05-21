**Register user**
----
  Registers a user.

* **URL**

  <_/api/register_>

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **JSON Example:** `{ username : "John Doe", email : "john@doe.com" , password : "1234" }` 

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{
    "user": {
        "_id": "5ce4646a756a790004c5ecc4",
        "email": "john@doe.com",
        "password": "$2a$08$XJ7HHBRs3UUOZugTvLLkYO9iqPGG2CIdahAtoJp3sEIdcGgmo49Vu",
        "createdAt": "2019-05-21T20:49:46.172Z",
        "__v": 0
    }}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "error": "User already exists" }`

* **Notes:**

  * Password field should be a string
  * Email should be valid