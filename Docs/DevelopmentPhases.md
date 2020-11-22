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
   - Updated wireframes for userpages

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
   - Add a book search page to search for books.
   - Search books with API
      - Search by title
      - Search by genre
      - Search by author
   - When book is clicked generate a page based on the book info.
   - Change the add book to wishlist flow to also launch a page for a book when clicked
   - Add wishlist button on book page that adds the book to the wishlist
   - Add buy button here and remove from wishlist section
   - Wireframes for book summary pages

## Phase 10 - Book Discussion Boards
- Adds ability in book pages to see comments/notes/reviews on the book made by users.
- Deliverables
   - Query the database to find all notes/reviews/comments on the book when generating the book page.
   - Display this information in an easily consumable manor like the ratings system on google play.
   - Add a questions tab in the book landing page.
   - Add in ability to like/dislike comments/notes
   - Add in ability to respond to a comment/note/question.
   - Add notifications for likes/responses.
   - Updates wireframes for book summary pages

## Phase 11 - Book Recommendations V1
- Adds a rudimentary book recommendation system based on books the user is interacting with
- Deliverables
   - A book recommendation bar on the bottom of the users wishlist screen.
   - Recommends books with similar authors and genres based on books the user has read and rated highly.
   - Some discernable metric to evaluate a users book preference.
   - Recommends 5-10 books
   - Updated wireframes for book recommendations

## Phase 12 - Book Clubs
- Adds the ability to make friend groups that operate like a book club in real life. Allows a group to set a schedule of books to be read. Will faciliate conversation on the weeks reading. It would be nice to have some form of video meetings but that seems like a pain to implement. Maybe go with the ability to create meetings on another video meet platform.
- Deliverables
   - A book club landing page.
   - Add database/backend stuff to allow for this.
   - Allow users to create book clubs and then invite people to them.
   - People should receive notifications when invited to book clubs
   - Allow book club owners to set a schedule of readings.
   - People should receive reminders when their readings are "due"
   - Book club pages will facilitate conversations on that weeks readings through a message board and the ability to schedule video calls.
   - Allow general discussion within the book club.
   - Allow moderator to remove off topic communication.
   - Wireframes for book club pages

## Phase 13 - Book Recommendations V2
- Redo the recommendation algorithm to include:
   - What friends are reading
   - Similar authors
   - Similar genres
   - Book momentum within the site
   - Perhaps allow publishers to push certain books up higher on the recommendation list
   - Maybe implement some form of AI
- Deliverables
   - Modified book bar that functions based on new algorithm.

## Phase 14 - Monetization
- If this site is to become feasible with a bunch of users we're going to have to monetize the site in some way. I'm thinking we can monetize it in several ways:
   - Google ads in freespace of website (Refuse intrusive ads).
   - Include interface to ask the user to turn off adblock. (Explain that ads are non intrusive and suggest.)
   - Add ability for companies to submit advertisement requests
   - Add ability for publishers to pay us to push a book higher in search/recommendations.
   - Add a pro subscription for users that allows a certain featureset
      - Private writings - writings posted by users will default to public open source unless they want to pay and use the site as a publishing platform
      - Publishing help
      - Sales site
      - Ad free.
      - Let's users appear as authors.
- Deliverables
   - Implement a secure payment system. Probably a third party method like paypal.
   - Google ads throughout website. Nonintrusive
   - Updated wireframes with adspace
   - Ability for companies to submit add requests and pay
   - Please turn off adblock modal
   - Add pro user option on user pages and enable pro features when they subscribe.
   - Establish monthly payments for pro users.

## Phase 15 - Author Pages
- Add a landing page for authors that shows all their books and lets people comment on the author.
- Delivarables
   - Landing page for author
      - Shows books they have written
      - Gives a bio
      - Allow author to publish announcements
      - Allows people to subscribe to authors and receive notifications on announcements
   - Edit database and backend to allow for these pages
   - Ability for authors to ask to be removed from the website (books and author).
   - Wireframes for author pages

## Phase 16 - Privacy Settings
- Ability to hide profile from public, block users, hide user's notes/blogs/wirtings(if subscribed)
- Deliverables
   - Standard social media privacy settings:
      - Public, friend-only, private* for book activity, book club activity, notes/blogs/writings(if subscribed)
   - Database/backend modifications to enable this
   - Wireframes for each privacy setting on user profile.

## Phase 17 - Personal Writings
- Extend the notes/blogs functionality to allow users to post their own writings and take in comments from the community.
- Deliverables
   - Updated writing system to allow better formatting of text.
   - New page on user profile that contains all the users custom writings w/ wireframes
   - Add comment section on these to allow for comments
   - Allow forks of public books to let people add to the story
   - Pro users will have the ability to hide the writing from the public or give previews.
   - Pro users can sell the book with rights to modify or just rights to own.
   - Look into legality issues and how publishing actually works.

## Phase 18 - Group Writings
- Extend personal writings functionality to enable group writing projects for those interested. This is cool for nonfiction writings and research paper type stuff.
- Deliverables
   - User will now be able to add others to their custom writings as authors/editors.
