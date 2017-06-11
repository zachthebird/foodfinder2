import React from 'react';

var Results = (props) => {
    return(
        // this.props.data.map()
        <div className='panel panel-default col-lg-10 col-lg-offset-1'>
            <div className='panel-heading text-center'>
                <h2>Results</h2>
            </div>
            <div className='panel-body text-center'>
                <ul>
                    { props.data.map((doc, index) => {
                        return (
                            <div className='container artiBox'>
                                <span>
                                    <li key={index}>
                                        <h3>{doc.headline.print_headline}</h3>
                                        <p>{doc.lead_paragraph}</p>
                                        <span>
                                            <div className='panel panel-default col-lg-4'>
                                                <h4 className='panel-heading'>Date:</h4>
                                                <p className='panel-body'>{doc.pub_date}</p>
                                            </div>
                                            <div className='panel panel-default col-lg-8'>
                                                <h4 className='panel-heading'>URL:</h4>
                                                <p className='panel-body'>{doc.web_url}</p>
                                            </div>
                                            <button  key={index} className='btn-success' data-headline={doc.headline.print_headline} data-pubdate={doc.pub_date} data-url={doc.web_url}>Save Article</button>
                                        </span>
                                    </li>
                                </span>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Results;

