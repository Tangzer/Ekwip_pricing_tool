FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Set environment variables
# ENV API_KEY=$API_KEY

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Start the application
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "backend:app"]