# Software Requirements Specification

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification outlines the requirements for "Dancing With Life," a personal blog website. The
document is intended for myself to better architect and implement the software system by providing a clear understanding
of its requirements.

### 1.2 Scope

"Dancing With Life" is a website designed to introduce myself and my projects while providing engaging and insightful
content on a variety of computer science topics for people of interest.

## 2. Users and Environments

### 2.1 User Classes

- Guests: Can read articles but not create, update, or delete them.
- Users: Can leave comments on articles.
- Administrators: Can create, read, update, and delete articles.

### 2.2 Operating Environment

- Hardware: Devices ranging from mobile phones to desktop computers.
- OS: macOS, Windows, Linux, iOS, Android.
- Browser: Chrome, Firefox, Safari, Edge.

## 3. Functional Requirements

[//]: # (TODO: Add User Authentication)

### 3.1 User Authentication

- Input: Username, Password.
- Output: Session on success, Error on failure.
- Processing: Validate credentials, Generate session, Handle error.
- Related Users: Guests, Users, Administrators.
- Priority: High.

[//]: # (TODO: Add Article Management)

### 3.2 Article Management

- Input: Article data.
- Output: Article created, read, updated, or deleted.
- Processing: Validate data, Handle, create, read, update, delete processes.
- Related Users: Administrators.
- Priority: High.

[//]: # (TODO: Add File Management)

### 3.3 File Management

- Input: File data.
- Output: File created, read, updated, or deleted.
- Processing: Validate data, Handle, create, read, update, delete processes.
- Related Users: Administrators.
- Priority: High.

[//]: # (TODO: Add Comment Management)

### 3.4 Comment Management

- Input: Comment data.
- Output: Comment created, read, updated, or deleted.
- Processing: Validate data, Handle, create, read, update, delete processes.
- Related Users: Users.
- Priority: Low.

## 4. Non-functional Requirements

### 4.1 Performance

- All main actions such as login, article creation, editing, and retrieval must respond within 2 seconds under the
  expected workload with up to 100 concurrent users.

### 4.2 Security

- All data must be transmitted via HTTPS.
- User credentials must be stored using strong encryption.
- Implement JWT-based authentication with secure token storage and expiration.
- Apply proper input validation and sanitization to prevent XSS, CSRF, and SQL Injection.

### 4.3 Reliability

- The system must maintain 99.9% uptime monthly.
- All failures must be logged, and errors should be handled gracefully with meaningful messages.

### 4.4 Scalability

- The system must support scaling to thousands of daily active users without degradation in performance.
- Backend and database infrastructure should be horizontally scalable.

### 4.5 Accessibility

- The UI must conform to WCAG 2.1 Level AA accessibility standards.

### 4.6 Maintainability

- The codebase must be modular and well-documented to support ongoing maintenance.
- The application must be deployable in cloud environments to support portability across platforms.

## 5. External Interface Requirements

### 5.1 User Interface

- Interactive elements with engaging animations.
- Responsive to different screen sizes.

### 5.2 Communication Interface

- HTTPS for all network traffic.
- JSON for API communication.
