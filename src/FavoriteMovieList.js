import React, { Component } from 'react';

class FavoriteMovieList extends Component {
    render() {
        const profiles = this.props.profiles;
        const users = this.props.users;
        const movies = this.props.movies;
        return (
            <ul>
                {Object.keys(users).map((item) => {
                    let profileFavoriteMovieID = profiles.filter((profile) => (+profile.userID === users[item].id))[0].favoriteMovieID;
                    console.log(profileFavoriteMovieID);
                    return <li key={users[item].name}>{`${users[item].name}'s favorite movie is ${movies[profileFavoriteMovieID].name}`}</li>
                })}
            </ul>
        )
    }
}

export default FavoriteMovieList;