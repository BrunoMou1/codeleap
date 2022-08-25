import axios from "axios";
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { queryClient } from "../../services/queryClient";
import { Button } from "../button";
import { Input } from "../input";
import { TextArea } from "../textArea";

import "./styles.scss";

Modal.setAppElement("#root");

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EditModal({ isOpen, onRequestClose }: EditModalProps) {
  const [title, setTitle] = useState("");
  const [titleClone, setTitleClone] = useState("");

  const [content, setContent] = useState("");
  const [contentClone, setContentClone] = useState("");

  const state = useSelector((state: RootState) => state.id);

  const editPost = useMutation(
    async (id: string) => {
      if (title === titleClone && content === contentClone) {
        await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, {
          title,
          content,
        });
      } else if (title !== titleClone && content === contentClone) {
        await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, {
          title,
        });
      } else {
        await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, {
          content,
        });
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTitleClone(title);
    setContentClone(content);
    editPost.mutateAsync(state);
    onRequestClose();
    setTitle("");
    setContent("");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-edit-content"
    >
      <div className="edit-post">
        <p>Edit item</p>
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
          <div>
            <Button className="white" type="submit" onClick={onRequestClose}>
              CALCEL
            </Button>

            <Button
              className="black"
              type="submit"
              onClick={handleSubmit}
              disabled={title || content ? false : true}
            >
              SAVE
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
