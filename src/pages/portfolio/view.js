import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Link} from 'gatsby'

import Layout from '../../components/Layout/Layout'

export class view extends Component {
    render() {
        const passedData = this.props.location.state || {
            title: 'default title',
            shortDescription: 'default description',
            image: 'https://via.placeholder.com/350',
            website: 'https://via.placeholder.com',
        }
        const {
            title,
            repository,
            shortDescription,
            image,
            website,
            more,
        } = passedData
        return (
            <Layout>
                <Helmet>
                    <title>{`${title} | Inter-Global Media`}</title>
                </Helmet>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '3rem auto',
                        width: '90%',
                        color: '#717171',
                    }}
                >
                    <Link
                        to="/portfolio"
                        style={{
                            boxShadow: 'none',
                            width: '100%',
                            maxWidth: '1280px',
                            margin: '0 auto 1rem',
                        }}
                    >
                        &larr; back
                    </Link>

                    <h2 style={{textAlign: 'center', fontWeight: '400'}}>
                        {title}
                    </h2>
                    <img src={image} alt={title} />
                    <div style={{display: 'flex'}}>{shortDescription}</div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <a
                            href={more}
                            alt={title}
                            style={{
                                boxShadow: 'none',
                                marginBottom: '-1.25rem',
                                marginTop: '1rem',
                            }}
                            target="_new"
                        >
                            Read More About {title}
                        </a>
                        <br />
                        <a
                            href={repository}
                            alt={title}
                            style={{
                                boxShadow: 'none',
                                marginBottom: '-1.25rem',
                            }}
                            target="_new"
                        >
                            {title} Source Code
                        </a>
                        <br />
                        <a
                            href={website}
                            alt={title}
                            style={{boxShadow: 'none', marginBottom: '1rem'}}
                            target="_ne"
                        >
                            {title} Live Site
                        </a>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default view
