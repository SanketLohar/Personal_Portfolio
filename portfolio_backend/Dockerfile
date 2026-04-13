# ----------- STAGE 1: Build -----------
FROM maven:3.9.9-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy pom.xml first (for dependency caching)
COPY pom.xml .

RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build jar
RUN mvn clean package -DskipTests

# ----------- STAGE 2: Run -----------
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy jar from builder
COPY --from=builder /app/target/*.jar app.jar

# Expose port (Render uses 8080 by default)
EXPOSE 8080

# Run app
ENTRYPOINT ["java", "-jar", "app.jar"]