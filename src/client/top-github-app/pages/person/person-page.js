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
                            <img src={this.state.profile.avatar_url} />
                            <h1>{this.state.profile.name}</h1>
                            <h5>{this.state.profile.location}</h5>
                        </Fragment>
                    )
                }
            </Layout>
        );
    }
}

export default PersonPage;