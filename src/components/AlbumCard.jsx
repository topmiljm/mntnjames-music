export default function AlbumCard({ album, trackCount, onClick }) {
  return (
    <div className="album-card" onClick={onClick}>
      <div className="album-card__art">
        {album.coverArt ? (
          <img src={album.coverArt} alt={album.title} />
        ) : (
          <span className="album-card__placeholder">♪</span>
        )}
      </div>
      <div className="album-card__info">
        <div className="album-card__title">{album.title}</div>
        <div className="album-card__meta">{album.year} · {trackCount} tracks</div>
      </div>
    </div>
  );
}
