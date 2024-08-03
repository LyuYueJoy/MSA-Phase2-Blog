# MSA-Phase2-Blog

## Introduction

Welcome to My Blog Application! This is a full stack web application developed .The blog allows users to create, read, update, and delete articles, and it supports theme switching between dark and light modes.

## What I'm Proud Of

One thing I am proud of is that I implemented the Containerize project using docker through videos and tutorials
## Project Features

#### Frontend:
- **Vite,React,Typescript+swc** 
- **MUI** 
- **React Router** 

#### Backend:
- **.NET 8 and C#** 
- **EFCore** 
- **SQLite Database** 
- **CRUD Operations:** The application supports Create, Read, Update, and Delete (CRUD) for blog articles.

### Advanced Features
- **Theme Switching:** switch between dark and light themes.
- **Unit Testing:** Unit tests are written for the backend
- **Docker Containerization** 

### database
    public class Article
    {
        [Key]
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdateAt {  get; set; } = DateTime.Now;
        public string Author { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

    }
## How to Run the Project

### Backend
1. cd backend
2. dotnet add package Microsoft.EntityFrameworkCore.Sqlite
3. dotnet add package Microsoft.EntityFrameworkCore.Design
4. dotnet add package Microsoft.EntityFrameworkCore.Tools
5. dotnet ef database update

### Frontend
1. npm install
2. npm run dev

### Docker
1. docker-compose build
2. docker-compose up


