import { useQuery } from "@apollo/client";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Module } from "../__generated__/graphql";
import { Layout, ModuleDetail, QueryResult } from "../components";
import { GET_TRACK } from "../graphql";

const customUseQuery = (trackId: string | undefined) => {
  if (!trackId) {
    return {
      error: new Error("Arg is undefined"),
      loading: false,
      data: undefined,
    };
  }

  return useQuery(GET_TRACK, {
    variables: {
      trackId,
    },
  });
};

export const ModulePage: FC<PropsWithChildren> = () => {
  const [selectedModule, setSelectedModule] = useState<Module>();

  const { trackId, moduleId } = useParams();

  const { loading, data, error } = customUseQuery(trackId);

  useEffect(() => {
    if (
      loading ||
      error ||
      !moduleId ||
      !data ||
      !data.track ||
      !data.track.modules
    ) {
      return;
    }

    const module = data.track.modules.find((module) => module.id === moduleId);
    setSelectedModule(module);
  }, [loading, error, moduleId, data]);

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={selectedModule}>
        {data?.track && selectedModule && (
          <ModuleDetail module={selectedModule} track={data.track} />
        )}
      </QueryResult>
    </Layout>
  );
};
