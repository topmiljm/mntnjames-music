import { useParams, Link } from 'react-router-dom';
import TrackRow from '../components/TrackRow';
import { albums, tracks } from '../data/tracks';

export default function AlbumPage({ player }) {
  const { slug } = useParams();
  const { currentTrack, playTrack } = player;

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

  const totalSeconds = albumTracks.reduce(
    (sum, track) => sum + track.durationSecs,
    0
  );

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const totalDuration = `${minutes}: ${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="page-content">
      <div className="section-label">
        <strong>{album.title}</strong> · {album.year}
        <div className="section-divider" />
      </div>

      <div className="latest-release">
        <div>
          {album.coverArt && (
            <img
              src={album.coverArt}
              alt={album.title}
              className="latest-release__art"
            />
          )}

          <div className="section-label-2">
            <div className="section-divider-2" />
            {albumTracks.length} tracks · {totalDuration}
          </div>
        </div>


        <div className="latest-release__tracks">
          <div className="track-list">
            {albumTracks.map((track, i) => (
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
    </div>
  );
}
