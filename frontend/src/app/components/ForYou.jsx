"use client";
import moment from "moment";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { useTheme } from "../ThemeContext";

const ForYou = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const textareaRef = useRef(null);
  const { darkMode, toggleTheme } = useTheme();

  const getUserData = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5555/users/secure/${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error al obtener datos del usuario:", error);
      return null;
    }
  };

  const adjustTextareaHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight({ target: textareaRef.current });
    }
    const getAllPosts = async () => {
      try {
        const postsResponse = await axios.get("http://localhost:5555/posts/");
        const updatedPosts = await Promise.all(
          postsResponse.data.map(async (post) => {
            const user = await getUserData(post.owner);
            if (user) {
              return { ...post, user };
            }
            return post;
          })
        );
        setPosts(updatedPosts);
        console.log("Posts fetched with user data");
      } catch (error) {
        console.log(error);
      }
    };
    getAllPosts();
  }, []);

  const submitPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5555/posts/create", {
        _id: "675315ca09dbb0cb6634d660",
        content,
      });
      setContent(""); // Limpiar el contenido del textarea después de publicar
      await refreshPosts(); // Actualizar la lista de posts
    } catch (error) {
      console.log("Error al enviar el post:", error);
    }
  };

  // Función para actualizar la lista de posts
  const refreshPosts = async () => {
    try {
      const postsResponse = await axios.get("http://localhost:5555/posts/");
      const updatedPosts = await Promise.all(
        postsResponse.data.map(async (post) => {
          const user = await getUserData(post.owner);
          if (user) {
            return { ...post, user };
          }
          return post;
        })
      );
      setPosts(updatedPosts);
      console.log("Posts actualizados con datos de usuario");
    } catch (error) {
      console.log("Error al actualizar los posts:", error);
    }
  };

  return (
    <div className="col-span-6 p-4 border-l border-r dark:border-slate-800 pb-10 dark:text-slate-900">
      <div className="flex justify-between items-center uppercase bg-white dark:bg-slate-800 dark:text-slate-200 mb-4 rounded-xl overflow-hidden">
        <div className="text-center text-sm w-full py-4 bg-slate-200 hover:bg-slate-300 dark:bg-indigo-900 dark:hover:bg-indigo-950 duration-150 border-b-2 border-indigo-700 cursor-pointer">
          ⭐️ For You
        </div>
        <div className="text-center text-sm w-full py-4 hover:bg-slate-300 dark:hover:bg-indigo-950  duration-150 border-b-2 border-transparent cursor-pointer">
          👥 People
        </div>
        <div className="text-center text-sm  w-full py-4 hover:bg-slate-300 dark:hover:bg-indigo-950  duration-150 border-b-2 border-transparent cursor-pointer">
          🔥 Trending
        </div>
      </div>
      <div className="px-5">
        <div className="py-5">
          <div className="flex gap-x-3 mb-5">
            <figure>
              <img
                src="/images/profile_img.jpg"
                alt="profile_img"
                width={45}
                height={45}
                className="rounded-full"
              />
            </figure>
            <div className="w-full">
              <div className="">
                <select
                  name="public_to"
                  id="public_to"
                  className="bg-transparent border border-indigo-600 rounded-full text-indigo-600 px-3 text-sm mb-2 appearance-none outline-none text-center"
                >
                  <option value="1">Everyone</option>
                  <option value="2">Followers</option>
                  <option value="3">Friends</option>
                </select>
              </div>
              <div className="bg-white dark:text-slate-100 dark:bg-transparent rounded-lg overflow-hidden pb-2 dark:border dark:border-indigo-700">
                <textarea
                  maxLength={280}
                  placeholder="What's happening?"
                  ref={textareaRef}
                  id="autoResizeTextarea"
                  className="outline-none w-full max-h-[200px] overflow-y-auto resize-none p-2 bg-transparent"
                  onInput={adjustTextareaHeight}
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                />
                <div className="flex">
                  <p className="ml-auto pr-2">{`${content.length}/280`}</p>
                </div>
              </div>
              <div className="flex mt-3">
                <button
                  onClick={(e) => submitPost(e)}
                  className="ml-auto bg-indigo-600 text-white rounded-full px-4 py-1 text-lg"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <hr className="dark:border-slate-800" />
        </div>
        {/* POST LIST */}
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex gap-x-3 bg-white rounded-xl px-3 pt-3 pb-2 cursor-pointer dark:bg-slate-800 dark:text-slate-200"
            >
              <figure>
                <img
                  src="/images/profile_img.jpg"
                  alt="profile_img"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </figure>
              <div className="w-full">
                <div className="flex justify-between pt-1 pb-3">
                  <p className="font-semibold">
                    {post.user ? `${post.user.alias} • ` : "Unknown User • "}
                    <span className="text-indigo-600 hover:underline font-normal">
                      @{post.user ? post.user.username : "unknown"}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {moment(post.updatedAt).fromNow(true)}
                  </p>
                </div>
                <div className="pb-2">
                  <p className="text-sm">{post.content}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex duration-300 w-fit items-center gap-2 px-2 py-[3px] rounded-full group cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-700/20">
                    <i className="fa-regular fa-comment group-hover:text-blue-600"></i>
                    <p className="text-sm group-hover:text-blue-600">10</p>
                  </div>
                  <div className="flex duration-300 w-fit items-center gap-2 px-2 py-[3px] rounded-full group cursor-pointer hover:bg-red-100 dark:hover:bg-red-700/20">
                    <i className="fa-regular fa-heart group-hover:text-red-600"></i>
                    <p className="text-sm group-hover:text-red-600">10</p>
                  </div>
                  <div className="flex duration-300 w-fit items-center gap-2 px-2 py-[3px] rounded-full group cursor-pointer hover:bg-green-100 dark:hover:bg-green-700/20">
                    <i className="fa-solid fa-retweet group-hover:text-green-600"></i>
                    <p className="text-sm group-hover:text-green-600">10</p>
                  </div>
                  <div className="flex w-fit duration-300 cursor-pointer items-center gap-2 px-3 py-[10px] rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-700/20 group">
                    <i className="fa-regular fa-bookmark group-hover:text-yellow-600"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForYou;
