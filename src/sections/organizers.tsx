import * as React from 'react';
import { Organizer, ORGANIZERS } from '~/data/organizers';

import { Container, Grid } from "theme-ui";



type OrgCardProps = {
    org: Organizer;
}

const OrgCard: React.FC<OrgCardProps> = ({ org }) => {
    return (
        <div className="info-card">
            {org.photo && <img src={org.photo} alt={org.name} />}
            <h2>{org.name}</h2>
            {org.job && <p>{org.job}</p>}
            {org.social && <a href={org.social} target="_blank" rel="noopener noreferrer">Follow</a>}
        </div>
    );
}


export default class Organizers extends React.Component {
    shuffleArray(arr: Organizer[]) {
        return [...arr].sort(() => 0.5 - Math.random());
    }

    render() {
        return (
            <section id="organizers" className="organizers">
                <Container>
                    <Container>
                        <h1>Organizers</h1>
                        <p>
                            Here are your organizers 👾 for the Prague Python Pizza edition.
                        </p>
                    </Container>
                    <Grid>
                        {this.shuffleArray(ORGANIZERS).map((organizer, i) => (
                            <a href={organizer.social} target="_blank" key={i}>
                                <OrgCard org={organizer} />
                            </a>
                        ))}
                    </Grid>

                </Container>
            </section>
        );
    }
}