import React, {Component} from 'react';
import PostData from '../json/posts.json';
import '../style/style.css';
import 'rxjs/add/operator/map';

class PostList extends Component {
    render(){
    return (
    <div>
        <h1>Hello There</h1>
        {PostData.map((e)=>{
            return( 
                <div>
                    <h1>{e.title}</h1>
                    {e.body}
                </div>
            )
        })}
    </div>
  );
}
}

export default PostList;