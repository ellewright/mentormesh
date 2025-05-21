# MentorMesh
## A Peer-to-Peer Learning Platform

Need a job done, but short on cash? Looking to grow or share your talents? Look no further than MentorMesh. This project is a full-stack application with the intention to showcasing a new form of freelance work, where vendors offer their skills in exchange for others' skills. This project contains a frontend created using Vite + ReactJS and a backend using Python + FastAPI. This project is not at a complete state, but it will ultimately provide functionality for the following:

* Browsing offered Skills
* Creating a User profile
* Posting Skill offers to a User profile
* Processing Skill transactions between Users

## Getting Started

To use this project yourself:

1. In the directory where you want the application stored on your computer, clone this repository. In your terminal, enter these commands:

```
git clone https://github.com/ellewright/mentormesh
cd mentormesh
```

2. Move into the backend directory, create a Python virtual environment, and activate it with these terminal commands:

```
cd backend
python -m venv venv
venv\Scripts\activate
```

3. In the terminal, install FastAPI and run the backend with these commands:

```
pip install "fastapi[standard]"
fastapi run main.py
```

4. Open a new terminal, and from the root directory, use these commands to move to the frontend and install dependencies:

```
cd frontend
npm i
```

7. In the root of the frontend directory, create a `.env` file, and add:

```
VITE_BASE_URL="http://localhost:8000"
```

8. Run the frontend! In your terminal, type the command:

```
npm run dev
```

## Credits

<a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by mikan933 - Flaticon</a>