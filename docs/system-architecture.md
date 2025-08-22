# System Architecture

## 1. Introduction

This document provides an overview of the system architecture for Dancing With Life. It outlines the main components,
technology stack, data flow, deployment strategy, and future considerations. The goal is to help developers understand
the overall structure and interactions within the system.

## 2. Technology Stack

| Layer       | Technology                         |
|-------------|------------------------------------|
| Frontend    | TypeScript, HTML, CSS, React, Next |
| Backend     | TypeScript, SQL                    |
| Styling     | Prettier, ESLint                   |
| Versioning  | Git, Github                        |
| Testing     | Jest, Playwright                   |
| Deployment  | Vercel, Supabase                   |
| Performance | Lighthouse                         |
 
## 3. Architecture Diagram

[architecture-diagram.mmd](../public/diagrams/architecture-diagram.mmd)

## 4. Presentation Layer

- Rendering the user interface and presenting data visually to users.
- Providing responsive layout and accessibility for various devices and screen sizes.
- Collecting and forwarding user input to the backend.

## 5. Application Layer

- Managing user authentication, authorization, and session states. 
- Handling all aspects of article management.
- Orchestrating data flow between the frontend, backend services, and databases.

## 6. Data Layer

- Creating, reading, updating, or deleting data as requested by the application layer.
- Enforcing data integrity and consistency through constraints and transactions.
- Storing structured data reliably and efficiently.
