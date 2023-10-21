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
            modules {
                id
                length
                title
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
                id
                name
                photo
            }
            thumbnail
            duration
            modulesCount
            description
            numberOfViews
            modules {
                id
                length
                title
                author {
                    id
                    name
                }
                topic
                content
                videoUrl
            }
            description
        }
    }
`);
