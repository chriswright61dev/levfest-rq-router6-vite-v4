import React from "react";
import "./EventDetail.css";
import HtmlBox from "../../../../components/text/HtmlBox/HtmlBox";
import DateTime from "../../../../components/text/DateTime/DateTime";
import VenueLink from "../../../../components/text/VenueLink/VenueLink";
import OldEvent from "../../../../components/OldEvent/OldEvent";
import ImageContainer from "../../../../components/image/ImageContainer/ImageContainer";
function EventDetail({ data, old }) {
  const es = data;
  if (es) {
    return (
      <div className="event_detail">
        <div className="event_detail_text">
          <h2>{es.event_title}</h2>
          <DateTime date={es.event_date_time} />
          <VenueLink venue_name={es.event_venue} venue_id={es.event_venue_id} />
          {es.event_admission ? (
            <p className="admission">Admission: {es.event_admission} </p>
          ) : null}
          {/* is it an old event? if so make it very clear  */}
          {old ? <OldEvent date={es.event_date_time} /> : null}
          <p>{es.event_introduction}</p>

          <HtmlBox className="event_body" content={es.event_body} />
        </div>

        <div className="event_detail_images">
          {es.event_poster_original ? (
            <ImageContainer
              type="square"
              source={es.event_poster_original}
              altText={es.name}
            />
          ) : null}

          {es.event_image_1 ? (
            <ImageContainer
              type="square"
              source={es.event_image_1}
              altText={es.name}
            />
          ) : null}

          {es.event_image_2 ? (
            <ImageContainer
              type="square"
              source={es.event_image_2}
              altText={es.name}
            />
          ) : null}

          {es.event_image_3 ? (
            <ImageContainer
              type="square"
              source={es.event_image_3}
              altText={es.name}
            />
          ) : null}
        </div>
      </div>
    );
  } else return null;
}

export default EventDetail;
