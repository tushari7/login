import React from 'react'

export default function Card() {
    return (
        <div>
            <div>


            {/*  add this bootstrap if images does not work porply           , "maxHeight": "360px" */}
                <div className="card mt-3" style={{ "width": "20rem" }}>
                    <img className="card-img-top img-thumbnail" src="https://source.unsplash.com/random/900×700/?burger" style={{"max-height": "200px", "object-fit": "cover"
}} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is important text</p>
                        {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
                        <div className='container w-110'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100  bg-success rounded'>

                                <option value='half'>Half</option>
                                <option value='full'>Full</option>
                            </select>

                            <div className='d-inline h-100 fs-5'>Total Price</div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}


