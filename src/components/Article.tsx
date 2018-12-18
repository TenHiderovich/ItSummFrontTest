import React from 'react';
import axios from "axios";

// Material elements
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography/Typography"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Edit from '@material-ui/icons/Edit';


import styled from 'styled-components';
import ArticleModal from "./ArticleModal";


const ArticleWrapper = styled.div`
    margin-bottom: 30px;
    
    .article__item{
        height: auto;
        min-height: 120px;
    }
    .article__more{
      margin-top: 10px;
    }
    
    .actions__wrapper{
      position: absolute;
      top: 20px;
      right: -50px;
    }
   
    .article__paper{
      position: absolute;
      top: 50px;
      right: 0;
      display: flex;
      flex-direction: column;
      width: 50px;
    }
`;

interface articleProps {
    key: any,
    title: string,
    body: string,
    handleOpen: any,
    articleId: number
}

class Article extends React.Component<articleProps> {

    state = {
        openModal: false,
        openBar: false
    };

    private handleClick = () => {
        this.setState({
            openBar: !this.state.openBar,
        });
    };

    private handleClickAway = () => {
        this.setState({
            openBar: false,
        });
    };

    private handleOpen = () => {
        this.setState({ openModal: true });
    };

    private handleClose = () => {
        this.setState({
            openModal: false
        });
    };

    public handleUpdateSubmit(state){
        let article = {
            title: state.title,
            body: state.body
        };
        axios.patch('http://127.0.0.1:8000/api/article/' + this.props.articleId, article).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    private handleDeleteSubmit(e){
        e.preventDefault();
        axios.delete('http://127.0.0.1:8000/api/article/' + this.props.articleId).then(res => {
            console.log(res)
        })
    }

    render () {
        const { openBar } = this.state;
        return (
            <ArticleWrapper>
                <ListItem className="article__item">

                    <ListItemText>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.body}
                        </Typography>
                    </ListItemText>

                    <ClickAwayListener onClickAway={this.handleClickAway}>
                        <div className="actions__wrapper">
                            <IconButton
                                aria-label="More"
                                className="article__actions"
                                onClick={this.handleClick}
                                >
                                <MoreVertIcon />
                            </IconButton>
                            {openBar ? (
                                <div className="article__paper">
                                    <Tooltip title="edit">
                                        <IconButton
                                            aria-label="edit"
                                            className="article__delete"
                                            onClick={this.handleOpen}
                                            >
                                            <Edit />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton
                                            aria-label="Delete"
                                            className="article__delete"
                                            onClick={this.handleDeleteSubmit.bind(this)}
                                            >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            ) : null}
                        </div>
                    </ClickAwayListener>

                    <ArticleModal
                        openModal={this.state.openModal}
                        handleClose={this.handleClose}
                        title={this.props.title}
                        body={this.props.body}
                        modalName={'Редактировать статью'}
                        handleSubmit={this.handleUpdateSubmit.bind(this)}
                    />
                </ListItem>
            </ArticleWrapper>
        );
    }
}

export default Article;