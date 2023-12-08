import { blockContent } from "./schemas/blockContent";
import { blogpost } from "./schemas/blogpost";
import { collaborates } from "./schemas/collaborates";
import { heroslider } from "./schemas/heroslider";
import { liveconcert } from "./schemas/liveconcert";
import { musicaluniverse } from "./schemas/musicaluniverse";

export const schema = {
  types: [
    blogpost,
    blockContent,
    heroslider,
    musicaluniverse,
    liveconcert,
    collaborates,
  ],
};
