import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;
    if(familiar){
        greetings = <div>Welcome, my friend.</div>
    }
    else{
        greetings = <p>Who the hell are you?</p>;
    }
 
    // javascript ternary operator
    // const greetings3 = familiar ? 'hello' : 'gello'; 
    // const number = 3;
    // if(number > 5 && familiar === true){

    // }
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar 
                    ? <p>I will buy Food for you.</p> 
                    : <p>Lets eat his his whose whose?</p>
                }
                
                
            </div>
            <div>
            <h2>Connection</h2>
            {
                familiar && <p>Let's join my facebook.</p>
            }
            </div>
        </div>
    );
};

export default User;