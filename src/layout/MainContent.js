import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import PostList from '../pages/PostList'
import CreatePost from '../pages/CreatePost'
import PostDetail from '../pages/PostDetail'




class MainContent extends Component {

    render() {
        return (
            <div className="container-fluid" style={{ marginTop: 15 }}>
                <Switch>
                    <Route path="/post/:postId" component={PostDetail} />
                    <Route path="/createPost" component={CreatePost} />
                    <Route exact path="/" component={PostList} />
                </Switch>
            </div>
        );
    }
}

export default MainContent;

