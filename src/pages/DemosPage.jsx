import { useNavigate } from 'react-router-dom';
import AlbumCard from '../components/AlbumCard';
import { albums, tracks } from '../data/tracks';

export default function DemosPage() {
  const navigate = useNavigate();

  const trackCount = (albumTitle) =>
    tracks.filter((t) => t.album === albumTitle).length;

  return (
    <div className="page-content">
      <div className="section-label">
        All Demos
        <div className="section-divider" />
      </div>

      <div className="album-grid">
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            trackCount={trackCount(album.title)}
            onClick={() => navigate(`/demos/${album.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}
