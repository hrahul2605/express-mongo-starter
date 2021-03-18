# **express-mongo-starter**

<img src="https://socialify.git.ci/hrahul2605/express-mongo-starter/image?description=1&forks=1&issues=1&language=1&owner=1&stargazers=1&theme=Dark" alt="boilerplate-server" width="640" height="320" />

## Pre-requisites

* Node
* MongoDB
* Redis
* Docker - Recommended

## Get Started

1. Create `.env` file and populate it taking reference to `sample.env`.
2. `docker-compose up` 

***NOTE:*** Without docker steps  
2. `yarn install` - Install all the dependencies  
3. Check your Mongo & Redis server is up and running.  
4. `yarn start` - Start the server.  

## Thanks to

- Article: [Bulletproof node.js project architecture](https://softwareontheroad.com/ideal-nodejs-project-structure/)

### Endpoints

<span>\*</span> denotes required fields.
? denotes maybe undefined.

**Every Request should have `Content-Type: application/json`**

<table>
<tr>
<td>Index</td>
<td>Key</td>
<td>Value</td>
</tr>
<tr>
<td>1.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/auth/register</td>
</tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{
    "phone*":     "string",
    "password*":  "string",
    "email":     "string",
    "name":      "string",
}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "data": {
            "accessToken":    "string",
            "userId":         "string",
            "refreshToken":   "string",
        },
    "success": "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "409": "Already Registered",
  "201": "User registered successfully",
  "501": "Internal Server Error"
}
```

</td>
</tr>
<td>2.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/auth/login</td>
</tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{
    "phone*":     "string",
    "password*":  "string",
}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "data?": {
            "accessToken":    "string",
            "userId":         "string",
            "refreshToken":   "string",
        },
    "success": "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "200": "User Authorised",
  "401": ["User not registered" , "User not Authorised"],
  "501": "Internal Server Error"
}
```

</td>
</tr>
<td>3.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/auth/refresh-token</td>
</tr>
<tr>
<td></td>
<td>REQ HEADERS</td>
<td>

```json
    "access-token*":   "string",
    "user-id*":        "string",
```

</td>
</tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{
    "refreshToken*":     "string",
}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "data": {
            "accessToken":    "string",
            "userId":         "string",
            "refreshToken":   "string",
        },
    "success": "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "205": "OK",
  "400": "Invalid",
  "405": "Refresh Token Expire",
  "501": "Internal Server Error"
}
```

</td>
</tr>

<td>4.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/auth/logout</td>
</tr>
<tr>
<td></td>
<td>REQ HEADERS</td>
<td>

```json
    "access-token*":   "string",
    "user-id*":        "string",
```

</td>
</tr>
<tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "success":          "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "200": "Logged Out",
  "501": "Internal Server Error"
}
```

</td>
</tr>

</table>
