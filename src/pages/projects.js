import React from 'react';
import { Container } from "react-bootstrap";
import Particles from "../components/particles";
import "../App.css";
import { useDarkMode } from "../context/DarkModeContext";


function Projects() {
  const { isDarkMode } = useDarkMode();

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {isDarkMode && (
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#00bfff", "#ff69b4"]}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1}
          cameraDistance={20}
          className="fixed-top w-100 h-100"
        />
      )}
      <Container
        className="my-4"
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textShadow: "0 2px 8px #000",
        }}
      >
        <h1>Projects</h1>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Project Showcase"
          className="img-fluid rounded mb-4"
        />
     <p>
        Welcome to my little corner of the internet where I get to show off some
        things I’ve built, tinkered with, or just had fun working on. No big promises,
        just cool stuff I’m excited about.
      </p>
      <p>
        Some of these projects are complete, some are still in the works, and some
        might never be “done” — but they’re all things I’ve poured time, curiosity,
        and a good dose of late-night energy into.
      </p>

        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-12">
            <div className="d-flex align-items-center bg-dark rounded shadow p-3 flex-md-row flex-column">
              <img
                src="https://via.placeholder.com/150x100"
                className="rounded me-4 mb-3 mb-md-0"
                alt="Project 1"
                style={{ width: 150, height: 100, objectFit: "cover" }}
              />
              <div>
                <h5>Project 1</h5>
                <p className="mb-2">
                  This was one of those “what if I just tried this?” ideas that turned
                  into something super fun. I didn’t expect it to work this well, but it
                  did — and now it exists!
                </p>
                <a href="#" className="btn btn-link p-0 text-primary">
                  Check it out &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-12">
            <div className="d-flex align-items-center bg-dark rounded shadow p-3 flex-md-row flex-column mt-4">
              <img
                src="https://via.placeholder.com/150x100"
                className="rounded me-4 mb-3 mb-md-0"
                alt="Project 2"
                style={{ width: 150, height: 100, objectFit: "cover" }}
              />
              <div>
                <h5>Project 2</h5>
                <p className="mb-2">
                  This one's a bit of a passion project — something I’ve been tweaking
                  over time just because it’s fun. Nothing too fancy, just a neat thing
                  I’m happy with.
                </p>
                <a href="#" className="btn btn-link p-0 text-primary">
                  Peek inside &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-12">
            <div className="d-flex align-items-center bg-dark rounded shadow p-3 flex-md-row flex-column mt-4">
              <img
                src="https://via.placeholder.com/150x100"
                className="rounded me-4 mb-3 mb-md-0"
                alt="Project 3"
                style={{ width: 150, height: 100, objectFit: "cover" }}
              />
              <div>
                <h5>Project 3</h5>
                <p className="mb-2">
                  Honestly? I made this just because it seemed cool. There’s probably a
                  smarter way to do it, but this way was more fun.
                </p>
                <a href="#" className="btn btn-link p-0 text-primary">
                  Take a look &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default Projects;
