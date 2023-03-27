import '../App.css';
import Card from "./Card";


const SearchBar = (props) => {
    const { value, getValue, getBtnValue, data } = props

    const btn = (bvalue) => {
        getBtnValue(bvalue)
    }
    const OngetValue = (e) => {
        getValue(e.target.value)
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center flex-column bg-back mt-5">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid ">
                        <div className="d-flex" role="search">
                            <input className="form-control me-2 nav-button input-color" type="text" placeholder="City"
                                value={value.name}
                                onChange={OngetValue}
                                onKeyPress = {OngetValue}
                            />
                            <button
                                className="btn nav-button srch-btn"
                                type="submit"
                                onClick={() => { btn(value) }}
                            >Search</button>
                        </div>
                    </div>
                </nav>
                <Card data={data} />
            </div>
        </>
    )
}

export default SearchBar;