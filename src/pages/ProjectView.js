import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { projectsData } from '../data/projects'; // Static data
import { useDarkMode } from '../context/DarkModeContext';
import CommentsSection from '../components/CommentsSection';
import LikeButton from '../components/LikeButton';
import NewsletterSignup from '../components/NewsletterSignup';

// I'll use Milkdown again for consistency since it is already installed and setup
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import "@milkdown/crepe/theme/common/style.css";

const MilkdownReader = ({ content }) => {
    useEditor((root) => {
        const crepe = new Crepe({
            root,
            defaultValue: content,
            featureConfigs: {
                [Crepe.Feature.Placeholder]: { text: '' },
            }
        });
        crepe.setReadonly(true);
        return crepe;
    }, [content]);

    return <Milkdown />;
};

const ProjectView = () => {
    const { id } = useParams();
    const { isDarkMode } = useDarkMode();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const found = projectsData.find(p => p.id === id);
        setProject(found);
    }, [id]);

    if (!project) return (
        <Container className="py-5 text-center">
            <h3>Project not found</h3>
            <Link to="/projects" className="btn btn-primary mt-3">Back to Projects</Link>
        </Container>
    );

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <div className="mb-4">
                        <Link to="/projects" className="text-decoration-none text-muted mb-2 d-inline-block">← Back to Projects</Link>
                        <h1 className={`display-4 fw-bold mb-3 ${isDarkMode ? 'text-white' : ''}`}>
                            {project.title}
                        </h1>
                    </div>

                    <div className={`post-content ${isDarkMode ? 'dark-mode-content' : ''}`} style={{
                        backgroundColor: isDarkMode ? '#1f2937' : '#fff',
                        padding: '24px',
                        borderRadius: '8px',
                        color: isDarkMode ? '#e5e7eb' : '#374151',
                        border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb'
                    }}>
                        <MilkdownProvider>
                            <MilkdownReader content={project.content} />
                        </MilkdownProvider>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-5 py-4 border-top border-bottom">
                        {/* Using project-ID for likes */}
                        <LikeButton entityId={project.id} entityType="project" />
                    </div>

                    <div className="mt-5">
                        <NewsletterSignup />
                    </div>

                    <CommentsSection entityId={project.id} entityType="project" />
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectView;
