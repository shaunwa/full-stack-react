import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

export const NavBar = ({ user }) => {
    const onClickSignOut = async () => {
        firebase.auth().signOut();
    }

    return (
        <nav>
            <Link to="/">
                <h1 className="app-heading">Members-Only App</h1>
            </Link>
            {user
                ? (
                <>
                    <button
                        className="sign-out-button"
                        onClick={onClickSignOut}>Sign Out</button>
                    <p
                        className="logged-in-as space-before"
                    >Logged in as {user.email}</p>
                </>
                ) : null}
        </nav>
    );
}