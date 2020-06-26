import React, { useState } from "react";
import "./App.css";
import Badge from "./Badge";

const App = () => {
    const [badge, setBadge] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthLocation: "",
        phone: '',
        favoriteFood: "",
        about: "",
        class: true
    });

    const [BadgeList, setBadgeList] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target;

        setBadge({
            ...badge,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        setBadgeList(BadgeList.concat(badge))
        setBadge({
            firstName: "",
            lastName: "",
            email: "",
            birthLocation: "",
            phone: '',
            favoriteFood: "",
            about: "",
            class: !badge.class
        })
    }

    const BadgeListComponent = BadgeList.map( (badge, index) => {
        return (
            <Badge
            key={index}
            firstName={badge.firstName}
            lastName={badge.lastName}
            email={badge.email}
            birthLocation={badge.birthLocation}
            phone={badge.phone}
            favoriteFood={badge.favoriteFood}
            about={badge.about}
            class={!badge.class}
        />
        )
    })

    return (
        <div className="App">
            <form onSubmit={handleSubmit} >
                <div>
                    <input
                        type="text"
                        name="firstName"
                        value={badge.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        minLength='3'
                        required="Required"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={badge.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        minLength='3'
                        required="Required"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        value={badge.email}
                        onChange={handleChange}
                        placeholder="Email"
                        minLength='3'
                        required="Required"
                    />
                    <input
                        type="text"
                        name="birthLocation"
                        value={badge.birthLocation}
                        onChange={handleChange}
                        placeholder="Place of Birth"
                        minLength='3'
                        required="Required"
                    />
                </div>
                <div>
                    <label>
                    <input 
                        type="tel"
                        name="phone"
                        value={badge.phone}
                        onChange={handleChange}
                        placeholder="xxxxxxxxxx"
                        pattern="[0-9]{10}"
                        required="Required"
                    />
                    </label>
                    <input
                        type="text"
                        name="favoriteFood"
                        value={badge.favoriteFood}
                        onChange={handleChange}
                        placeholder="Favorite Food "
                        minLength='3'
                        required="Required"
                    />
                </div>
                <textarea 
                    type="text"
                    name="about"
                    value={badge.about}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                    minLength='3'
                    required="Required"
                />
                <br/>
                <button>Submit</button>
            </form>

            {BadgeListComponent}
        </div>
    );
};

export default App;
