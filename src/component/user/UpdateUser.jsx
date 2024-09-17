import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    let params =useParams()
    let id = params.id

    let navigate = useNavigate()

    const getData = async () => {
        let result = await axios({
          url: `${url}/user/${id}`,
          method: "get",
        })
        let data = result.data.result
        setName(data.name)
        setPrice(data.password)
        setQuantity(data.phoneNumber)
        setDescription(data.email)
        setCategory(data.gender)
      }
      useEffect(() => {
        getData()
      }, [])


    let [name, setName] = useState("")
    let [password,setPassword] = useState("")
    let [phoneNumber,setPhoneNumber] = useState("")
    let [email,setEmail] = useState("")
    let [gender,setGender] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();// to prevent default behavior (refresh)

        let data = {
            name,
           password,
           phoneNumber,
           email,
           gender
        }
        console.log(data)

        try {
            let result = await axios({
                url : `${url}/user/${id}`,
                method : "patch",
                data : data
            })

            navigate(`/user`)

            toast.success(result.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    
    }

  return (
        <div>
          <form onSubmit={handleSubmit}>
              <fieldset>
                  <div>
                      <label htmlFor="name">Name : </label>
                      <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => {
                              setName(e.target.value)
                          }}
                      ></input>
                  </div>
                <div>
                      <label htmlFor="email">Email : </label>
                      <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                              setEmail(e.target.value)
                          }}
                      ></input>
                  </div>
                <div>
                      <label htmlFor="password">Password : </label>
                      <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value)
                          }}
                      ></input>
                  </div>
                <div>
                      <label htmlFor="phoneNumber">Phone Number : </label>
                      <input
                          type="number"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => {
                              setPhoneNumber(e.target.value)
                          }}
                      ></input>
                  </div>
                  <div>
                      <span htmlFor="male">Gender : </span>
                      {
                          genderOption.map((item, i) => {
                              return <span key={i}>
                                  <input
                                      type="radio"
                                      id={item.value}
                                      value={item.value}
                                      checked={gender === item.value}
                                      onChange={(e) => {
                                          setGender(e.target.value)
                                      }}
                                  ></input>
                                  <label htmlFor={item.value}>{item.label}</label>
                              </span>
                          })
                      }
                  </div>
              </fieldset>
              <button type="submit">send</button>
          </form>
    </div>
  )
}

export default UpdateUser
