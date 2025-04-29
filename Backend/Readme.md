# API Documentation

## POST /api/register

This endpoint is used to register a new user.

### Description
The `/api/register` endpoint accepts a POST request with a JSON body containing user information. The endpoint validates the input using express-validator and creates a new user, returning the created user object along with an authentication token.

### Request Data
The request body should include the following fields:

- `fullname.firstname` (string): The user's first name. **Required.**
- `fullname.lastname` (string): The user's last name. **Required.**
- `email` (string): The user's email address. Must be a valid email format. **Required.**
- `password` (string): The user's password. Must be a minimum of 8 characters. **Required.**

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response

#### Success (201 Created)
- **Status Code:** 201
- **Body:**
  - `user`: The created user object.
  - `token`: A JSON Web Token (JWT) for authentication.

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    // other user fields
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

#### Validation Failure (400 Bad Request)
- **Status Code:** 400
- **Body:**
  - `errors`: An array of validation error objects.

```json
{
  "errors": [
    {
      "msg": "First Name is required",
      "param": "fullname.firstname",
      "location": "body"
    },
    // additional error details
  ]
}
```

#### Error (Other Codes)
- Appropriate error codes and messages will be returned in case of server or database errors.

### Notes
- Passwords are hashed before being stored.
- The token generated is valid for 1 day.
- Ensure that the environment variable `JWT_SECRET` is correctly configured for token generation.