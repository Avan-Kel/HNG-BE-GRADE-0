# API Documentation

## Overview

This API returns the user’s profile information along with a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).


## **Endpoint**

### `GET /me`


## **Description:**  
Fetches your profile info, the current UTC timestamp, and a random cat fact.


## **Response Format**

json
{
  "status": "success",
  "user": {
    "email": "johnson@gmail.com",
    "name": "Emeka Johnson",
    "stack": "Next.js/Tailwind"
  },
  "timestamp": "2025-10-16T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}

