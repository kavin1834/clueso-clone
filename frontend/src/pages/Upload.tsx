import { useState } from "react";
import { createVideo, uploadVideo } from "../api/video";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [msg, setMsg] = useState("");

const handleSubmit = async () => {
  if (!title || !file) {
    setMsg("Title and file required");
    return;
  }

  setMsg("Uploading...");

  try {
    const video = await createVideo(title);
    await uploadVideo(video.id, file);

    console.log("Upload successful");
    setMsg("Video uploaded successfully. Check Dashboard.");
  } catch (err) {
    console.error(err);
    setMsg("Upload failed");
  }
};


  return (
    <div>
      <h2>Upload Video</h2>

      <input
        placeholder="Video title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="file"
        onChange={e => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleSubmit}>Upload</button>

      <p>{msg}</p>
    </div>
  );
}
