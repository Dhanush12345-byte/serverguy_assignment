import {  useState, useEffect, useContext } from "react"

import MyContext from "../../Context/MyContext"

import Blogitems from "../BlogItems";

import { BeatLoader } from "react-spinners";

import "./index.css"

const ContextApi = {
    initial : "INTIIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    isLodaing: "IS_LOADING"
}

function Dashboard(){

    const { username } = useContext(MyContext);

    const [searchResult, setSearchResult] = useState('');

    const [contextResult, setContextResult] = useState(ContextApi.initial)

    const [ApiResult, setApiResult] = useState([]);

    const [ApiRender, setApiRender] = useState("");


    useEffect(()=> {
        const getFetchData = async () => {

            setContextResult(ContextApi.isLodaing)

            const api = `https://hn.algolia.com/api/v1/search?query=${ApiRender}`
    
            const option = {
                method: "GET"
            }
    
            const response = await fetch(api, option)
            const data = await response.json()

            if (response.ok === true){
                const upDateData = data.hits.map((each) => ({
                    title : each.title,
                    objectID : each.objectID,
                    url : each.url
                }))
                setApiResult(upDateData)
                setContextResult(ContextApi.success)
            }else{
                setContextResult(ContextApi.failure)
            }
        }

        getFetchData();
    },[ApiRender])

    const onclickSearchButton = () => {
        setApiRender(searchResult)
    }

    const onchangeSearchResult = e => {
        setSearchResult(e.target.value);
    }

    const onClickRetryBtn = () => {
        setApiRender(ApiRender);
    }

    const SearchContianer = () => {
        return(
            <div className="Search_container">
                <h1 className="DashBoard_heading">Welcome to <span className="span">{username}</span></h1>
                <div className="search_card_container">
                    <input type="search" className="search_input" placeholder="Search..." value={searchResult} onChange={onchangeSearchResult}/>
                    <button type="button" className="Search_btn" onClick={onclickSearchButton}>Search</button>
                </div>
            </div>
        )
    }

    const SearchApiResult = () => {
        return(
            <ul className="BlogItems_container">
                {ApiResult.map(each => (
                    <Blogitems key={each.objectID} eachDetailes = {each} />
                ))}
            </ul>
        )
    }

    const getLoaderResult = () => (
        <div className="Loader_contaienr">
            <BeatLoader size={34} color="#007bff"/> 
        </div>
    )

    const getFailureResult = () => (
        <div className="Failure_container">
            <img src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png" className="failure_image" alt="Failure_Image"/>
            <button type="button" className="Search_btn" onClick={onClickRetryBtn}>Retry</button>
        </div>
    )

    const GetInititalData = () => {
        switch (contextResult) {
            case ContextApi.isLodaing:
                return getLoaderResult();
            case ContextApi.success:
                return SearchApiResult();
            case ContextApi.failure:
                return getFailureResult();
            default:
               return null;
        }
    }

    return(
        <div className="DashBorad_bg_contianer">
            {SearchContianer()}
            {GetInititalData()}
        </div>
    )
}

export default Dashboard;