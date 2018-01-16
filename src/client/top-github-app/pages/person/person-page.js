import React, {Fragment} from 'react';
import { BaseComponent } from '../../../common/base-component';
import { profileApi } from '../../../api/profile-api';
import Layout from '../layout/layout';

class PersonPage extends BaseComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            profile: null
        }

        const username = props.match.params.username.toLowerCase();
        profileApi.getProfile(username).then((profile) => {
            if (profile == null) {
                //props.returnHomeOnInvalidProfile();
                return;
            }

            return this.setState({ profile });
        });
    }

    render() {
        const { history } = this.props;

        return (
            <Layout history={history}>
                { this.state.profile && 
                    (
                        <Fragment>
                            <div className="container mt-5">
                                <div class="media">
                                    <img class="d-flex mr-3 rounded-circle" width="128" alt="Image" src={this.state.profile.avatar_url} />
                                    <div class="media-body">
                                        <h4 class="card-title">{this.state.profile.name}</h4>
                                        <p class="card-text">{this.state.profile.location}</p>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                }
            </Layout>
        );
    }
}

export default PersonPage;