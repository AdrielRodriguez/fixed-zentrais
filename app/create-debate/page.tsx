"use client";

import { useState } from "react";

export default function CreateDebatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("Debate created successfully (UI only)");
    console.log({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 20 }}>
      <h1>Create a Debate</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <input
          placeholder="Debate topic"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe the debate context"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Create Debate</button>
      </form>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
