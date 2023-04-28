# Base image
FROM openjdk:8-jre-alpine

# Set working directory
WORKDIR /app

# Copy application files
COPY . .

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "bmi-calculator.jar"]
