Product Inventory Dashboard

A full-stack inventory management dashboard built with Angular, Tailwind CSS, and a lightweight Node.js (Express) API with a simple JSON-based data store.

Project Overview

This application provides a modern, responsive dashboard for managing products in an inventory.
It includes product listing, creation, deletion, client-side filtering, validation, responsive layout, and full integration with a custom REST API.

Tech Stack

Frontend

Angular 17
Tailwind CSS
TypeScript
RxJS / Angular Services for state handling

Backend

Node.js + Express
In-memory / JSON file storage (data.json)
CORS enabled


Backend Setup

Clone the Repository for backend '
https://github.com/sunildhyan/meanstack/tree/main/backend
cd backend,
npm install,
npm start
Backend will run at:

▶ http://localhost:3000


| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| POST   | `/api/products`     | Add a new product    |
| DELETE | `/api/products/:id` | Delete product by ID |



Frontend Setup

Clone the Repository for frontend '
https://github.com/sunildhyan/meanstack-frontend

cd frontend,
npm install,
ng serve

Frontend will run at:

▶ http://localhost:4200


Technical Justification

I chose Angular for its strong architecture, built-in form handling, and RxJS-powered reactive data flow, which made the product list, validation, and API integration clean and maintainable.
Tailwind CSS was chosen for rapid, consistent styling without relying on external UI frameworks, demonstrating core CSS ability while keeping components visually clean and responsive.

On the backend, Node.js with Express provided a fast and simple environment to build the required REST API. Using a JSON file for storage keeps the implementation lightweight while still simulating real persistence.
