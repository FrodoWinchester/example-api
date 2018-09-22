import React, { Component } from 'react';
import axios from 'axios'
import _ from 'lodash'
class PostList extends Component {
    state = {
        postList: []
    }
    componentDidMount = () => {
        this.fetchPost()
    }

    fetchPost = () => {
        const postListUrl = 'http://reduxblog.herokuapp.com/api/posts'
        axios.get(postListUrl)
            .then((res) => {
                if (res.data !== undefined) {
                    this.setState({ postList: res.data })
                }
            }).catch((err) => {
                alert(err)
            })
    }

    deletePost = (item) => {
        if (window.confirm(`คุณแน่ใจว่าต้องการลบโพส ${item.title} ?`) !== true) {
            return
        }
        const deletePostUrl = `http://reduxblog.herokuapp.com/api/posts/${item.id}`
        let self = this
        axios.delete(deletePostUrl)
            .then(() => {
                self.fetchPost()
            }).catch((err) => {
                alert(err)
            })
    }


    render() {
        const { postList } = this.state
        const { history } = this.props

        return (
            <div className="card" style={{ backgroundColor: 'lightgrey' }}>
                <div style={{ margin: 10, marginTop: 25, marginBottom: 25 }}>

                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div style={{ margin: 0 }} className="row justify-content-between">
                                <div>
                                    <h3>Post List</h3>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-success"
                                        onClick={() => history.push('/createPost')}
                                    >Create Post</button>
                                </div>
                            </div>
                            <div style={{ marginTop: 5 }}>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <u><b>No.</b></u>
                                            </div>
                                            <div className="col-md-3">
                                                <u><b>Categories</b></u>
                                            </div>
                                            <div className="col-md-5">
                                                <u><b>Title</b></u>
                                            </div>
                                        </div>
                                    </li>
                                    {_.map(postList, item => {
                                        return <li class="list-group-item">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    {item.id}
                                                </div>
                                                <div className="col-md-3">
                                                    {item.categories}
                                                </div>
                                                <div className="col-md-5">
                                                    {item.title}
                                                </div>
                                                <div className="col-md-1">
                                                    {/* <i class="fas fa-search"></i> */}
                                                    <a href="#"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            history.push(`/post/${item.id}`)
                                                        }}><i onClick={this.notify} style={{ color: 'blue' }} className="fas fa-search"></i></a>
                                                    <a style={{ paddingLeft: 10 }} href="#" onClick={e => {
                                                        e.preventDefault()
                                                        this.deletePost(item)
                                                    }}><i onClick={this.notify} style={{ color: 'red' }} className="fas fa-trash"></i></a>
                                                </div>
                                                {/* <div className="col-md-1" >
                                                    <i className="fas fa-chevron-right"></i>
                                                </div> */}
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default PostList;