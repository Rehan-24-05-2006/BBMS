# 🩸 Blood Bank Management System

<p align="center">
  <img src="https://img.shields.io/badge/Blood-Bank-red?style=for-the-badge&logo=heart&logoColor=white" alt="Blood Bank" />
  <img src="https://img.shields.io/badge/Life-Saver-brightgreen?style=for-the-badge&logo=heartbeat&logoColor=white" alt="Life Saver" />
</p>

<p align="center">
  <b>A comprehensive web-based platform for managing blood donors, inventory, and requests efficiently.</b>
</p>

<p align="center">
  <a href="https://github.com/Rehan-24-05-2006/BBMS">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repo" />
  </a>
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-Framework-lightgrey?style=for-the-badge&logo=express" alt="Express.js" />
  <img src="https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge&logo=mysql" alt="MySQL" />
  <img src="https://img.shields.io/badge/EJS-Template%20Engine-red?style=for-the-badge&logo=ejs" alt="EJS" />
</p>

---

## 📌 About

**Blood Bank Management System (BBMS)** is a full-stack web application designed to streamline the management of blood donors, blood availability, and blood requests. The system provides an intuitive interface for hospitals, blood banks, and donors to connect and manage life-saving resources effectively.

> **"Every drop counts - Save lives with efficient blood management."**

---

## ✨ Features

### 👤 **User Management**
- Donor Registration & Login System
- Donor Profile Management
- Secure Authentication

### 🩸 **Blood Management**
- Blood Group-based Search
- Real-time Blood Availability Check
- Blood Inventory Management
- Blood Request & Purchase System

### 📊 **Dashboard & Reporting**
- Blood Group-wise Availability
- Inventory Statistics
- Request History

### 🔒 **Security & Database**
- MySQL Database Integration
- Secure Data Storage
- UUID for Unique Identifiers
- Method-Override for HTTP Methods

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **Node.js** | Backend Runtime Environment |
| **Express.js** | Web Application Framework |
| **EJS** | Server-Side Rendering |
| **MySQL** | Relational Database |
| **MySQL2** | Database Connectivity |
| **UUID** | Unique Identifiers Generation |
| **Method-Override** | HTTP Method Handling |

---

## 🔄 Application Flow

┌─────────────┐
│ User │
└──────┬──────┘
│
▼
┌─────────────┐
│ EJS Frontend│ ◄── Dynamic Server-Side Rendering
└──────┬──────┘
│
▼
┌─────────────┐
│Express.js │
│ Server │
└──────┬──────┘
│
├──► Authentication
├──► Donor Management
├──► Blood Search
├──► Blood Requests
└──► Inventory Management
│
▼
┌─────────────┐
│ MySQL DB │
└─────────────┘


---

## 🎯 Objective

The primary goal of BBMS is to:

- 🏥 Provide a **centralized system** for managing blood donors and blood inventory
- 🔍 Make **blood availability search** quick and efficient
- 📝 Streamline **blood request management**
- 🌐 Offer an **easy-to-use interface** for all stakeholders
- 💾 Maintain **secure and organized** data storage

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn package manager

### 1️⃣ Clone the Repository
git clone https://github.com/Rehan-24-05-2006/BBMS.git
cd BBMS

###2️⃣ Install Dependencies
npm install

###3️⃣ Configure MySQL
CREATE DATABASE blood_bank_db;

###4️⃣ Start the Application
node index.js

###5️⃣ Access the Application
Open your browser and navigate to:
http://localhost:3000

---

###📂 Project Structure
BBMS/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   ├── donorController.js  # Donor management logic
│   ├── bloodController.js  # Blood inventory logic
│   └── requestController.js # Request handling logic
├── models/
│   ├── donorModel.js       # Donor data model
│   ├── bloodModel.js       # Blood inventory model
│   └── requestModel.js     # Request model
├── routes/
│   ├── donorRoutes.js      # Donor-related routes
│   ├── bloodRoutes.js      # Blood management routes
│   └── requestRoutes.js    # Request routes
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── index.js               # Application entry point
├── package.json
└── README.md

📸 Screenshots
<p align="center"> <i>🎨 UI/UX coming soon - Stay tuned for screenshots!</i> </p>
🔗 Useful Links
Resource	Link
📦 GitHub Repository	BBMS on GitHub
🐛 Report Issues	Issue Tracker
💡 Suggest Features	Feature Requests
📚 Documentation	Wiki
🤝 Contributing
We welcome contributions to BBMS! Here's how you can help:

🍴 Fork the repository

🌿 Create a feature branch (git checkout -b feature/AmazingFeature)

💾 Commit your changes (git commit -m 'Add some AmazingFeature')

📤 Push to the branch (git push origin feature/AmazingFeature)

🔄 Open a Pull Request

Contribution Guidelines
Follow the existing code style

Write clear commit messages

Update documentation as needed

Add tests for new features

👨‍💻 Developer
<table> <tr> <td align="center"> <a href="https://github.com/Rehan-24-05-2006"> <img src="https://github.com/Rehan-24-05-2006.png" width="100px;" alt="Rehan Khan"/><br /> <sub><b>Rehan Khan</b></sub> </a><br /> <sub>💻 Java Backend & Full-Stack Developer</sub> </td> </tr> </table>
Connect with the Developer:

📧 Email

🔗 LinkedIn

🐦 Twitter

🐙 GitHub

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

MIT License

Copyright (c) 2024 Rehan Khan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
🌟 Support
<p align="center"> <b>⭐ If you find this project useful, please consider giving it a star!</b> </p><p align="center"> <a href="https://github.com/Rehan-24-05-2006/BBMS"> <img src="https://img.shields.io/github/stars/Rehan-24-05-2006/BBMS?style=social" alt="GitHub stars" /> </a> <a href="https://github.com/Rehan-24-05-2006/BBMS/network/members"> <img src="https://img.shields.io/github/forks/Rehan-24-05-2006/BBMS?style=social" alt="GitHub forks" /> </a> <a href="https://github.com/Rehan-24-05-2006/BBMS/watchers"> <img src="https://img.shields.io/github/watchers/Rehan-24-05-2006/BBMS?style=social" alt="GitHub watchers" /> </a> </p>
🏆 Acknowledgments
🩸 All blood donors who save lives every day

🏥 Healthcare workers and blood banks

🌍 Open-source community for amazing tools

💻 Everyone who contributes to making this project better

<p align="center"> <b>Made with ❤️ by Rehan Khan</b><br /> <i>"Every donation saves a life. Every life is precious."</i> </p><hr /><p align="center"> <sub>© 2024 Blood Bank Management System. All rights reserved.</sub> </p> 
