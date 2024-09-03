import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    // commented because using loader instead of this code

    // const {githubId} = useParams();

    // const [data, setData] = useState([]);

    // useEffect(() => {fetch(`https://api.github.com/users/${githubId}`).then(res => res.json()).then(data => {console.log(data); setData(data)})}, []);

  return (
    
        <>
          <h1>
            <div className="homeWrapper">
            <span>Github followers: {data.followers}</span>
            <span><img src={data.avatar_url} alt="" /></span>
            </div>
          </h1>
        </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
  return response.json()
}
