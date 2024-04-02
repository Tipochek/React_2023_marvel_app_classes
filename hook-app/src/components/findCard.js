import React from "react";

class FindCard extends React.Component {
    handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const formData = new FormData(e.target);

        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        this.props.findCard(formJson.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="query"
                    placeholder="Find a card"
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default FindCard;