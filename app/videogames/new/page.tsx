'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Videogame } from '@/types/videogame';

export default function NewVideogame() {
  const router = useRouter();
  const [videogame, setVideogame] = useState<Partial<Videogame>>({
    title: '',
    genre: '',
    developer: '',
    publisher: '',
    releaseDate: '',
    platforms: [],
    rating: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVideogame(prev => ({ ...prev, [name]: value }));
  };

  const handlePlatformsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlatforms = Array.from(e.target.selectedOptions, option => option.value);
    setVideogame(prev => ({ ...prev, platforms: selectedPlatforms }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would be an API call
    console.log('New videogame:', videogame);
    router.push('/videogames');
  };

  return (
    <div className="mt-5">
      <h1>Add New Videogame</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={videogame.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input type="text" className="form-control" id="genre" name="genre" value={videogame.genre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="developer" className="form-label">Developer</label>
          <input type="text" className="form-control" id="developer" name="developer" value={videogame.developer} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">Publisher</label>
          <input type="text" className="form-control" id="publisher" name="publisher" value={videogame.publisher} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="releaseDate" className="form-label">Release Date</label>
          <input type="date" className="form-control" id="releaseDate" name="releaseDate" value={videogame.releaseDate} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="platforms" className="form-label">Platforms</label>
          <select multiple className="form-control" id="platforms" name="platforms" value={videogame.platforms} onChange={handlePlatformsChange} required>
            <option value="PlayStation 4">PlayStation 4</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Xbox One">Xbox One</option>
            <option value="Xbox Series X/S">Xbox Series X/S</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="PC">PC</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <select className="form-control" id="rating" name="rating" value={videogame.rating} onChange={handleChange} required>
            <option value="">Select a rating</option>
            <option value="E">E (Everyone)</option>
            <option value="E10+">E10+ (Everyone 10+)</option>
            <option value="T">T (Teen)</option>
            <option value="M">M (Mature)</option>
            <option value="AO">AO (Adults Only)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Videogame</button>
      </form>
    </div>
  );
}