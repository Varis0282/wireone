import React, { useEffect } from 'react'
import { RouterProvider } from "react-router-dom";
import Routes from './routes/Routes';
import { Loader } from './common/components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByToken } from './common/apis/users';
import { setLoading } from './redux/loaderReducer';
import { setUser } from './redux/userReducer';

const App = () => {

  const dispatch = useDispatch();

  const fetchAndSetUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setLoading(true));
      const user = await getUserByToken(token);
      if (user.success) {
        localStorage.setItem('user', JSON.stringify(user.data));
        dispatch(setUser(user.data));
      }
    } else {
      window.location.href = '/login';
    }
    dispatch(setLoading(false));
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchAndSetUser();
    }
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && <Loader />}
      <RouterProvider router={Routes} />
    </div>
  )
}

export default App