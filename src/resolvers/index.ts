import { posts } from './Query/post';
import { user, follower, following } from './Query/user';
import { likes } from './Query/like';
import Query from "./Query";
import Mutation from "./Mutation";


export default {
  Query,
  Mutation,
  User : {
    posts,
    follower,
    following
  },
  Post : {
    comments : () => { return [{  id: 2, comment: "post-comment"}]},
    likes
    
  },
  Comment:{
    user
  }
};
