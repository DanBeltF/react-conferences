import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import yellow from '@material-ui/core/colors/yellow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {Link} from "react-router-dom";

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: yellow[700],
    },
});

class LiveEventCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        var aut = this.props.author,
            letterAut = aut.charAt(0);

        return (
            <Card className={classes.card}>
                <CardActionArea component={Link} to="/main/events/live">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="avatar" className={classes.avatar}>
                                {letterAut}
                            </Avatar>
                        }

                        title={this.props.title}
                        subheader={this.props.date}
                    />
                    <CardMedia
                        className={classes.media}
                        square
                        image={this.props.image}
                        title="costumer"
                    />
                    <CardContent>
                        <Typography component="p">
                            {this.props.location}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                        {this.props.tags}
                    </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(LiveEventCard);