import { useQuery } from "@apollo/client";
import { FC, PropsWithChildren } from "react";
import { useParams } from "react-router-dom";

import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";
import { GET_TRACK } from "../graphql";

interface TrackDetailsProps extends PropsWithChildren {}

export const TrackLayout: FC<TrackDetailsProps> = () => {
  const { trackId = "" } = useParams();

  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: {
      trackId,
    },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
