# Task Manager Web Application 

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [User Authentication](#user-authentication)
6. [Task Management](#task-management)
   - [Task CRUD Operations](#task-crud-operations)
   - [Task Display and Filters](#task-display-and-filters)
7. [Backend Integration with MockAPI.io](#backend-integration-with-mockapiio)
   - [MockAPI.io Setup](#mockapiio-setup)
   - [Ajax Requests](#ajax-requests)
8. [User Interface](#user-interface)
9. [Conclusion](#conclusion)
10. [Acknowledgments](#acknowledgments)

## 1. Introduction
The Task Manager web application is designed to provide users with a platform for managing their tasks efficiently. Users can sign up, log in, and perform various task operations such as creating, updating, deleting, and marking tasks as completed. The application utilizes MockAPI.io as the backend to handle task data.

## 2. Features
- User authentication with sign-up, login, and logout functionality.
- Task management with CRUD operations (Create, Read, Update, Delete).
- Organized display of tasks with filtering options (all tasks, completed tasks, active tasks).
- Backend integration with MockAPI.io for storing and retrieving task data.
- User-friendly and visually pleasing user interface.

## 3. Technologies Used
- HTML 
- CSS
- JavaScript
- Bootstrap 5
- Firebase Authentication
- Firebase Realtime Database
- MockAPI.io

## 4. Getting Started

### 4.1 Prerequisites
- Web browser
- Code editor (e.g., Visual Studio Code)

### 4.2 Installation
1. Clone the repository: `git clone https://github.com/murateshimov/MockAPI-powered-Task-Manager.git`
2. Open the project in your code editor.

## 5. User Authentication
The user authentication system is implemented using Firebase Authentication. Users can sign up, log in, and log out using their email addresses and passwords.

## 6. Task Management

### 6.1 Task CRUD Operations
Users can perform the following operations on tasks:
- **Create**: Add a new task.
- **Read**: View the list of tasks.
- **Update**: Modify the content of a task.
- **Delete**: Remove a task.

### 6.2 Task Display and Filters
Tasks are displayed in an organized manner with filters for different views, including all tasks, completed tasks, and active tasks.

## 7. Backend Integration with MockAPI.io

### 7.1 MockAPI.io Setup
- Clone the MockAPI.io project to your account.
- Configure the API endpoint in the JavaScript code.

### 7.2 Ajax Requests
Ajax requests are used to fetch and send data between the frontend and MockAPI.io, enabling seamless interaction with the backend.

## 8. User Interface
The user interface is designed to be intuitive and visually pleasing. It includes animations and transitions for a smoother user experience.

## 9. Conclusion
The Task Manager web application provides a user-friendly interface for efficient task management. Users can easily organize, update, and delete tasks, making it a valuable tool for personal productivity.

## 10. Acknowledgments
Special thanks to [Firebase](https://firebase.google.com/) for providing authentication services and [MockAPI.io](https://www.mockapi.io/) for enabling backend functionality.
