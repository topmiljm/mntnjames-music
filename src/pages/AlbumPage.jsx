import { useParams, Link } from 'react-router-dom';
import TrackRow from '../components/TrackRow';
import { albums, tracks } from '../data/tracks';

export default function AlbumPage({ player }) {
  const { slug } = useParams();
  const { currentTrack, isPlaying, toggle } = player;

  const album = albums.find((a) => a.slug === slug);

  if (!album) {
    return (
      <div className="page-content--narrow">
        <div className="section-label">
          Not Found
          <div className="section-divider" />
        </div>
        <p className="about-text">
          That demo doesn't exist. <Link to="/demos">Back to all demos</Link>.
        </p>
      </div>
    );
  }

  const albumTracks = tracks.filter((t) => t.album === album.title);

  return (
    <div className="page-content">
      <div className="section-label">
        {album.title} · {album.year}
        <div className="section-divider" />
      </div>

      <div className="latest-release">
        {album.coverArt && (
          <img className="latest-release__art" src={album.coverArt} alt={album.title} />
        )}

        <div className="latest-release__tracks">
          < div className="track-list">
            {albumTracks.map((track, i) => (
              <TrackRow
                key={track.id}
                track={track}
                index={i}
                isActive={currentTrack?.id === track.id}
                isPlaying={isPlaying && currentTrack?.id === track.id}
                onToggle={toggle}
              />
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
