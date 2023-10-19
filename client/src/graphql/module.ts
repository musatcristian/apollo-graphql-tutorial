import { gql } from "../__generated__";

export const GET_MODULE = gql(`
    module($moduleId: ID!) {
        id
        title
        track {
            title
        }
        author {
            name
        }
        topic
        length
        content
        videoUrl
    }
`);
