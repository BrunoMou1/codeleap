import moment from "moment";
import { Header } from "../Header";
import "./styles.scss";

interface PostProps {
  username: string;
  created_datetime: Date;
  title: string;
  config: boolean;
  idPost: number;
  openEditModal: () => void;
  openDeleteModal: () => void;
  content: string;
}

export function Post({
  username,
  created_datetime,
  title,
  config,
  content,
  idPost,
  openEditModal,
  openDeleteModal,
}: PostProps) {

  const timeago = moment(created_datetime).fromNow();

  return (
    <div className="post">
      <Header
        idPost={idPost}
        openDeleteModal={openDeleteModal}
        openEditModal={openEditModal}
        config={config}
      >
        {title}
      </Header>
      <div className="post-body">
        <div className="content-header">
          <p>@{username}</p>
          <p>{timeago}</p>
        </div>
        <div className="post-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
