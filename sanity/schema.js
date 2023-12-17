import { blockContent } from "./schemas/blockContent";
import { blogpost } from "./schemas/blogpost";
import { collaborates } from "./schemas/collaborates";
import { latestsongs } from "./schemas/latestsongs";
import { liveconcert } from "./schemas/liveconcert";
import { musicaluniverse } from "./schemas/musicaluniverse";

export const schema = {
  types: [
    blogpost,
    blockContent,
    latestsongs,
    musicaluniverse,
    liveconcert,
    collaborates,
  ],
};
