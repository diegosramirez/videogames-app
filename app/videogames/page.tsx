'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Videogame } from '@/types/videogame';

export default function VideogameList() {
  const [videogames, setVideogames] = useState<Videogame[]>([]);

  useEffect(() => {
    // In a real application, this would be an API call
    setVideogames([
      {
        id: 1,
        title: "Final Fantasy VII Remake",
        genre: "Action Role-Playing",
        developer: "Square Enix",
        publisher: "Square Enix",
        releaseDate: "2020-04-09",
        platforms: ["PlayStation 4", "PlayStation 5", "PC"],
        rating: "T"
      }
    ]);
  }, []);

  const handleDelete = (id: number) => {
    setVideogames(videogames.filter(game => game.id !== id));
  };

  return (
    <div className="mt-5">
      <h1>Videogames</h1>
      <Link href="/videogames/new" className="btn btn-primary mb-3">Add New Videogame</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Developer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {videogames.map((game) => (
            <tr key={game.id}>
              <td>{game.title}</td>
              <td>{game.genre}</td>
              <td>{game.developer}</td>
              <td>
                <Link href={`/videogames/${game.id}`} className="btn btn-sm btn-info me-2">View</Link>
                <Link href={`/videogames/${game.id}/edit`} className="btn btn-sm btn-warning me-2">Edit</Link>
                <button onClick={() => handleDelete(game.id)} className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}