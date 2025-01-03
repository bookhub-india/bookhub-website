import React from 'react';
import './ArticleSubmission.css';

const ArticleSubmission = () => {
    return (
        <div className="submission-container">
            <h1>Submission</h1>
            <iframe
                id="JotFormIFrame-243393455323053"
                title="Form"
                allowTransparency="true"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/250022808805047"
                frameBorder="0"
                style={{
                    width: '100%',
                    height: '100vh',
                    border: 'none'
                }}
                scrolling="yes" 
            >
            </iframe>
            <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
            <script>
            {`window.jotformEmbedHandler("iframe[id='JotFormIFrame-250022808805047']", "https://form.jotform.com/")`} 
            </script>
        </div>
    );
};

export default ArticleSubmission;