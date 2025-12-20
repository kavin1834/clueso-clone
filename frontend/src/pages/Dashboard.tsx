import { useEffect, useState } from "react";
import { getMyVideos } from "../api/video";

export default function Dashboard() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    getMyVideos().then(setVideos);
  }, []);

  return (
    <div>
      <h2>My Videos</h2>
      {videos.map(v => (
        <div key={v.id}>
          <strong>{v.title}</strong> — {v.status}
        </div>
      ))}
    </div>
  );
}
