"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface InstaPost {
  id: string;
  display_url: string;
  shortcode: string;
  caption?: string;
}

export default function InstagramGridPage() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/insta");
        
        const edges = res.data.graphql.user.edge_owner_to_timeline_media.edges;
        const mapped = edges.map((edge: any) => ({
          id: edge.node.id,
          display_url: edge.node.display_url,
          shortcode: edge.node.shortcode,
          caption: edge.node.edge_media_to_caption.edges[0]?.node.text || "",
        }));
        setPosts(mapped);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat Instagram feed.");
      }
    };

    fetchPosts();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Instagram Grid</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={`https://www.instagram.com/p/${post.shortcode}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={post.display_url}
              alt={post.caption || "Instagram post"}
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
