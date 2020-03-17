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


##
