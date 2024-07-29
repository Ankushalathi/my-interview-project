import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CardPage from './CardPage/CardPage';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CardPage />
    },
  
  ])

  return (

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
