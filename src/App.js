import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from 'postcss';
import Main from './layout/Main';
import Home from './Component/Home';
import Topic from './Component/Topic'
import Statistics from './Component/Statistics'
import Blog from './Component/Blog'
import TopicDetails from './Component/TopicDetails';

function App() {
  const router = createBrowserRouter([
  
    {
      path:'/',
      element:<Main></Main>,
      
      children:[
        {
          path:'/',
          loader: ()=> fetch('quiz.json'),
          element: <Home></Home>
        },
        {
          path:'/topic',
          element:<Topic></Topic>
        },
        {
          path:'/statistics',
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
