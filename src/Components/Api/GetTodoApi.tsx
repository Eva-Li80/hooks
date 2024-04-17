import { useFetchApi } from '../../Hooks/CustomHooks/useFetchApi'
import "./api.scss"

const GetTodoApi = () => {
    const { data } = useFetchApi()
  return (
    <div className='api'>
        <p>{data.map((d) => d.title)}</p>
      
    </div>
  )
}

export default GetTodoApi
