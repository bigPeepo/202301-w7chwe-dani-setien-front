# Data

# Register Data layer

- UserInfo
  - username: string
  - email: string
  - password: string
  - avatar: string

# People Data layer

- People

  - username: string
  - avatar: string
  - relationship: enum

- UserInfo
  - id: string
  - isLogged: boolean
  - friends: []People
  - enemies: []People

# Data modifications

# Register modifications

- Add username
- Add password
- Add email
- Add avatar

# People modifications

- Load people
- Set someone as friend
- Toggle someone as friend/enemy

# Components

# Register Form

- Shows the username input text field
- Shows the password input text field
- Shows the email input text field
- Shows the avatar input file field

- Sends the username
- Sends the password
- Sends the email
- Sends the avatar

# Login form

- Shows the username input text field
- Shows the password input text field

# People Card

- Shows the username
- Shows the relationship status
- Shows the avatar

- Shows the toggleRelationship Button

# People List

- Shows a card for every element in People[]

# Filter Button

- Shows filterOptions
- Receives the filterPeople function

# Total People Counter

- Receives People[]
- Receives filterStatus

# Edit page

- Shows the edit username input text field
- Shows the edit password input text field
- Shows the edit email input text field
- Shows the edit avatar input file field
