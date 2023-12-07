import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
// import swal from 'sweetalert'
// import swal from 'sweetalert'
// import Swal from 'sweetalert2'


const Apicrud = () => {
    const [data, setdata] = useState([])
    const [update, setupdate] = useState({})
    const title = useRef();
    const author = useRef();

    const getData = () => {
        axios.get("http://localhost:3001/posts").then((res) => {
            console.log(res.data);
            setdata(res.data)
        })
    }

    const addData = () => {
        const result = {
            title: title.current.value,
            author: author.current.value,
        }
        console.log(result);

        axios.post("http://localhost:3001/posts", result).then((res) => {
            console.log(res.data);
            setdata([...data, res.data])

            // swal.fire({
            //     title: "Done!",
            //     text: "You Data Is Succesfully Added!",
            //     icon: "success"
            // });
        })
    }



    const deleteData = (id) => {
        console.log(id);

        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
            setdata(data.filter((x) => x.id !== id));
        })
    }

    const updateData = (id, ind) => {
        console.log(id, 'id');
        console.log(ind, 'index');

        const final = data[ind];
        setupdate(final);
        console.log(final);
    }

    const finalUpdate = (e) => {
        setupdate({ ...update, [e.target.name]: e.target.value })
    }

    const final = () => {
        console.log(update, 'update');

        axios.put(`http://localhost:3001/posts/${update.id}`, update)
            .then((res) => {
                console.log(res.data, 'update res');

                const updateditem = data.map((data) => data.id === update.id ? { ...data, title: update.title, author: update.author } : data)
                console.log(updateditem);
                setdata(updateditem)
            })
    }

    // const cancelUpdate = () => {
    //     setdata('')
    // }


    useEffect(() => {
        getData();
    }, [])

    return (
        <div>

            <form>
                <input type='text' name='title' ref={title} />
                <input type='text' name='author' ref={author} />
                <button onClick={addData}>ADD</button>
                <br />
                <input type='text' name='title' value={update.title} onChange={finalUpdate} />
                <input type='text' name='author' value={update.author} onChange={finalUpdate} />
                <button onClick={final}>update</button>
                <button>Cancel</button>
                {/* <button onClick={cancelUpdate}>Cancel</button> */}
            </form>

            {
                data?.map((val, ind) => {
                    return (
                        <div>
                            <h1>{val.id} </h1>
                            <h2>{val.title}</h2>
                            <h3>{val.author}</h3>
                            <button onClick={() => deleteData(val.id)}>Delete</button>
                            <button onClick={() => updateData(val.id, ind)}>Update</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Apicrud
