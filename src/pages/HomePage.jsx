import { useNavigate, Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import TrackRow from '../components/TrackRow';
import { albums, tracks } from '../data/tracks';

export default function HomePage({ player }) {
  const navigate = useNavigate();
  const { currentTrack, isPlaying, toggle } = player;

  const tracksByAlbum = (albumTitle) =>
    tracks.filter((t) => t.album === albumTitle);

  const latestAlbum = albums[0];
  const latestTracks = tracksByAlbum(latestAlbum.title);

  return (
    <>
      <HeroHeader onBrowse={() => navigate('/demos')} />

      <div className="page-content">
        <div className="section-label">
          Latest — {latestAlbum.title}
          <div className="section-divider" />
        </div>

        <div className="latest-release">
          <Link to={`/demos/${latestAlbum.slug}`} className="latest-release__art">
            {latestAlbum.coverArt ? (
              <img src={latestAlbum.coverArt} alt={latestAlbum.title} />
            ) : (
              <div
                className="latest-release__placeholder"
                style={{ background: latestAlbum.color }}
              >
                <span>♪</span>
              </div>
            )}
          </Link>

          <div className="latest-release__tracks">
            <div className="track-list">
              {latestTracks.map((track, i) => (
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
      </div>
    </>
  );
}
