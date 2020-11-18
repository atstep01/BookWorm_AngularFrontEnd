# Development Phases

## Summary
This is a list of all large goals I have for BookWorm. This is very much a think big type of situation. There's no telling what all will actually get done since this is just a side project.

## Phase 1 - Angular Front End
- A basic first generation front end that supports a basic feature set.
- Features:
   - Wishlist
   - Reading list
   - Notes and user ratings for books being read
   - Favorites list.
- Data will be stored in the front end to begin with. Maybe files if we want peristence.
- This is mainly just to show off ability to develop an Angular application in the right way.
- Deliverables
   - Front end UI based on designed wireframes
   - Functional UI that enables the listed features to be used
   - Front end persistence that allows a backend/db to be easily plugged in
   - Testing/CI

## Phase 2 - MongoDB
- A database to store all the information from the front end.
- Right now we will only need a table for information on books users want/ are reading.
- In the future we will have seperate schema/tables for User profile info, Book pages, Book clubs,
- Deliverables
   - Database table that stores user book information

## Phase 3 - Express API/Node Backend
- An express API that will connect the angular and the mongodb.
- Deliverables
   - A fully functioning web app that supports get, post, put, delete https operations
   - Ability to add, modify, delete data from database
   - Testing/CI

## Phase 4 - Hosting
- Various cloud platforms will be analyzed and chosen to host the web app.
- Delivarables
   - Fully hosted (dockerized?) webapp. Will function outside of local host.
   - CI/CD strategies

## Phase 5 - Login/Security
- The ability to have multiple users on the site.
- Deliverables
   - Ability to register an account
   - Ability to login/logout
   - Login/Logout page on the front end
   - User time out.
   - Remember me option.
   - Stay logged in pop up
   - Features will be moved to an on user basis.
   - Encryption to ensure usernames and passwords are stored and communicated securely
   - Additional table to store user information in the database.

## Phase 6 - Profile Page
- Added page for a user's profile. Include a bio and an access point to their wishlist, reading list, and rankings
- Deliverables
   - Page added to front end that gives access to the three front end features and a bio
   - Profile pictures. Adding/Updating pfps
   - Store bio information in database
   - Ability to edit bio.
   - Will allow user to navigate to their features from their profile page or the sidebar.

## Phase 7 - Book API Integration
- Will research available book APIs and find one that fits our application. This will allow us to make adding books a lot more robust and less tedious for the user. Where previously the add a book feature was really a rudimentary experience to demonstrate Angular skills, this will resemble a more realistic feature that you might find on google or amazon.
- Deliverables
   - Change the add book feature to search for a book using a API call
   - Animations on front end to show we are searching for available books
   - Display a list of possible matching books and let the user select one.
   - Have alternate legacy option to add a book if not found in the API.
   - Display pictures of books on the summaries.
   - Auto gather most if not all the book information from the API including ratings/description.

## Phase 8 - Friends
- Add the ability to find and connect with other users on the site.
- Deliverables
   - Add a user search tab to the side bar
   - Add a user search page to search for users.
   - Allow clicking on a searched user to go to their profile page and display their information/feature pages.
   - Add an add friend button to other users pages.
   - Add a friends section to profile pages.
      - Include list of friends
      - Include friend requests
         - Allow accept or deny
   - Notification system to facilitate the delivery of friend requests.
   - Notify the user when a friend request is received and when they are accepted.

## Phase 9 - Book Summary Pages
- Adds the ability to search for a book without necessarily adding it to a wishlist. Gives books a landing page so users can read up on them.
- Deliverables
   - Add a book search tab to the side bar
      - Search by title
      - Search by genre
   - Add a book search page to search for books.
   - Search books with API, when clicked generate a page based on the book info.
   - Change the add book to wishlist flow to also launch a page for a book when clicked
   - Add wishlist button on book page that adds the book to the wishlist
   - Add buy button here and remove from wishlist section

## Phase 10 - Book Discussion Boards
- Adds ability in book pages to see comments/notes/reviews on the book made by users.
- Deliverables
   - Query the database to find all notes/reviews/comments on the book when generating the book page.
   - Display this information in an easily consumable manor like the ratings system on google play.
   - Add a questions tab in the book landing page.
   - Add in ability to like/dislike comments/notes
   - Add in ability to respond to a comment/note/question.
   - Add notifications for likes/responses.

## Phase 11 - Book Recommendations V1

## Phase 12 - Book Clubs

## Phase 13 - Book Recommendations V2

## Phase 14 - Ads

## Phase 15 - Author Pages

## Phase 16 - Privacy Settings

## Phase 17 - Personal Writings

## Phase 18 - Group Writings
