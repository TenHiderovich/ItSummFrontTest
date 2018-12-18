import React from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
// Components
import Article from '../components/Article'
import ArticleModal from '../components/ArticleModal'

// Material elements
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/add';
import Fab from '@material-ui/core/Fab';



import styled from 'styled-components';

const ArticleListWrapper = styled.div`
    width: 50%;
    max-width: 600px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.5s ease;
    
    &.shift{
      left: 300px;
      transform: translateX(0);
    }
`;

const TooltipWrapper = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 10;
`;

class Articles extends React.Component {

    state = {
        openArticleDetail: false,
        openModal: false,
        articles: []
    };

    private handleOpen = () => {
        this.setState({ openModal: true });
    };

    private handleClose = () => {
        this.setState({
            openModal: false
        });
    };

    componentWillMount() {
        axios.get('http://127.0.0.1:8000/api/article').then(resp => {
            this.setState({
                articles: resp.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    public handleSubmit(state){
        let article = {
            title: state.title,
            body: state.body
        };
        axios.post('http://127.0.0.1:8000/api/article', article).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render () {

        return (
            <>

                <ArticleListWrapper>
                    <List>
                        {this.state.articles.map((article) => <Article
                            key={article.id}
                            articleId={article.id}
                            handleOpen={this.handleOpen}
                            title={article.title}
                            body={article.body}/>
                        )}
                    </List>
                </ArticleListWrapper>

                <TooltipWrapper>
                    <Tooltip title="Add" aria-label="Add">
                        <Fab
                            color="secondary"
                            className="article__add"
                            onClick={this.handleOpen}
                            >
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </TooltipWrapper>

                <ArticleModal
                    openModal={this.state.openModal}
                    handleClose={this.handleClose}
                    key={null}
                    title={null}
                    body={null}
                    modalName={'Создать новую статью'}
                    handleSubmit={this.handleSubmit}
                />

            </>
        );
    }
}

export default Articles;