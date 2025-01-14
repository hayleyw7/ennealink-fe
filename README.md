<img src="./public/ennealink.png" alt="EnneaLink Logo" align="right"/>

# Ennealink

[Access the launched application online here.](https://ennealink.herokuapp.com/)

## Table Of Contents

+ [Overview](#overview)
+ [Motivation](#motivation)
+ [Examples](#examples)
+ [Access App](#access-app)
+ [Use App](#use-app)
+ [Learning Goals](#learning-goals)
+ [Future features](#future-features)
+ [Technologies used](#technologies-used)
+ [Reflections & Wins](#reflections-and-wins)
+ [Contributors](#contributing)

## Overview

This is a social media application where a user can create an account, view information about their Myers-Briggs Type Indicator (MBTI) and Enneagram types on their profile, as well as follow and view the profiles of their friends.

## Motivation

This application was created as the final [Capstone Project](https://mod4.turing.edu/projects/capstone/) for [Turing School of Software & Design](https://turing.edu/).

The topic was chosen because we thought that it would be useful to have and use in our everyday lives. Especially in our collaborative work at Turing and throughout our personal and professional lives, we recognized the value of having a tool where we can quickly learn about peoples' strengths and motivations. EnneaLink opens the door for meaningful conversations that can create inclusive interactions across interpersonal and collaborative work.

## Examples

![New User Signup And Profile View](https://user-images.githubusercontent.com/81891209/139144699-fcbef0db-3d1c-4f56-9bc4-467befbd8f74.gif) ![Existing User Login And Friending](https://user-images.githubusercontent.com/81891209/139144196-d4a627a2-2585-456f-9e66-3106554ffe1b.gif)


## Access App

### View App Online
[Access the application online here.](https://ennealink.herokuapp.com/)

### View App Locally

Run the following codes in the terminal, in this order.

* Clone the project repository: ```git clone https://github.com/EnneaLink/ennealink-fe.git```

* Navigate to the folder: ```cd ennealink-fe```

* Install dependencies: ```npm install```

* Run local host: ```npm start```

If it doesn't automatically open, navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

## Use App

When a user first opens the application, they must create a unique username and a password. Once they do that, they must select and save their Enneagram and MBTI types via dropdowns to create their profile. If the user does not yet know their types, there are links to take the respective tests that open in new tabs.

Once their types are selected, the user is directed to their profile, where they can access a summary of each of their types, as well as external links to read more.

To add friends to follow, the user must click "friends" in the navigation bar, which takes them to a live search of all users. If they click a username, they are directed to that user's profile, where they can read about that user's types.

To follow that friend, the user can click the "follow" botton on the bottom of the friend's profile. Once the friend is created, the friend will be viewable on the "friends" page, easily accessible at any time, with their types right next to their username on the link. As with search, the user just needs to click the friend's name to view their friend's profile. To remove a friend, just click "unfollow" at the bottom of the friend's profile.

## Learning Goals

The main goals of this project were learning and implementing GraphQL from scratch, gaining more experience with React hooks, and working in tandem with a backend team for the first time. 

## Future Features

* User can access a list of other users who follow them.

* User can upload an avatar.

* User can see how their type interacts with their friends’ types.

* User can edit their username and types.

## Technologies Used

Utilizes JavaScript, React, CSS, HTML/JSX, NPM, Node, Cypress, CircleCI, Heroku, and GraphQL

Built with Visual Studio Code and Atom

Communication via GitHub Projects and Zoom

Code stored on GitHub:

* [Front-End Repository](https://github.com/EnneaLink/ennealink-fe)

* [Back-End Repository](https://github.com/EnneaLink/ennealink-be)

* [Project board on GitHub](https://github.com/orgs/EnneaLink/projects/1)

## Reflections And Wins
  * With the tight turnaround of just over two weeks for the project deadline, our full-stack team of 5 (3 frontend and 2 backend team members) learned GraphQL to be implemented on both backend and frontend (Apollo Client). This required us to rapidly learn both independently and collaboratively as we successfully used this new stretch technology in our project.
  * We were strategic in designing a productive workflow and creating clear lines of communication between our respective teams.
  * Our team thrived in paired programming as we all brought various strengths to the project, as well as divided tasks effectively to meet our strict deadlines.
  * In our first full stack project working with the backend team, we were able to spend the first phase of the project communicating and collaborating about what data we would need from the backend, where we would make requests for that data, and utilize the benefits of GraphQL to prevent us from over or under-fetching data.


## Contributing

👤  **Kim Abcouwer**
- [GitHub](https://github.com/kabcouwer)
- [LinkedIn](https://www.linkedin.com/in/kim-abcouwer)

👤  **Gunnar Runkle**
- [GitHub](https://github.com/gunnarrunner)
- [LinkedIn](https://www.linkedin.com/in/gunnar-runkle/)

👤  **Hayley Witherell**
- [GitHub](https://github.com/hayleyw7)
- [LinkedIn](https://www.linkedin.com/in/hayleywitherell/)

👤  **Mark Cawthray**
- [GitHub](https://github.com/MTCawthray)
- [LinkedIn](https://www.linkedin.com/in/mark-cawthray-996522212/)

👤  **Natalie McIntyre**
- [GitHub](https://github.com/nataliemcintyre2021)
- [LinkedIn](https://www.linkedin.com/in/nataliemcintyre1/)

[Return to top](#ennealink)
