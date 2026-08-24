import { useNavigate, Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import TrackRow from '../components/TrackRow';
import { albums, tracks } from '../data/tracks';

export default function HomePage({ player }) {
  const navigate = useNavigate();
  const { currentTrack, playTrack } = player;

  const latestAlbum = albums[0];
  const latestTracks = tracks.filter((t) => t.album === latestAlbum.title);

  const trackCount = latestTracks.length;

  const totalSeconds = latestTracks.reduce(
    (sum, track) => sum + track.durationSecs,
    0
  );

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const totalDuration = `${minutes}: ${seconds.toString().padStart(2, "0")}`;

  return (
    <>
      <HeroHeader onBrowse={() => navigate('/demos')} />

      <div className="page-content">
        <div className="section-label">
          Latest · <strong>{latestAlbum.title}</strong>
          <div className="section-divider" />
        </div>

        <div className="latest-release">
          <div>
            <Link to={`/demos/${latestAlbum.slug}`} className="latest-release__art">
              {latestAlbum.coverArt ? (
                <img title={latestAlbum.title} src={latestAlbum.coverArt} alt={latestAlbum.title} />
              ) : (
                <div
                  className="latest-release__placeholder"
                  style={{ background: latestAlbum.color }}
                >
                  <span>♪</span>
                </div>
              )}
            </Link>

            <div className="section-label-2">
              <div className="section-divider-2" />
              {trackCount} tracks · {totalDuration}
            </div>

          </div>

          <div className="latest-release__tracks">
            <div className="track-list">
              {latestTracks.map((track, i) => (
                <TrackRow
                  key={track.id}
                  track={track}
                  index={i}
                  isActive={currentTrack?.id === track.id}
                  isPlaying={false}
                  onToggle={playTrack}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="section-label-2">
          <div className="section-divider-2" />
          © {new Date().getFullYear()} MNTN James
        </p>
      </div>
    </>
  );
}
