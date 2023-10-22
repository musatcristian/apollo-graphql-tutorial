import { useMutation } from "@apollo/client/react/hooks";
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

import type { Track } from "../__generated__/graphql";
import { INCREMENT_TRACK_VIEWS } from "../graphql";
import { colors, mq } from "../styles";
import { humanReadableTimeFromSeconds } from "../utils/helpers";

/**
 * Track Card component renders basic info in a card format
 * for each track populating the tracks grid homepage.
 */
export const TrackCard: React.FC<{ track: Omit<Track, "modules"> }> = ({
  track,
}) => {
  const { title, thumbnail, author, duration, modulesCount, id } = track;

  const [incrementTrackViews, { data, loading, error }] = useMutation(
    INCREMENT_TRACK_VIEWS,
    {
      variables: { trackId: id },
      onCompleted: (res) => {
        console.info(res);
      },
      onError: (err) => {
        console.warn(err.message);
      },
    }
  );

  const handleIncrementViews = () => {
    return incrementTrackViews();
  };

  return (
    <CardContainer to={`track/${id}`} onClick={handleIncrementViews}>
      <CardContent>
        <CardImageContainer>
          <CardImage src={thumbnail || ""} alt={title} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>{title || ""}</CardTitle>
          <CardFooter>
            <AuthorImage src={author.photo || ""} />
            <AuthorAndTrack>
              <AuthorName>{author.name}</AuthorName>
              <TrackLength>
                {modulesCount} modules -{" "}
                {humanReadableTimeFromSeconds(duration || 0)}
              </TrackLength>
            </AuthorAndTrack>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

// export default TrackCard;

/** Track Card styled components */
const CardContainer = styled(Link)({
  borderRadius: 6,
  color: colors.text,
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [mq[0]]: {
    width: "90%",
  },
  [mq[1]]: {
    width: "47%",
  },
  [mq[2]]: {
    width: "31%",
  },
  height: 380,
  margin: 10,
  overflow: "hidden",
  position: "relative",
  ":hover": {
    backgroundColor: colors.pink.lightest,
  },
  cursor: "pointer",
});

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
});

const CardTitle = styled.h3({
  textAlign: "center",
  fontSize: "1.4em",
  lineHeight: "1em",
  fontWeight: 700,
  color: colors.text,
  flex: 1,
});

const CardImageContainer = styled.div({
  height: 220,
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(250,0,150,0.20)",
  },
});

const CardImage = styled.img({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  filter: "grayscale(60%)",
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: "flex",
  color: colors.textSecondary,
  flexDirection: "column",
  justifyContent: "space-around",
});

const CardFooter = styled.div({
  display: "flex",
  flexDirection: "row",
});

const AuthorImage = styled.img({
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: "50%",
  objectFit: "cover",
});

const AuthorAndTrack = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const AuthorName = styled.div({
  lineHeight: "1em",
  fontSize: "1.1em",
});

const TrackLength = styled.div({
  fontSize: "0.8em",
});
