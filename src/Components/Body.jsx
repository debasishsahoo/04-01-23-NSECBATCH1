import React from 'react';

function Body(props) {
    const x = 12;
    const y = 13;

    return (
        <div>
            This is Body
            <br />
            <div>
                The Sum of 2+2 is {2 + 2}
                {x > y ? "X is Big" : 'Y is Big'}
                {x > y ? `${x} is Big and ${y} is Small` : `${y} is Big and ${x} is Small`}
            </div>
        </div>
    );
}

export default Body;