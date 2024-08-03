# Use the .NET SDK to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy the project file and restore dependencies
COPY backend/backend.csproj ./backend/
WORKDIR /app/backend
RUN dotnet restore

# Copy the rest of the application
COPY backend/. ./

# Build the application
RUN dotnet publish -c Release -o /app/out

# Use the .NET runtime to run the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy the published output from the build stage
COPY --from=build /app/out .

# Copy the database file to a different directory
COPY backend/MyBlogDatabase.sqlite /app/

# Expose port for HTTP
EXPOSE 8080

# Set environment variables for URL bindings
ENV ASPNETCORE_URLS=http://+:8080

# Start the application
ENTRYPOINT ["dotnet", "backend.dll"]
