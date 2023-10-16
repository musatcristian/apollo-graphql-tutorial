import { gql } from "../__generated__";

export const TRACKS = gql(`
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

export const GET_TRACK = gql(`
    query GetTrack($trackId: ID!) {
        track(trackId: $trackId) {
            id
            title
            author {
                name
                photo
            }
            thumbnail
            duration
            modulesCount
            description
            numberOfViews
            modules {
                length
                title
            }
            description
        }
    }
`);
