import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import "./Confirmation.scss";

function Confirmation() {
  const { state } = useLocation();

  return (
    <main className="confirmation">
      <h1 data-id="confirmation">Tack för din beställning</h1>
      <article className="ticket">
        <section className="what">
          <p className="type">what</p>
          <h1 data-id="eventTitle">{state.event.name}</h1>
        </section>
        <section className="where">
          <p className="type">Where</p>
          <h2 data-id="eventPlace">{state.event.where}</h2>
        </section>
        <section className="when">
          <p className="type">When</p>
          <h2 data-id="eventDate">{state.event.when.date}</h2>
        </section>
        <section className="from">
          <p className="type">From</p>
          <h2 data-id="eventTimeFrom">{state.event.when.from}</h2>
        </section>
        <section className="to">
          <p className="type">To</p>
          <h2 data-id="eventTimeTo">{state.event.when.to}</h2>
        </section>
        <section className="code">
          <h1 className="barcode">{nanoid()}</h1>
          <p className="utfcode">#{nanoid()}</p>
        </section>
      </article>
    </main>
  );
}

export default Confirmation;
