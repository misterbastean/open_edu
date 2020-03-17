# Open EDU API
The Open EDU API is a proof of concept API to demonstrate how the educational community
could benefit from an open-source repository of open educational resources, as well as
community-designed curriculum.

## Brief History
The educational industry is currently in a position reminiscent of the computer science
industry in the late 80's, with curriculum and resources being dominated by enormous
corporations (e.g. Pearson, McGraw-Hill, etc.), much like the CS industry was dominated
by Unix/Windows/Macintosh prior to the open-source software movement.

This API is a companion to a paper I am currently writing, highlighting the similarities
between these two situations and suggesting that the educational community would greatly
benefit from an "educational Linux." This API is the proof of concept that educators
could benefit from adopting many open-source software development practices when creating
curriculum.



# API Documentation
Note: most of these routes are not yet implemented, as this is a work in progress.
However, this is the tentative final design.

## Routes
### Resources
Resources are single files (e.g. documents, images, presentations, etc.). They are
the most basic building blocks of curriculum, and are designed to be incorporated
into Units (see below).

| Route | Method | Description | Implemented? | Auth Required? |
|-------|--------|-------------|:------------:|:--------------:|
| /resources | GET | Get all resources | N | N
| /resources | POST | Create a new single resource | Y | Y
| /resources/:id | GET | Get a specific resource | N | N
| /resources/:id | PUT | Update a specific resource | N | Y
| /resources:id | DELETE | Delete a specific resource | N | Y
| /resources/query | GET | Get resources that match a query | N | N


### Units
Units are collections of resources designed to provide structure to curriculum.
Generally speaking, a unit will contain multiple resources (e.g. lesson plans,
handouts, tests, rubrics, etc.) as well as additional information to help the
teacher implement, such as directions, grade level(s), suggested time frame, etc.

| Route | Method | Description | Implemented? | Auth Required? |
|-------|--------|-------------|:------------:|:--------------:|
| /units | GET | Get all units | N | N
| /units | POST | Create a new single unit | N | Y
| /units/:id | GET | Get a specific unit | N | N
| /units/:id | PUT | Update a specific unit | N | Y
| /units/:id | DELETE | Delete a specific unit | N | Y
| /units/query | GET | Get resources that match a query | N | N


### Users
Users are exactly what you think they are.

| Route | Method | Description | Implemented? | Auth Required? |
|-------|--------|-------------|:------------:|:--------------:|
| /users | GET | Get all usernames | N | Y (Admin)
| /users | POST | Create new user | N | N
| /users/:username | GET | Get specific user | N | N
| /users/:username | PUT | Update specific user | N | Y
| /users/:username | DELETE | Delete specific user | N | Y
| /users/:username/followers | GET | Lists the users who are following :username | N | N
| /users/:username/following/:username2 | GET | Check if :username is already following :username2 | N | N
| /users/:username/following/:username2 | PUT | Adds :username2 to the list of users followed by :username | N | Y
| /users/:username/following/:username2 | DELETE | Removes :username2 from the list of users followed by :username | N | Y


### Comments
Comments are exactly what you think they are: text strings associated with a specific
user and a specific Resource or Unit.

| Route | Method | Description | Implemented? | Auth Required? |
|-------|--------|-------------|:------------:|:--------------:|
| /comments | POST | Create a new comment | N | Y
| /comments/:id | GET | Get specific comment | N | N
| /comments/:id | PUT | Update a specific comment | N | Y
| /comments/:id | DELETE | Delete a specific comment | N | Y
| /comments/query | GET | Get all comments that match a query | N | N


## Request Attributes
### Resource
When a request is made to /requests, expect each item to return JSON that follows this format:
```json
{
  "_id": {"$oid": "String"},
  "owner": "User",
  "dateCreated": "Date",
  "title": "String",
  "description": "String",
  "linkUrl": "String",
  "grades": ["String"],
  "subject": "String",
  "standards": ["String"],
  "stars": ["String"],
  "comments": ["Comment"],     // Will update when Comments are implemented
  "pendingMerges": ["Merge"],  // Will update when Merges are implemented
  "acceptedMerges": ["Merge"], // Will update when Merges are implemented
  "rejectedMerges": [{         // Will update when Merges are implemented
    "_id": {"$oid": "String"},
    "merge": "String",
    "message": "String"
  }],
  "lastUpdated": "Date",
  "timesDownloaded": "Number",
  "__v": "Number"
}
```

For example:

```json
{
  "_id":{"$oid":"5e70e557a47475260b865eed"},
  "owner":"josh",
  "dateCreated":{"$date":{"$numberLong":"1584457047886"}},
  "title":"Macbeth Study Guide",
  "description":"This is a study guide to help students with Macbeth",
  "linkUrl":"/uploads/resources/Macbeth_Study_Guide.docx",
  "grades":["9","10","11","12"],
  "subject":"ELA",
  "standards":["CCSS.ELA.1.2","CCSS.ELA.3.4"],
  "stars":["user1","user2"],
  "comments":["This is awesome!","Great job!"],
  "pendingMerges":["merge_12345","merge_09876"],
  "acceptedMerges":["merge_11111"],
  "rejectedMerges":[
    {"_id":{"$oid":"5e70e557a47475260b865eee"},
    "merge":"merge_00000",
    "message":"Please fix the typos"}
  ],
  "lastUpdated":{"$date":{"$numberLong":"1577874030000"}},
  "timesDownloaded":{"$numberInt":"15"},
  "__v":{"$numberInt":"0"}
}
```
