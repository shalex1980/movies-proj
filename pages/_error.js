import React from 'react';

export default ({statusCode}) => (
    <div className="error">
         { statusCode ? `Could not load user data: status Code ${statusCode}`
            : 'Couldn\'t get that page, sorry!'
        }
    </div>
);