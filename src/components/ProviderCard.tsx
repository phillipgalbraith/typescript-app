
interface ProviderCardProps {
  area: string;
  source: string;
}

function ProviderCard({area, source}:ProviderCardProps) {
  return (
    <div className="card col border-0">
      <img className="card-img-top" src={source} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{area}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    )
}

export default ProviderCard;