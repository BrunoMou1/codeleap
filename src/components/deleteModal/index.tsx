import axios from "axios";
import { FormEvent } from "react";
import Modal from "react-modal";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { queryClient } from "../../services/queryClient";
import { Button } from "../button";

import "./styles.scss";

Modal.setAppElement("#root");

interface DeleteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteModal({ isOpen, onRequestClose }: DeleteModalProps) {
  const state = useSelector((state: RootState) => state.id);

  const deletePost = useMutation(
    async (id: string) => {
      const response = await axios.delete(
        `https://dev.codeleap.co.uk/careers/${id}/`
      );
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
    onRequestClose();
    deletePost.mutateAsync(state);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-delete-content"
    >
      <div className="delete-post">
        <p>Are you sure you want to delete this item?</p>
        <div>
          <Button className="white" type="submit" onClick={onRequestClose}>
            CANCEL
          </Button>
          <Button className="whtie" type="submit" onClick={handleSubmit}>
            DELETE
          </Button>
        </div>
      </div>
    </Modal>
  );
}
