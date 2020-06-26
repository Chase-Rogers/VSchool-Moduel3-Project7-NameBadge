import React from "react";

const Badge = (props) => {
    return (
        <form>
            <div className={props.class? "headings1" : 'headings2'} >Badge:</div>
            <div>
                <input
                    type="text"
                    name="firstName"
                    value={props.firstName}
                    placeholder="First Name"
                    readOnly={true}
                />
                <input
                    type="text"
                    name="lastName"
                    value={props.lastName}
                    placeholder="Last Name"
                    readOnly={true}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="email"
                    value={props.email}
                    placeholder="Email"
                    readOnly={true}
                />
                <input
                    type="text"
                    name="birthLocation"
                    value={props.birthLocation}
                    placeholder="Place of Birth"
                    readOnly={true}
                />
            </div>
            <div>
                <input
                    type="number"
                    name="phone"
                    value={props.phone}
                    placeholder="Phone Number"
                    readOnly={true}
                />
                <input
                    type="text"
                    name="favoriteFood"
                    value={props.favoriteFood}
                    placeholder="Favorite Food "
                    readOnly={true}
                />
            </div>
            <textarea
                type="text"
                name="about"
                value={props.about}
                placeholder="Tell us about yourself"
                readOnly={true}
            />
        </form>
    );
};

export default Badge;
