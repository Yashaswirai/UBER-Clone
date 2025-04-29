# API Documentation

## 1. User Endpoints

### 1.1 User Registration

#### Endpoint
**POST /api/user/register**

#### Description
This endpoint registers a new user by accepting user information. It validates the input, creates a new user in the database with a hashed password, and returns the created user object along with an authentication token.

#### Request Data
The request body must include the following fields:

- **fullname.firstname** (string): User's first name. **Required.**
- **fullname.lastname** (string): User's last name.
- **email** (string): User's email address. Must be a valid email format. **Required.**
- **password** (string): User's password. Must have at least 8 characters. **Required.**

##### Example Request Body

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

#### Responses

##### Success (201 Created)
- **Status Code:** 201  
- **Body:**
  - `user`: The newly created user object.
  - `token`: A JSON Web Token (JWT) for authentication.

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

##### Validation Failure (400 Bad Request)
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
    }
  ]
}
```

---

### 1.2 User Login

#### Endpoint
**POST /api/user/login**

#### Description
This endpoint logs in an existing user. It verifies the provided email and password, and if valid, returns the user object along with an authentication token.

#### Request Data
The request body must include:

- **email** (string): User's email address. Must be a valid email format. **Required.**
- **password** (string): User's password. **Required.**

##### Example Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

##### Success (200 OK)
- **Status Code:** 200  
- **Body:**
  - `user`: The user object.
  - `token`: A JWT for authentication.

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

##### Failure (400 Bad Request)
- **Status Code:** 400  
- **Body:**
  - `error`: An error message indicating invalid email or password.

```json
{
  "error": "Invalid email or password"
}
```

---

### 1.3 User Profile

#### Endpoint
**GET /api/user/profile**

#### Description
This endpoint retrieves the profile of the currently authenticated user.

#### Request Headers
- **Authorization**: Bearer token (JWT). **Required.**

#### Responses

##### Success (200 OK)
- **Status Code:** 200  
- **Body:**
  - `user`: The authenticated user's profile.

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

##### Failure (401 Unauthorized)
- **Status Code:** 401  
- **Body:**
  - `error`: Unauthorized access.

```json
{
  "error": "Unauthorized"
}
```

---

### 1.4 User Logout

#### Endpoint
**GET /api/user/logout**

#### Description
This endpoint logs out the currently authenticated user by blacklisting their token and clearing the authentication cookie.

#### Request Headers
- **Authorization**: Bearer token (JWT). **Required.**

#### Responses

##### Success (200 OK)
- **Status Code:** 200  
- **Body:**
  - `message`: Confirmation of successful logout.

```json
{
  "message": "Logged out successfully"
}
```

##### Failure (401 Unauthorized)
- **Status Code:** 401  
- **Body:**
  - `error`: Unauthorized access.

```json
{
  "error": "Unauthorized"
}
```

---

## 2. Captain Endpoints

### 2.1 Captain Registration

#### Endpoint
**POST /api/captain/register**

#### Description
This endpoint registers a new captain by accepting user and vehicle information. It validates the input, creates a new captain in the database with a hashed password, and returns the created captain object along with an authentication token.

#### Request Data
The request body must include the following fields:

- **fullname.firstname** (string): Captain's first name. **Required.**
- **fullname.lastname** (string): Captain's last name. **Optional.**
- **email** (string): Captain's email address. Must be a valid email format. **Required.**
- **password** (string): Captain's password. Must have at least 8 characters. **Required.**
- **vehicle.color** (string): Vehicle color. **Required.**
- **vehicle.plate** (string): Vehicle plate number. **Required.**
- **vehicle.capacity** (number): Vehicle capacity. **Required.**
- **vehicle.vehicleType** (string): Type of vehicle. **Required.**

##### Example Request Body

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

#### Responses

##### Success (201 Created)
- **Status Code:** 201  
- **Body:**
  - `captain`: The newly created captain object.
  - `token`: A JWT for authentication.

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Car"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

##### Validation Failure (400 Bad Request)
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
    }
  ]
}
```

---

### 2.2 Captain Login

#### Endpoint
**POST /api/captain/login**

#### Description
This endpoint logs in an existing captain. It verifies the provided email and password, and if valid, returns the captain object along with an authentication token.

#### Request Data
The request body must include:

- **email** (string): Captain's email address. Must be a valid email format. **Required.**
- **password** (string): Captain's password. **Required.**

##### Example Request Body

```json
{
  "email": "jane.smith@example.com",
  "password": "password123"
}
```

#### Responses

##### Success (200 OK)
- **Status Code:** 200  
- **Body:**
  - `captain`: The captain object.
  - `token`: A JWT for authentication.

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Car"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

##### Failure (400 Bad Request)
- **Status Code:** 400  
- **Body:**
  - `error`: An error message indicating invalid email or password.

```json
{
  "error": "Invalid email or password"
}
```

---

### 2.3 Captain Profile

#### Endpoint
**GET /api/captain/profile**

#### Description
This endpoint retrieves the profile of the currently authenticated captain.

#### Request Headers
- **Authorization**: Bearer token (JWT). **Required.**

#### Responses

##### Success (200 OK)
- **Status Code:** 200  
- **Body:**
  - `captain`: The authenticated captain's profile.

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Car"
    }
  }
}
```

##### Failure (401 Unauthorized)
- **Status Code:** 401  
- **Body:**
  - `error`: Unauthorized access.

```json
{
  "error": "Unauthorized"
}
```

---

### 2.4 Captain Logout

#### Endpoint
**GET /api/captain/logout**

#### Description
This endpoint logs out the currently authenticated captain by blacklisting their token and clearing the authentication cookie.

#### Request Headers
- **Authorization**: Bearer token (JWT). **Required.**

#### Responses

##### Success (200 OK)
- **Status Code:** 200  
- **Body:**
  - `message`: Confirmation of successful logout.

```json
{
  "message": "Logged out successfully"
}
```

##### Failure (401 Unauthorized)
- **Status Code:** 401  
- **Body:**
  - `error`: Unauthorized access.

```json
{
  "error": "Unauthorized"
}
```

---

### Additional Notes
- **Token Blacklisting:** Tokens are stored in the `blacklistToken` collection and expire after 24 hours.
- **Passwords:** Are securely hashed before storage.
- **Token Validity:** Generated tokens expire after 1 day.
- **Environment Variables:** Ensure that the `JWT_SECRET` is set in your environment for JWT generation.