import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from 'postcss';
import Main from './layout/Main';
import Home from './Component/Home';
import Topic from './Component/Topic'
import Statistics from './Component/Statistics'
import Blog from './Component/Blog'
import TopicDetails from './Component/TopicDetails';
import Quiz from './Component/Quiz';
import Question from './Component/Question';
import ErrorPage from './Component/ErrorPage';

function App() {
  const router = createBrowserRouter([
  
    {
      path:'/',
      element:<Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      
      children:[
        {
          path:'/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/topic',
          element:<Topic></Topic>
        },
        {
          path:'/statistics',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/topic/:topicId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element:<TopicDetails></TopicDetails>
        }
       
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
