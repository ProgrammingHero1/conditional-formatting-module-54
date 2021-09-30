import React from 'react';
import Player from '../Player/Player';
import Teacher from '../Teacher/Teacher';

const User = (props) => {
    const { familiar } = props;

    // 1. Element Variable
    let greeting;
    if (familiar) {
        greeting = <h5>Hello Bondhu How are you?</h5>
    }
    else {
        greeting = <h5>Who the Hell are you? DGM.</h5>
    }
    //2. ternary operation
    // condition ? (display this part if condition true): (if condition false)

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h2>Food</h2>
                {familiar ? <h4>Biryani</h4> : <h4>khuchra poisa nai</h4>}
            </div>
            <div>
                <h2>a lot of things</h2>
                {
                    familiar ? <div>
                        <h3>My title, Friend</h3>
                        <p>This is paragraph</p>
                    </div>
                        : <div>
                            <h3>Door closed</h3>
                            <p>Chabi harai felsi</p>
                        </div>
                }
            </div>
            <div>
                <h2>Profession</h2>
                {familiar ? <Teacher></Teacher> : <Player></Player>}
            </div>
            <div>
                <h2>Connection</h2>
                {familiar && <div>
                    <h5>Dosto tomar phone number dao</h5>
                </div>}
                {
                    familiar && <Player></Player>
                }
            </div>
            <div>
                <h2>Share Drink</h2>
                {
                    familiar || <h4>Khamu daab er pani</h4>
                }
            </div>
        </div>
    );
};

export default User;