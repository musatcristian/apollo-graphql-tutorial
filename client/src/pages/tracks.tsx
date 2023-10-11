import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { gql } from "../__generated__";
import { Layout, QueryResult } from "../components";
import { TrackCard } from "../containers";

const TRACKS = gql(`
    query TracksQuery {
        tracksForHome {
            id
            duration
            modulesCount
            thumbnail
            title
            author {
            name
            photo
            id
            }
        }
    }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const [tracks, setTracks] = useState<JSX.Element[]>([]);
  const { data, loading, error } = useQuery(TRACKS);

  useEffect(() => {
    if (loading || error || !data || !data.tracksForHome) {
      return;
    }
    const newTracks = data.tracksForHome.map((track, index) => {
      return <TrackCard track={track} key={track.id + index} />;
    });

    setTracks(newTracks);
  }, [data, loading, error]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {tracks}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
