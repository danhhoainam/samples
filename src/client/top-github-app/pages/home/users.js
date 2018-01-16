import React from 'react';
import {Link} from 'react-router-dom';

class Users extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.users.map((username, i) => {
                        return (
                            <div key={i} className="btn btn-primary m-2">
                                <Link to={`/person/${username}`} className="text-white no-underline">{username}</Link>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Users;