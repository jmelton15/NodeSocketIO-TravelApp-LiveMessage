<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#data-storage-and-safety">Data Storage And Safety</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Capstone Project 2 - DTRI (Down To the Route of It) Refactored!
### This Is The Node.js-SocketIO Live Messenger Part of Capstone 2

This is the live messaging Node.js, Socket.io Web-socket portion of the project.
This service handles connecting users and disconnecting users as well as creating direct messaging connections between two users

### Future Plans
1.) Add group messaging 
2.) Add more fun things, currently just emojis are available

### Built With - Credits To The Following:

* [Node.js](https://nodejs.org/en/)
* [Socket.io](https://socket.io/)


<!-- DATA STORAGE AND SAFETY -->
## Authentication

 Authenticating user-to-user chat is done using an object that stores user IDs along with their socket ID when they connect.
 This allows me to emit messages "to" a specific user ID using their socket ID.
 Only users that are verified by the main site can access the messaging service.


<!-- CONTACT -->
## Contact

Your Name - [John Melton]
Email - [johnmelton.projects@gmail.com]









