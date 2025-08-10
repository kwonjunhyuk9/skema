# System Architecture

## 1. Introduction

This document provides an overview of the system architecture for Dancing With Life. It outlines the main components,
technology stack, data flow, deployment strategy, and future considerations. The goal is to help developers understand
the overall structure and interactions within the system.

[//]: # (TODO : Add Architecture Diagram)

## 2. Architecture Diagram

## 3. Technology Stack

| Layer       | Technology                                          |
|-------------|-----------------------------------------------------|
| Frontend    | TypeScript, React, HTML, CSS                        |
| Backend     | Node, Next, SQL                                     |
| Styling     | Prettier, ESLint                                    |
| Versioning  | Git, Github                                         |
| Testing     | Jest, Cypress, Github Actions                       |
| Deployment  | Vercel                                              |
| Performance | Lighthouse, Vercel Analytics, Vercel Speed Insights |

## 4. Presentation Layer

- Rendering the user interface and presenting data visually to users.
- Collecting and forwarding user input to the backend.
- Providing responsive layout and accessibility for various devices and screen sizes.
- Managing application state on the client side, such as the current page or logged-in status.
- Handling client-side validation for faster feedback

## 5. Application Layer

- Executing business logic, such as validating user actions and enforcing application rules.
- Orchestrating data flow between the frontend, backend services, and databases.
- Managing user authentication, authorization, and session states.
- Processing API requests and responses.
- Integrating and communicating with external services.

## 6. Data Layer

- Storing structured data reliably and efficiently.
- Retrieving, updating, or deleting data as requested by the application layer.
- Enforcing data integrity and consistency through constraints and transactions.
- Securing sensitive data against unauthorized access.
- Backing up and restoring data to prevent loss.
