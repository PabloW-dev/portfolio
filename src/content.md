<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" href="/favicon.png" />
  
  <title>YogaGarden</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="src/main.jsx"></script>
</body>
</html>



<header>
        <div class="header-container">
            <section id="welcome" >
                <h1>Welcome to my portfolio!</h1>
                <h2>Pablo W's portfolio: programming and design projects</h2>
            </section>
        </div>
    </header>
    
    <div class="container" >   
        <section id="projects">
            <h2>Projects:</h2>

            <div class="persistence-clicker">
                <h3>PersistenceClicker</h3>
                <p>
                    Developing a web-based clicker game using MERN stack. Features include interactive gameplay, user data persistence, responsive design, and scalable architecture.
                </p>
                <a href="https://github.com/PabloW-dev/PersistenceClicker.git" target="_blank" rel="noopener noreferrer">View porject on Github</a>
            </div>

            <div class="repose-yoga">
                <h3>ReposeYoga</h3>
                <p>
                    Web application of a client booking system for a yoga studio. Users can schedule classes and plan daily routines prioritizing rest.
                </p>
                <a href="https://github.com/PabloW-dev/ReposeYoga.git" target="_blank" rel="noopener noreferrer">View project on Github</a>
            </div>

            <div class="debate-map">
                <h3>DebateMap</h3>
                <p>
                    Platform for structured debates with turn-based logic, scoring, and moderation.
                </p>
                <a href="https://github.com/PabloW-dev/DebateMap.git" target="_blank" rel="noopener noreferrer">View project on Github</a>
            </div>
        </section>
    </div>

    <div class="container">
        <section id="cv">
            <h2>View / Download my CV</h2>
            <a href="./assets/docs/CV_Pablo_Fuster_EN.pdf" class="cv-button" target="_blank" rel="noopener noreferrer">English PDF</a>
            <a href="./assets/docs/CV_Pablo_Fuster_ES.pdf" class="cv-button" target="_blank" rel="noopener noreferrer">Spanish PDF</a>
        </section>
    </div>
    
    <div class="contact">
        <section id="contact">
            <h2>Contact:</h2>

            <p>Email: pablowfusterpastor@gmail.com</p>
            <p>GitHub: <a href="https://github.com/PabloW-dev" target="_blank" rel="noopener noreferrer">PabloW-dev</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/pablo-w-fuster-pastor-31a037401" target="_blank" rel="noopener noreferrer">pablo-w-fuster-pastor</a></p>
        </section>
    </div>




    .header-container {
    max-width: 100%;
    width: 95%;
    text-align: center;
    #welcome {
        color: var(--text-color);
        h1 {
            font-size: 4rem;
            padding: 4rem 0 0 0;
            margin-bottom: 3rem;
        }

        h2 {
            opacity: 0.6;
            font-size: 1.4rem;
            padding: 0 6rem;
        }
    }
}

.container {
    margin-top: 4rem;
    max-width: 100%;
    width: 95%;
    padding: 1rem;
    color: var(--text-color);
    section {
        h2 {
            padding-left: 2rem;
            font-size: 2.6rem;
        }

        div {
            text-align: center;
            margin: 5rem 0;

            h3 {
                opacity: 0.6;
                font-size: 2rem;
            }

            p {
                margin: 3rem 5rem;
                font-size: 1.15rem;
            }

            a {
                display: inline-block;
                background-color: var(--hover);
                color: var(--negro);
                padding: 0.6rem 1.2rem;
                border-radius: 5px;
                text-decoration: none;
                font-weight: bold;
                box-shadow: 0 3px 6px rgba(255, 255, 255, 0.1);
                transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;

                &:hover {
                    background-color: var(--cyan);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 12px rgba(255, 255, 255, 0.2);
                    cursor: pointer;
                }

                &:focus {
                    outline: 4px solid var(--cyan);
                    outline-offset: 2px;
                }
            }
        }
    }
}

.contact {
    max-width: 100%;
    width: 95%;
    padding: 1rem;
    color: var(--text-color);
    section {
        h2 {
            padding-left: 2rem;
            font-size: 2.6rem;
        }

        p {
            margin: 0.5rem;
            font-size: 1.2rem;
        }

        a {
            color: var(--cyan);
            text-decoration: none;
        }
    }
}


.cv-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--hover);
    color: var(--negro);
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    margin: 1.5rem 3rem;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: var(--cyan);
        transform: translateY(-2px);
    }

    &:focus {
        outline: 4px solid var(--cyan);
        outline-offset: 2px;
    }
}