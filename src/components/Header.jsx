import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  console.log(store);

  return (
    <header>
        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Wv_logo_proposal_flying_plane_contorted.png"/>
        <h2>Flight Radar</h2>
        </div>
        <h4>
          {store.isLoading
          ? 'Uçuşlar Hesaplanıyor...'
          : `${store.flights.length} Uçuş Bulundu`}
        </h4>
    </header>
  )
}

export default Header