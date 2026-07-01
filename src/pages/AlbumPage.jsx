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

  return (
    <div className="page-content">
      {/* <div className="album-page__info"> */}
        <div className="section-label">
          {album.title} · {album.year}
          <div className="section-divider" />
        </div>
        {/* <p className="album-page__count">{albumTracks.length} tracks</p> */}
      {/* </div> */}

      <div className="latest-release">
        {/* <div className="album-page__header"> */}
          {album.coverArt && (
            <img
              src={album.coverArt}
              alt={album.title}
              className="latest-release__art"
            />
          )}

        {/* </div> */}

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
