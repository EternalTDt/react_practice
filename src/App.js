import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {

  const [posts, SetPosts] = useState([
    {id: 1, title: "Javascript", body: "JavaScript"},
    {id: 2, title: "Javascript", body: "Dart"},
    {id: 3, title: "Javascript", body: "C++"},
    {id: 4, title: "Javascript", body: "C#"},
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов JS"/>
    </div>
  );
}

export default App;
