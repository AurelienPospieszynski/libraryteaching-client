# Library Management System (Client)

## Description

This part of the application serves as the frontend for the Library Management System. It provides a user interface for interacting with the library's catalog, including viewing, adding, updating, and deleting books, authors, and borrowing records.

The main goal of this project is to serve as a practical introduction to Angular and frontend development, complementing the backend services developed with Node.js, Fastify, and PostgreSQL.

The focus is mainly about implementing services, handling datas, interacting with a backend. No UI focus at all in this repo.

## Technos

- [Angular](https://angular.io/docs) v17: A platform and framework for building single-page client applications using HTML and TypeScript.
- [RxJS](https://rxjs.dev/guide/overview): A library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.
- [Bootstrap](https://getbootstrap.com/docs/): A free and open-source CSS framework directed at responsive, mobile-first front-end web development.

## Getting Started

1. Clone the frontend repository:
   `git clone [urlFrontendProject]`
2. Navigate to the project directory:
   `cd libraryteaching-client`
3. Install dependencies:
   `npm install`
4. Serve the application:
   `ng serve`
5. Open your browser and go to:
   `http://localhost:4200`

## Features

- A dynamic interface for managing books, authors, and borrowing records.
- Forms for adding and editing entities with validation.
- Error handling and user feedback.

## Project Structure

- `/src/app/components`: Angular components for each major section of the application (books, authors, borrow records).
- `/src/app/services`: Services for handling HTTP requests to the backend.
- `/src/environments`: Environment-specific configuration files.
- `src/app/app.component.*`: Root component files.
- `src/app/app.module.ts`: Root module definition.

## Integration with Backend

The frontend interacts with the backend through HTTP requests facilitated by Angular's `HttpClient`. Ensure that the backend server is running and accessible at `http://localhost:3000`.

## Development Notes

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli).
- For styling, [Bootstrap](https://getbootstrap.com/) is used and can be customized in `/src/styles.scss`.

## Contributing

Contributions to improve the application are welcome. Please follow the standard fork-and-pull request workflow.

## License

This project is open-sourced under the [MIT license](https://opensource.org/licenses/MIT).
