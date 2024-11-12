# Scalable Real-Time Chat Application

A highly scalable real-time chat application built with Next.js, Redis, and Socket.io, structured using Turborepo for optimal monorepo management. This project demonstrates handling large-scale, real-time communication across multiple server instances, ensuring seamless interaction between users regardless of the server they connect to.

## 🚀 Features

- Real-Time Messaging: Users can send and receive messages instantly.
- Scalability: Supports horizontal scaling, capable of managing a high number of concurrent users.
- Redis Pub/Sub Integration: Redis Pub/Sub bridges multiple server instances, ensuring seamless cross-server communication.
- Turborepo Structure: Organized as a monorepo with distinct apps and packages for easy scalability and maintainability.

---

## 🛠️ Technologies Used

- Next.js: React framework for server-rendered and static web applications.
- Socket.io: Enables WebSocket-based, real-time communication.
- Redis: Used as a Pub/Sub layer to link multiple server instances.
- Turborepo: Manages monorepo structure and optimizes build processes.
- TypeScript: Ensures type safety and improves developer experience.

---

## 🧩 Problem: Scalability with Sockets

In a standard WebSocket setup, a single server handles all communication. But as the user base grows, this structure becomes limited:

1. Server Capacity: One server may not suffice for a large user base.
2. Disconnected Servers: Introducing multiple servers to manage traffic means users connected to different servers cannot communicate with each other.

Issue\*\*: Users on Server 1 cannot interact with users on Server 2, as there’s no inter-server communication channel.

---

## 🛠️ Solution: Redis Pub/Sub for Scalable Communication

To resolve this, we use Redis as a Pub/Sub broker to allow communication between multiple servers:

1. Publish-Subscribe Model\*\*: Each server publishes messages to a Redis channel when a user sends a message.
2. Server Synchronization\*\*: All servers subscribe to this Redis channel and relay messages to their clients, enabling cross-server communication.

## 🚀 Getting Started

### Prerequisites

- Node.js
- Redis
- Turborepo

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/realtime-chat-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd realtime-chat-app
   ```
3. Install dependencies for all apps and packages:
   ```bash
   npm install
   ```
4. Start Redis on your local machine or configure a Redis cloud provider.

### Running the Application

1. Start the Redis server:
   ```bash
   redis-server
   ```
2. Start the development environment for both client and server:
   ```bash
   npm run dev
   ```
