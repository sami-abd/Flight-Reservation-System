const ButtonToSubmit = () => {

    return (
        <div>
            <form ref="form" onSubmit={this.handleSubmit}>
                <button type="submit">Do the thing</button>
            </form>
        </div>
    )
};


export default ButtonToSubmit;