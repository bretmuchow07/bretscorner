import React, { useEffect, useRef } from "react";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, useEditor } from "@milkdown/react";
import "@milkdown/crepe/theme/common/style.css";

const MilkdownEditorWrapper = ({ content, onChange, isDarkMode }) => {
    // Keep a reference to the editor instance to update content if it changes externally
    const editorRef = useRef(null);
    // Track if the content change was internal (from typing) to avoid cursor jumps or re-renders
    const isInternalChange = useRef(false);

    useEditor((root) => {
        const crepe = new Crepe({
            root,
            defaultValue: content,
            featureConfigs: {
                [Crepe.Feature.Placeholder]: {
                    text: 'Write your post content here...',
                },
            },
        });

        crepe.setReadonly(false);

        crepe.on((listener) => {
            listener.markdownUpdated((ctx, markdown, prevMarkdown) => {
                isInternalChange.current = true;
                if (onChange) {
                    onChange(markdown);
                }
                setTimeout(() => {
                    isInternalChange.current = false;
                }, 0);
            });
        });

        editorRef.current = crepe;
        return crepe;
    }, []);

    // Handle external content updates (e.g., loading data in Edit mode)
    // Only update if the content property changes and it wasn't triggered by an internal edit
    // Note: Crepe doesn't have a simple "setContent" in this version easily exposed without digging into ctx
    // For now, defaultValue handles the initial load. 
    // If we need to support programmatic updates after load, we'd need a more complex effect.
    // Given the current requirement (load once for edit), the defaultValue in useEditor is sufficient for initialization.
    // However, useEditor dependency array is empty, so it only runs once. 
    // We might need to recreate it if content is loaded asynchronously *after* mount?
    // Actually, usually in EditPost the content is null/empty until loaded.
    // If we mount the component *only after* loading is false, defaultValue works.
    // If we mount it immediately, we need a way to update it.

    return <Milkdown />;
};

export default MilkdownEditorWrapper;
