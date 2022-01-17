import React, { useEffect, useState } from "react";

import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { DevCard } from "../../Components";
import useWindowDimensions from "../../util/windowDimensions";

function DevPage(props) {
    const [ repos, setRepos ] = useState([]);

    // const { height, width } = useWindowDimensions();

    useEffect(() => {
        // Fetch all my repositories from GitHub
        async function fetchRepos() {
            try {
                const data = await axios(`https://api.github.com/users/hairstoa/repos`);
                
                const formattedRepos = [];
                
                for (const repo of data.data) {
                  
                    // Filter repositories to only include 'portfolio' pieces
                    if (repo.topics.includes('portfolio')){
                        // Fetch project specific languages from GitHub API
                        const languages = await axios(repo.languages_url);
                        const languageList = Object.keys(languages.data);
                        
                        formattedRepos.push(< DevCard 
                            key={repo.id}
                            title={repo.name}
                            description={repo.description}
                            languages={languageList}
                            link={repo.html_url} />);
                    }
                }
                setRepos(formattedRepos);
                
            } catch(err) {
                console.log(err);
            }
        }
        fetchRepos();
  
      }, []);

    return (
        // <Container fluid id="dev-page" style={{height: height}}>
        <div  className="page" id="dev-page">
        <Container fluid >
            <Row>
                <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <h1> Development </h1>
                    { repos }
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default DevPage;