import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import "./styles.scss";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux";

interface HeaderProps {
  children: React.ReactNode;
  openEditModal?: () => void;
  openDeleteModal?: () => void;
  idPost?: number;
  config?: boolean;
}

export function Header({
  children,
  config,
  idPost,
  openEditModal,
  openDeleteModal,
}: HeaderProps) {
  const dispatch = useDispatch();

  const { id } = bindActionCreators(actionCreators, dispatch);

  function getId(idPost: any) {
    id(String(idPost));
  }

  return (
    <div className="container-header">
      <h1>{children}</h1>
      {config && (
        <div>
          <button onClick={() => getId(idPost)}>
            <img src={EditIcon} alt="edit icon" onClick={openEditModal} />
          </button>
          <button onClick={() => getId(idPost)}>
            <img src={DeleteIcon} alt="delete icon" onClick={openDeleteModal} />
          </button>
        </div>
      )}
    </div>
  );
}
