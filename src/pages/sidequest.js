import { Container } from "react-bootstrap";
import Particles from "../components/particles";
import "../App.css";
import { useDarkMode } from "../context/DarkModeContext";
import CommentsSection from "../components/CommentsSection";
import LikeButton from "../components/LikeButton";
import NewsletterSignup from "../components/NewsletterSignup";

function SideQuest() {
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
        <h1>Side Quests</h1>
        <p>
          This page is a placeholder for side quests. It will be updated with
          content in the future.
        </p>
        <p>
          Stay tuned for more exciting adventures and projects that will be added
          here!
        </p>

        <div className="mt-5 pt-4 border-top">
          <div className="d-flex justify-content-between mb-4">
            <LikeButton entityId="sidequests-page" entityType="page" />
          </div>
          <NewsletterSignup />
          <CommentsSection entityId="sidequests-page" entityType="page" />
        </div>
      </Container>
    </div>
  );
}
export default SideQuest;