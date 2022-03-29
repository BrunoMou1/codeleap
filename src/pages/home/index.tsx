import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

import { Header } from "../../components/Header";
import { Post } from "../../components/post";
import { RootState } from "../../redux/reducers";
import { EditModal } from "../../components/editModal";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textArea";
import { Input } from "../../components/input";
import { queryClient } from "../../services/queryClient";
import { DeleteModal } from "../../components/deleteModal";

import "./styles.scss";

interface PostProps {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export function Home() {
  const state = useSelector((state: RootState) => state.user);

  const [isEditModalOpen, SetIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, SetIsDeleteModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleOpenEditModal() {
    SetIsEditModalOpen(true);
  }

  function handleOpenDeleteModal() {
    SetIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    SetIsDeleteModalOpen(false);
  }

  function handleCloseEditModal() {
    SetIsEditModalOpen(false);
  }

  const { data } = useQuery(
    "posts",
    async () => {
      const response = await axios.get(`https://dev.codeleap.co.uk/careers/`)
      return response.data.results;
    }
  );

  const createPost = useMutation(
    async () => {
      const response = await axios.post("https://dev.codeleap.co.uk/careers/", {
        username: state,
        title,
        content,
      });
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    createPost.mutateAsync();
  }

  return (
    <>
      <EditModal
        onRequestClose={handleCloseEditModal}
        isOpen={isEditModalOpen}
      />
      <DeleteModal
        onRequestClose={handleCloseDeleteModal}
        isOpen={isDeleteModalOpen}
      />
      <div className="container">
        <Header>CodeLeap Network</Header>
        <div className="content">
          <div className="create-post">
            <p>What’s on your mind?</p>
            <form>
              <label id="username">Title</label>
              <Input
                id="username"
                name="username"
                placeholder="Hello world"
                className="input"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <label id="content">Content</label>
              <TextArea
                id="content"
                name="content"
                placeholder="Content here"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
              <Button
                className="black"
                type="submit"
                onClick={handleSubmit}
                disabled={title && content ? false : true}
              >
                CREATE
              </Button>
            </form>
          </div>
          <div className="posts">
            {data?.map((post: PostProps) => {
              return (
                <Post
                  key={post.id}
                  idPost={post.id}
                  username={post.username}
                  openEditModal={handleOpenEditModal}
                  openDeleteModal={handleOpenDeleteModal}
                  config={post.username === state ? true : false}
                  created_datetime={post.created_datetime}
                  title={post.title}
                  content={post.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
