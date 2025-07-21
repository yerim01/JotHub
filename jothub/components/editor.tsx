"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

import "@blocknote/mantine/style.css";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable = true }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const content = JSON.stringify(editor.topLevelBlocks, null, 2);
      onChange(content);
    }, 1000);
    return () => clearInterval(interval);
  }, [editor, onChange]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.querySelector(".ProseMirror") as HTMLElement | null;
      if (el) {
        el.setAttribute("contentEditable", editable ? "true" : "false");
      }
    }, 100); // wait for mount
    return () => clearTimeout(timer);
  }, [editable]);

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;
